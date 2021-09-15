import React, { useEffect, useState } from 'react'

import InputText from '@/components/Form/InputText'
import ButtonPrimary from '@/components/Button/Primary'
import OutlineButton from '@/components/Button/Outline'
import warningIcon from '@/assets/icons/alerts/warning.svg'

import { Container } from '../styles'
import RequestNewTokenTimer from './RequestNewTokenTimer'
import api from '@/services/api'
import Denied from '../error/Danied'
import InputMask from '@/components/Form/InputMask2'
import { useHistory } from 'react-router-dom'

const MODAL = {
  INSERT_TOKEN: 'insert_token',
  LAST_TRY: 'last_try',
  BLOCKED: 'blocked',
}

function InsertToken({ onShowModal, isLastTry, cpf, email, phone, onLoading }) {
  const history = useHistory()

  const [token, setToken] = useState('')
  const [hasError, setHasError] = useState(false)
  const [waitRequestNewToken, setWaitRequestNewToken] = useState(true)

  const [typeOfModal, setTypeOfModal] = useState(
    isLastTry ? MODAL.LAST_TRY : MODAL.INSERT_TOKEN
  )

  const handleCloseModal = () => {
    onShowModal(false)
  }

  const onRequestNewToken = async () => {
    onLoading(true)

    try {
      const response = await api.post(
        '/paciente/token',
        email
          ? {
              cpf,
              email,
            }
          : {
              cpf,
              celular: phone,
            }
      )

      if (response.data.ultimaTentativa) {
        switchModalTo(MODAL.LAST_TRY)
      }

      if (response.data.message === 'Usuario Bloqueado') {
        switchModalTo(MODAL.BLOCKED)
      }

      setWaitRequestNewToken(true)
    } catch ({ response }) {
      const messageFromApi = response?.data.message

      if (
        messageFromApi ===
        'Ultima tentativa antes de ser bloqueado definitivamente'
      ) {
        switchModalTo(MODAL.LAST_TRY)
      }

      if (messageFromApi === 'Usuario Bloqueado') {
        switchModalTo(MODAL.BLOCKED)
      }
    } finally {
      onLoading(false)
    }
  }

  const accessPlatform = async () => {
    onLoading(true)
    setHasError(false)

    try {
      const response = await api.get(
        `/paciente/token?token=${token}&cpf=${cpf}`
      )

      if (response.status === 200) {
        console.log(response.data)
        history.push('/cadastro/paciente/', { userData: response.data })
      }
    } catch ({ response }) {
      const messageFromApi = response?.data.message

      if (messageFromApi === 'Dados inválido') {
        setHasError(true)
      }

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
      onLoading(false)
    }
  }

  const switchModalTo = (modalName) => {
    setTypeOfModal(modalName)
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
            mask="######"
            maxLength="6"
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
            Esta é sua ultima tentativa, caso insira informações incorretas seu
            acesso será bloqueado.
          </p>
          <footer>
            <OutlineButton onClick={handleCloseModal}>Não</OutlineButton>
            <ButtonPrimary onClick={() => switchModalTo(MODAL.INSERT_TOKEN)}>
              Sim
            </ButtonPrimary>
          </footer>
        </Container>
      )}
      {typeOfModal === MODAL.BLOCKED && (
        <Denied onShowModal={handleCloseModal} />
      )}
    </>
  )
}

export default InsertToken
