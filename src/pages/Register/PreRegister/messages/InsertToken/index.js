import React, { useEffect, useState } from 'react'

import InputText from '@/components/Form/InputText'
import ButtonPrimary from '@/components/Button/Primary'
import OutlineButton from '@/components/Button/Outline'

import { Container } from '../styles'
import RequestNewTokenTimer from './RequestNewTokenTimer'

function InsertToken({ onShowModal, email, phone }) {
  const [token, setToken] = useState('')
  const [hasError, setHasError] = useState(false)
  const [waitRequestNewToken, setWaitRequestNewToken] = useState(true)

  const INITIAL_TIME = 10
  // const INITIAL_TIME = 120

  const [time, setTime] = useState(INITIAL_TIME)

  const handleCloseModal = () => {
    onShowModal(false)
  }

  const onRequestNewToken = () => {
    setWaitRequestNewToken(true)
  }

  const accessPlatform = () => {
    const isTokenInvalid = true

    // if (isTokenInvalid) {
    //   return setHasError(true)
    // }
  }

  return (
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
        placeholder="0000000"
        value={token}
        setValue={setToken}
        hasError={hasError}
      />
      {hasError && (
        <small>
          *Por favor, verifique o número fornecido em seu dispositivo e tente
          novamente
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
  )
}

export default InsertToken
