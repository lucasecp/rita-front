import React,{useEffect} from 'react'
import { Container, DropdownIconStyled } from './styles'
import SpecialtySubDetails from '../SpecialtySubDetails'
import { Accordion } from '../styles'
import { useToggle } from '@/hooks/useToggle'

const SpecialtyDetails = ({ parentWasClosed,dataSpecialtyDetails }) => {
  const [state, toggle] = useToggle()  

  useEffect(() => {
   if(!parentWasClosed && state) {
     toggle()
   }
  },[parentWasClosed])

  return (
    <Container>
      <div onClick={toggle}>
        <div>
        <div></div>
        <div>
          <h2>{dataSpecialtyDetails.title} {dataSpecialtyDetails?.name}</h2>
          <h3>{dataSpecialtyDetails.specialtyName}</h3>
        </div>
        </div>
        <DropdownIconStyled data-expanded={state ? 1 : 0 }/>
      </div>
      <Accordion data-expanded={state ? 1 : 0 }>
        <SpecialtySubDetails dataSpecialtyDetails={dataSpecialtyDetails}/>
      </Accordion>
    </Container>
  )
}
export default SpecialtyDetails
