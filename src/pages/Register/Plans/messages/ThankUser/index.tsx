import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import success from '@/assets/icons/alerts/success.svg'
import { Container, ButtonGroup } from './styles'
import { useModal } from '@/hooks/useModal'
import { useHistory } from 'react-router'
import { INITIAL_PAGE } from '@/routes/constants/namedRoutes/routes'

export const ThankUser: React.FC = () => {
  const { closeModal } = useModal()
  const history = useHistory()

  const OnConfirm = () => {
    closeModal()
    history.push(INITIAL_PAGE)
  }

  return (
    <Container>
      <img src={success} />
      <p>Obrigada por fazer parte da Rita Saúde</p>
      <ButtonGroup>
        <ButtonPrimary onClick={OnConfirm}>Ok</ButtonPrimary>
      </ButtonGroup>
    </Container>
  )
}
