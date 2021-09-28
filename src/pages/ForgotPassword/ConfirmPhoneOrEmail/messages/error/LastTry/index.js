import ButtonPrimary from '@/components/Button/Primary'
import React from 'react'

import warningIcon from '@/assets/icons/alerts/warning.svg'

import { Container } from '../../styles'
import { useModal } from '@/context/useModal'

function LastTry({ email, switchModalTo }) {
  const {closeModal} = useModal()

  const handleCloseModal = () => {
   if(!email && !switchModalTo) {
     return closeModal()
    }

   return switchModalTo('insert_token')
  }

  return (
    <Container>
      <img src={warningIcon} />
     {email && switchModalTo && <p>
        Por favor, verifique o número fornecido em seu{' '}
        {email ? 'e-mail' : 'dispositivo'}.
      </p>}
      <p>
        Esta é sua ultima tentativa, caso insira informações incorretas seu
        acesso será bloqueado.
      </p>
      <footer>
        <ButtonPrimary onClick={handleCloseModal}>
          OK
        </ButtonPrimary>
      </footer>
    </Container>
  )
}

export default LastTry
