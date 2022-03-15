import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import warning from '@/assets/icons/alerts/warning.svg'

import { Container, ButtonGroup } from '../style'

import { useModal } from '@/hooks/useModal'

function Generic(data) {
  const { closeModal } = useModal()

  return (
    <Container>
      <img src={warning} />
      <p>{data.message}</p>
      <ButtonPrimary onClick={closeModal}>Ok</ButtonPrimary>
    </Container>
  )
}

export default Generic
