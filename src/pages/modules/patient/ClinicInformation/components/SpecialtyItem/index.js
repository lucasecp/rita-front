import React from 'react'
import { Container } from './styles'
import OutlineButton from '@/components/Button/Outline'
import SpecialtyDetails from '../SpecialtyDetails'
import { ReactComponent as CloseIcon } from '@/assets/icons/close.svg'
import { Accordion } from '../styles'
import { useToggle } from '@/hooks/useToggle'

const SpecialtyItem = () => {
  const [state, toggle] = useToggle()
  return (
    <Container>
      <div>
        <h2>Alergia</h2>
        {state ? (
          <CloseIcon onClick={toggle} />
        ) : (
          <OutlineButton onClick={toggle}>Ver Especialistas</OutlineButton>
        )}
      </div>
      <Accordion data-expanded={state ? 'show' : 'hidden' } >
        <SpecialtyDetails parentWasClosed={state} />
        <SpecialtyDetails parentWasClosed={state} />
      </Accordion>
    </Container>
  )
}
export default SpecialtyItem
