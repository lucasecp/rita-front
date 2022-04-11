import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import warningIcon from '@/assets/icons/alerts/warning.svg'
import { Container } from './styles'
import { useModal } from '@/hooks/useModal'

export const PendingWarning: React.FC = () => {
  const { closeModal } = useModal()

  return (
    <Container>
      <img src={warningIcon} />
      <p>
        Os dados desse dependente estão sendo analisados, pedimos que aguarde a
        aprovação pela nossa equipe.
      </p>
      <footer>
        <ButtonPrimary onClick={closeModal}>Ok</ButtonPrimary>
      </footer>
    </Container>
  )
}
