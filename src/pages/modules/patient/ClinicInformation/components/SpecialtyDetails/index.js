import React,{useEffect} from 'react'
import { Container } from './styles'
import { ReactComponent as DropdownIcon } from '@/assets/icons/dropdown.svg'
import SpecialtySubDetails from '../SpecialtySubDetails'
import { Accordion } from '../styles'
import { useToggle } from '@/hooks/useToggle'

const SpecialtyDetails = ({ parentWasClosed }) => {
  const [state, toggle] = useToggle()  

  useEffect(() => {
   if(!parentWasClosed && state) {
     toggle()
   }
  },[parentWasClosed])

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
      <Accordion data-expanded={state ? 1 : 0 }>
        <SpecialtySubDetails />
      </Accordion>
    </Container>
  )
}
export default SpecialtyDetails
