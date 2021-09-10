import React, { useState } from 'react'

import InputText from '@/components/Form/InputText'
import ButtonPrimary from '@/components/Button/Primary'
import OutlineButton from '@/components/Button/Outline'

import { Container } from '../styles'
import SpinnerLoading from '@/styles/components/SpinnerLoading'

function InsertToken({ onShowModal, email, phone }) {
  const [token, setToken] = useState('')
  const [hasError, setHasError] = useState(false)
  const [waitRequestNewToken, setWaitRequestNewToken] = useState(false)

  console.log('email ', email)
  console.log('phone ', phone)

  const handleCloseModal = () => {
    onShowModal(false)
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
      {waitRequestNewToken && (
        <>
          <SpinnerLoading />
          <h4>Você pode solicitar um novo token em 159 segundos...</h4>
        </>
      )}
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
        <ButtonPrimary onClick={accessPlatform} disabled={token === ''}>
          Acessar
        </ButtonPrimary>
        <OutlineButton disabled={waitRequestNewToken}>
          Solicitar novo Token
        </OutlineButton>
      </footer>
    </Container>
  )
}

export default InsertToken
