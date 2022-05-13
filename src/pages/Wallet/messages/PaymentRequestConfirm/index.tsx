import React, { useState, useEffect } from 'react'
import axios from 'axios'
import useLocalStorage from 'use-local-storage'

import apiUser from '@/services/apiUser'
import apiWallet, { getCallerId } from '@/services/apiWallet'
import { useModal } from '@/hooks/useModal'
import { useLoading } from '@/hooks/useLoading'
import { useAuth } from '@/hooks/login'
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import { InputPassword } from '@/components/Form/InputPassword'
import { InsufficientBalance } from '@/pages/Wallet/messages/InsufficientBalance'
import { toast } from '@/styles/components/toastify'
import { PaymentRequestAccessBlocked } from './blocked'
import { PaymentRequestAccessAttempt } from './attempt'

import { ReactComponent as ExclamationCircleIcon } from '@/assets/icons/exclamation-circle.svg'
import { Container } from './styles'

function validateRequired(value?: string | null) {
  return [null, undefined, ''].includes(value) ? 'Campo obrigatório.' : ''
}

const defaultMaximumAttempts = 3

type PaymentRequestConfirmProps = {
  data: RitaWallet.Model.PaymentRequest
}

export const PaymentRequestConfirm: React.FC<PaymentRequestConfirmProps> = ({
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

  async function handleConfirmClick() {
    const newErrors = {
      password: validateRequired(password),
    }
    const hasErrors = Object.values(newErrors).some((value) => value !== '')
    setErrors(newErrors)

    if (!hasErrors) {
      Loading.turnOn()
      let isAuthenticated = false

      try {
        // await apiWallet.post('/authentication/rita', {
        //   cpf: user.cpf,
        //   password,
        //   keepAlive: true,
        // })
        await apiUser.post('/login', {
          cpf: user.cpf,
          senha: password,
          permanecerConectado: true,
        })

        isAuthenticated = true
      } catch (error) {
        setRemaingAttempts(remaingAttempts - 1)

        if (axios.isAxiosError(error) && error.response) {
          if (remaingAttempts === 0) {
            const { data } =
              await apiWallet.get<RitaWallet.Model.WalletConfiguration>(
                '/data/configuration/numberCelBlocked',
              )

            showMessage(PaymentRequestAccessBlocked, {
              phoneNumber: data && data.value ? data.value : '',
            })
          } else {
            showMessage(PaymentRequestAccessAttempt, {
              data: paymentRequest,
              counter: remaingAttempts,
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
          const { data } = await apiWallet.post(`/payment/appointment`, {
            id: paymentRequest.id,
            callerId: getCallerId(),
            user: {
              ritaId: String(user.id),
              token: user.token,
            },
          })

          // if (!data) {
          //   throw new Error('Resposta vazia')
          // }

          // @MOCK
          data.scheduled = Math.random() < 0.5

          toast.success(
            `Pagamento ${
              data.scheduled ? 'agendado' : 'realizado'
            } com sucesso.`,
          )
          closeModal()
        } catch (error) {
          if (
            axios.isAxiosError(error) &&
            error.response?.data?.errorMessage === 'Insufficient balance'
          ) {
            const { data } = await apiWallet.get<RitaWallet.API.Get.Wallet>(
              '/wallet',
            )

            if (!data) {
              throw new Error('Resposta vazia')
            }

            showMessage(
              InsufficientBalance,
              {
                walletBalance: data.totalBalanceAmount,
                debitAmount: paymentRequest.debitAmount,
              },
              true,
            )
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
        <OutlineButton onClick={closeModal}>Cancelar</OutlineButton>
        <ButtonPrimary onClick={handleConfirmClick}>Confirmar</ButtonPrimary>
      </footer>
    </Container>
  )
}
