import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import warningIcon from '@/assets/icons/alerts/warning.svg'
import { Container } from '../style'
import { useModal } from '@/context/useModal'

function BigSize() {
  const { closeModal } = useModal()

  return (
    <Container>
      <img src={warningIcon} />
      <p>
        O tamanho máximo do arquivo deve ser 10MB. Por favor, selecione outro
        arquivo.
      </p>
      <ButtonPrimary onClick={closeModal}>OK</ButtonPrimary>
    </Container>
  )
}

export default BigSize
