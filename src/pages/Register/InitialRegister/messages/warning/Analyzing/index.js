import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import WarningError from '@/assets/icons/alerts/warning.svg'

import { Container } from '../../styles'
import { useModal } from '@/context/useModal'

function Analyzing() {
  const { closeModal } = useModal()

  return (
    <Container>
      <img src={WarningError} />
      <p>
        Seus dados estão sendo analisados, pedimos que aguarde a aprovação pela
        nossa equipe.
      </p>
      <ButtonPrimary onClick={closeModal}>Ok</ButtonPrimary>
    </Container>
  )
}

export default Analyzing
