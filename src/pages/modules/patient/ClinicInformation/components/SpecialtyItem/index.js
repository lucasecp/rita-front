import React, { useState } from 'react'
import { Container } from './styles'
import OutlineButton from '@/components/Button/Outline'
import SpecialtyDetails from '../SpecialtyDetails'
import { ReactComponent as CloseIcon } from '@/assets/icons/close.svg'
import { Accordion } from '../styles'

const SpecialtyItem = () => {
  const [showSpecialtyDetails, setShowSpecialtyDetails] = useState(false)
  return (
    <Container>
      <div>
        <h2>Alergia</h2>
        {showSpecialtyDetails ? (
          <CloseIcon />
        ) : (
          <OutlineButton>Ver Especialistas</OutlineButton>
        )}
      </div>
      <Accordion expanded={showSpecialtyDetails}>
        <SpecialtyDetails />
        <SpecialtyDetails />
      </Accordion>
    </Container>
  )
}
export default SpecialtyItem
