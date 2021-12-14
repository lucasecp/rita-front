import React from 'react'
import { Container } from './styles'
import { ReactComponent as DropdownIcon } from '@/assets/icons/dropdown.svg'
import SpecialtySubDetails from '../SpecialtySubDetails'

const SpecialtyDetails = () => {
  return (
    <Container>
      <div>
        <div></div>
        <div>
          <h2>Dra. Maria Eduarda Sampaio Correia</h2>
          <h3>Alergista</h3>
        </div>
        <DropdownIcon />
      </div>
      <SpecialtySubDetails />
    </Container>
  )
}
export default SpecialtyDetails
