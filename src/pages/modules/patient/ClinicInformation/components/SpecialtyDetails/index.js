import React from 'react'
import { Container } from './styles'
import { ReactComponent as DropdownIcon } from '@/assets/icons/dropdown.svg'
import SpecialtySubDetails from '../SpecialtySubDetails'
import { Accordion } from '../styles'
import { useToggle } from '@/hooks/useToggle'

const SpecialtyDetails = ({ parentWasClosed }) => {
  const [state, toggle] = useToggle()  

  return (
    <Container>
      <div>
        <div></div>
        <div>
          <h2>Dra. Maria Eduarda Sampaio Correia</h2>
          <h3>Alergista</h3>
        </div>
        <DropdownIcon onClick={toggle}/>
      </div>
      <Accordion data-expanded={state  ? 'show' : 'hidden' || !parentWasClosed ? 'hidden' : 'show'}>
        <SpecialtySubDetails />
      </Accordion>
    </Container>
  )
}
export default SpecialtyDetails
