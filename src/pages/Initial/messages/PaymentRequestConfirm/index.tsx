import React, { useState, useEffect } from 'react'
import axios from 'axios'
import useLocalStorage from 'use-local-storage'

import apiWallet from '@/services/apiWallet'
import { ReactComponent as WhatsappIcon } from '@/assets/icons/whatsapp.svg'
import { ReactComponent as ExclamationCircleIcon } from '@/assets/icons/exclamation-circle.svg'
import { ReactComponent as TimesCircleIcon } from '@/assets/icons/times-circle.svg'

import onlyNumbers from '@/helpers/clear/onlyNumbers'
import { useModal } from '@/hooks/useModal'
import { Container } from './styles'
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import { useLoading } from '@/hooks/useLoading'
import { useAuth } from '@/hooks/login'
import { InputPassword } from '@/components/Form/InputPassword'
import InsufficientBalance from '@/pages/Initial/messages/InsufficientBalance'
import { toast } from '@/styles/components/toastify'

function validateRequired(value?: string | null) {
  return [null, undefined, ''].includes(value) ? 'Campo obrigatório.' : ''
}

type PaymentRequestAccessBlockedProps = {
  phoneNumber?: string
}

const PaymentRequestAccessBlocked: React.FC<PaymentRequestAccessBlockedProps> = ({
  phoneNumber,
}) => {
  const { logout } = useAuth()
  const { closeModal } = useModal()
  const [phoneLink, setPhoneLink] = useState('')
  const [whatsappLink, setWhatsappLink] = useState('')

  useEffect(() => {
    const url = new URL(`https://wa.me/${onlyNumbers(phoneNumber)}`)
    url.search = new URLSearchParams({
      text: 'Meu acesso foi bloqueado no Rita Saúde'
    }).toString()

    setPhoneLink(`tel:${onlyNumbers(phoneNumber)}`)
    setWhatsappLink(url.toString())
  }, [phoneNumber])

  function handleOkClick() {
    closeModal()
    logout()
  }

  return (
    <Container variant="danger">
      <header>
        <TimesCircleIcon />
      </header>

      <section>
        <p>
          Seu acesso foi bloqueado devido à excesso de tentativas.
          <br />
          Pedimos que entre em contato com a central de atendimento.
          {' '}
          {phoneNumber && (
            <>
              <a href={phoneLink} target="_blank">
                {phoneNumber}
              </a>
              {' '}
              <a href={whatsappLink} target="_blank">
                <WhatsappIcon />
              </a>
            </>
          )}
        </p>
      </section>

      <footer>
        <ButtonPrimary onClick={handleOkClick}>OK</ButtonPrimary>
      </footer>
    </Container>
  )
}

type PaymentRequestAccessAttemptProps = {
  data: RitaWallet.PaymentRequest
  counter?: number
}

const PaymentRequestAccessAttempt: React.FC<PaymentRequestAccessAttemptProps> = ({
  data,
  counter = 0,
}) => {
  const { showMessage } = useModal()

  function handlerTryAgainClick() {
    showMessage(PaymentRequestConfirm, { data })
  }

  return (
    <Container variant="danger">
      <header>
        <TimesCircleIcon />
      </header>

      <section>
        <p>
          A senha digitada é inválida.
          <br />
          Você tem ainda {counter} tentativa{counter > 1 ? 's' : ''}.
        </p>
      </section>

      <footer>
        <ButtonPrimary onClick={handlerTryAgainClick}>
          Tente Novamente
        </ButtonPrimary>
      </footer>
    </Container>
  )
}

const defaultMaximumAttempts = 3

type PaymentRequestConfirmProps = {
  data: RitaWallet.PaymentRequest
}

const PaymentRequestConfirm: React.FC<PaymentRequestConfirmProps> = ({
  data: paymentRequest,
}) => {
  const { closeModal, showMessage } = useModal()
  const { user } = useAuth()
  const { Loading } = useLoading()
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<{ password?: string }>({})
  const [remaingAttempts, setRemaingAttempts] = useLocalStorage(
    '@Rita/PaymentRequest/RemaingAttempts',
    defaultMaximumAttempts,
  )

  async function handleConfirmClick () {
    const newErrors = {
      password: validateRequired(password),
    }
    const hasErrors = Object.values(newErrors).some((value) => value !== '')
    setErrors(newErrors)

    if (!hasErrors) {
      Loading.turnOn()
      let isAuthenticated = false

      try {
        const { data } = await apiWallet.post('/authentication/rita', {
          cpf: user.cpf,
          password: password,
        })

        isAuthenticated = true
      } catch (error) {
        setRemaingAttempts(remaingAttempts - 1)

        if (axios.isAxiosError(error) && error.response) {
          if (remaingAttempts === 0) {
            const { data } = await apiWallet.get('/wallet-configuration', {
              params: {
                where: JSON.stringify({ key: 'numberCelBlocked' })
              }
            })
            let phoneNumber

            if (data && Array.isArray(data) && data.length && data[0].value) {
              phoneNumber = data[0].value
            }

            showMessage(PaymentRequestAccessBlocked, { phoneNumber })
          } else {
            showMessage(PaymentRequestAccessAttempt, {
              data: paymentRequest,
              counter: remaingAttempts
            })
          }
        } else {
          if (error instanceof Error) {
            toast.error(error.message)
          }

          console.error(error)
        }
      }

      if (isAuthenticated) {
        try {
          const { data } = await apiWallet.get(`/payment/pay/${paymentRequest.id}`)

          // if (!data) {
          //   throw new Error('Resposta vazia')
          // }

          // @MOCK
          data.scheduled = Math.random() < 0.5

          toast.success(
            `Pagamento ${data.scheduled ? 'agendado' : 'realizado'} com sucesso.`
          )
          closeModal()
        } catch (error) {
          if (
            axios.isAxiosError(error) &&
            error.response?.data?.errorMessage === 'Insufficient balance'
          ) {
            const { data } = await apiWallet.get<RitaWallet.Wallet>('/wallet-balance')

            if (!data) {
              throw new Error('Resposta vazia')
            }

            showMessage(InsufficientBalance, {
              walletBalance: data.crownBalance + data.cashbackBalance,
              debitAmount: paymentRequest.debitAmount,
            }, true)
          } else {
            if (error instanceof Error) {
              toast.error(error.message)
            }

            console.error(error)
            closeModal()
          }
        }
      }

      Loading.turnOff()
    }
  }

  return (
    <Container variant="info">
      <header>
        <ExclamationCircleIcon />
      </header>

      <section>
        <h3>Autenticação</h3>
        <p>Digite sua senha para confirmar o pagamento.</p>
        <InputPassword
          name="password"
          placeholder="Senha"
          value={password}
          setValue={setPassword}
          hasError={Boolean(errors.password)}
          messageError={errors.password}
          onBlur={() =>
            setErrors({ ...errors, password: validateRequired(password) })
          }
          onKeyUp={() =>
            setErrors({ ...errors, password: validateRequired(password) })
          }
          style={{ marginTop: '10px' }}
        />
      </section>

      <footer>
        <OutlineButton onClick={closeModal}>
          Cancelar
        </OutlineButton>
        <ButtonPrimary onClick={handleConfirmClick}>
          Confirmar
        </ButtonPrimary>
      </footer>
    </Container>
  )
}

export default PaymentRequestConfirm
