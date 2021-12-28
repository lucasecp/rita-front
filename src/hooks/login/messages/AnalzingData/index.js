import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import warningIcon from '@/assets/icons/alerts/warning.svg'

import { Container } from '../style'

import { useModal } from '@/hooks/useModal'

function AnalyzingData() {
  const { closeModal } = useModal()

  return (
    <Container>
      <img src={warningIcon} />
      <p>
        Seus dados estão sendo analisados, pedimos que aguarde a aprovação pela
        nossa equipe.
      </p>
      <ButtonPrimary onClick={closeModal}>OK</ButtonPrimary>
    </Container>
  )
}

export default AnalyzingData
