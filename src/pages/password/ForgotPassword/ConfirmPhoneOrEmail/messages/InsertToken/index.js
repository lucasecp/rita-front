import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useLoading } from '@/hooks/useLoading'

import ButtonPrimary from '@/components/Button/Primary'
import OutlineButton from '@/components/Button/Outline'

import { Container } from '../styles'
import RequestNewTokenTimer from './RequestNewTokenTimer'
import Denied from '../error/Denied'
import LastTry from '../error/LastTry'
import apiUser from '@/services/apiUser'
import { useModal } from '@/hooks/useModal'
import InputText from '@/components/Form/InputText'
import { DEFINE_PASSWORD } from '@/routes/constants/namedRoutes/routes'

const MODAL = {
  INSERT_TOKEN: 'insert_token',
  LAST_TRY: 'last_try',
  BLOCKED: 'blocked',
}

function InsertToken({ isLastTry, cpf, email, phone }) {
  const history = useHistory()
  const { Loading } = useLoading()
  const { closeModal } = useModal()

  const [token, setToken] = useState('')
  const [hasError, setHasError] = useState(false)
  const [waitRequestNewToken, setWaitRequestNewToken] = useState(true)

  const [typeOfModal, setTypeOfModal] = useState(
    isLastTry ? MODAL.LAST_TRY : MODAL.INSERT_TOKEN,
  )
  useEffect(() => {
    setTypeOfModal(isLastTry ? MODAL.LAST_TRY : MODAL.INSERT_TOKEN)
  }, [isLastTry])

  const switchModalTo = modalName => {
    setTypeOfModal(modalName)
  }

  const onRequestNewToken = async () => {
    Loading.turnOn()

    try {
      setWaitRequestNewToken(true)
      const response = await apiUser.post(
        '/token',
        email
          ? {
              cpf,
              email,
            }
          : {
              cpf,
              celular: phone,
            },
      )

      if (response?.data.ultimaTentativa) {
        switchModalTo(MODAL.LAST_TRY)
      }
    } catch ({ response }) {
      const messageFromApi = response?.data.message

      if (messageFromApi === 'Usuario Bloqueado') {
        switchModalTo(MODAL.BLOCKED)
      }
    } finally {
      Loading.turnOff()
    }
  }

  const goToDefinePassword = async () => {
    setHasError(false)

    try {
      Loading.turnOn()
      const response = await apiUser.get(`/token?token=${token}&cpf=${cpf}`)
      if (response.status === 200) {
        if (response?.data.ultimaTentativa) {
          setHasError(true)
          return switchModalTo(MODAL.LAST_TRY)
        }
        setToken('')
        closeModal()
        history.push(DEFINE_PASSWORD, { cpf, ...response.data })
      }
    } catch ({ response }) {
      if (response.status === 400) {
        const messageFromApi = response?.data.message
        setHasError(true)

        if (
          messageFromApi ===
          'Ultima tentativa antes de ser bloqueado definitivamente'
        ) {
          setHasError(true)
          switchModalTo(MODAL.LAST_TRY)
        }

        if (messageFromApi === 'Usuario Bloqueado') {
          switchModalTo(MODAL.BLOCKED)
        }
      }
    } finally {
      Loading.turnOff()
    }
  }

  return (
    <>
      {typeOfModal === MODAL.INSERT_TOKEN && (
        <Container>
          <h3>
            Foi enviado um token para o
            {phone &&
              ` celular ${phone}. Quando chegar informe abaixo o número que consta neste celular.`}
            {email &&
              ` email ${email}. Informe o número fornecido no e-mail enviado.`}
          </h3>
          <h5>(Não saia desta tela enquanto não concluir esse processo)</h5>
          <h2>Informe o token abaixo:</h2>
          <RequestNewTokenTimer
            active={waitRequestNewToken}
            onFinishTimer={setWaitRequestNewToken}
          />
          <InputText
            placeholder="000000"
            value={token}
            setValue={setToken}
            hasError={hasError}
            type="number"
          />
          {hasError && (
            <small>
              {phone &&
                '*Por favor, verifique o número fornecido em seu dispositivo e tente novamente'}
              {email &&
                '*Por favor, verifique o número enviado para seu e-mail e tente novamente'}
            </small>
          )}
          <footer>
            <OutlineButton
              disabled={waitRequestNewToken}
              onClick={onRequestNewToken}
            >
              Solicitar novo Token
            </OutlineButton>
            <ButtonPrimary onClick={goToDefinePassword} disabled={token === ''}>
              Acessar
            </ButtonPrimary>
          </footer>
        </Container>
      )}
      {typeOfModal === MODAL.LAST_TRY && (
        <LastTry
          email={email}
          switchModalTo={switchModalTo}
          requestNewToken={true}
        />
      )}
      {typeOfModal === MODAL.BLOCKED && <Denied />}
    </>
  )
}

export default InsertToken
