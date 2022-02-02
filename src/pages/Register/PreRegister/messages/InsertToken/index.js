import React, { useEffect, useState } from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import OutlineButton from '@/components/Button/Outline'
import warningIcon from '@/assets/icons/alerts/warning.svg'

import { Container } from '../styles'
import RequestNewTokenTimer from './RequestNewTokenTimer'
import apiPatient from '@/services/apiPatient'
import Denied from '../error/Danied'
import InputMask from '@/components/Form/InputMask'
import { useHistory } from 'react-router-dom'
import { useLoading } from '@/hooks/useLoading'
import { useModal } from '@/hooks/useModal'
import { REGISTER_PATIENT } from '@/routes/constants/namedRoutes/routes'

const MODAL = {
  INSERT_TOKEN: 'insert_token',
  LAST_TRY: 'last_try',
  LAST_TRY_REQUEST_NEW_TOKEN: 'last_try_request_new_token',
  BLOCKED: 'blocked',
}

function InsertToken({ isLastTry, cpf, email, phone, company }) {
  const history = useHistory()
  const { closeModal } = useModal()

  const [token, setToken] = useState('')
  const [hasError, setHasError] = useState(false)
  const [waitRequestNewToken, setWaitRequestNewToken] = useState(true)
  const [acessOrRequestToken, setAcessOrRequestToken] = useState(false)
  const { Loading } = useLoading()

  const [typeOfModal, setTypeOfModal] = useState(
    isLastTry ? MODAL.LAST_TRY : MODAL.INSERT_TOKEN,
  )
  useEffect(() => {
    setTypeOfModal(isLastTry ? MODAL.LAST_TRY : MODAL.INSERT_TOKEN)
  }, [isLastTry])

  const switchModalTo = (modalName) => {
    setTypeOfModal(modalName)
  }

  const onRequestNewToken = async () => {
    Loading.turnOn()
    setAcessOrRequestToken(true)
    try {
      const response = await apiPatient.post(
        '/paciente/token',
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

      setWaitRequestNewToken(true)
    } catch ({ response }) {
      const messageFromApi = response?.data.message

      if (messageFromApi === 'Usuario Bloqueado') {
        switchModalTo(MODAL.BLOCKED)
      }
    } finally {
      Loading.turnOff()
    }
  }

  const accessPlatform = async () => {
    Loading.turnOn()
    setHasError(false)
    setAcessOrRequestToken(true)

    try {
      const response = await apiPatient.get(
        `/paciente/token?token=${token}&cpf=${cpf}`,
      )

      if (response.status === 200) {
        closeModal()
        history.push(REGISTER_PATIENT, {
          userData: { ...response.data, company },
        })
      }
    } catch ({ response }) {
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
          <InputMask
            placeholder="000000"
            value={token}
            setValue={setToken}
            hasError={hasError}
            mask="999999"
          />
          {hasError && (
            <small>
              {phone &&
                '*Por favor, verifique o número fornecido em seu celular e tente novamente'}
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
            <ButtonPrimary onClick={accessPlatform} disabled={token === ''}>
              Acessar
            </ButtonPrimary>
          </footer>
        </Container>
      )}
      {typeOfModal === MODAL.LAST_TRY && (
        <Container>
          <img src={warningIcon} />
          <p>
            {acessOrRequestToken
              ? `Por favor, verifique o número fornecido em seu ${
                  email ? 'email' : 'celular'
                }. Esta é sua última tentativa, caso realize nova solicitação, seu acesso será bloqueado! Deseja continuar?`
              : 'Esta é sua última tentativa, caso insira informações incorretas seu acesso será bloqueado.'}
          </p>
          <footer>
            {acessOrRequestToken ? (
              <>
                <OutlineButton
                  onClick={() => {
                    closeModal()
                    setAcessOrRequestToken(false)
                  }}
                >
                  Não
                </OutlineButton>
                <ButtonPrimary
                  onClick={() => switchModalTo(MODAL.INSERT_TOKEN)}
                >
                  Sim
                </ButtonPrimary>
              </>
            ) : (
              <ButtonPrimary onClick={closeModal}>OK</ButtonPrimary>
            )}
          </footer>
        </Container>
      )}
      {typeOfModal === MODAL.BLOCKED && <Denied />}
    </>
  )
}

export default InsertToken
