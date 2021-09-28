import ButtonPrimary from '@/components/Button/Primary'
import React from 'react'

import warningIcon from '@/assets/icons/alerts/warning.svg'

import { Container } from '../../styles'

function LastTry({ email, switchModalTo }) {
  return (
    <Container>
      <img src={warningIcon} />
      <p>
        Por favor, verifique o número fornecido em seu{' '}
        {email ? 'e-mail' : 'dispositivo'}.
      </p>
      <p>
        Esta é sua ultima tentativa, caso insira informações incorretas seu
        acesso será bloqueado.
      </p>
      <footer>
        <ButtonPrimary onClick={() => switchModalTo('insert_token')}>
          OK
        </ButtonPrimary>
      </footer>
    </Container>
  )
}

export default LastTry
