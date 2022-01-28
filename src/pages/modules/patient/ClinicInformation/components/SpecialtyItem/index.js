import React from 'react'
import { Container } from './styles'
import OutlineButton from '@/components/Button/Outline'
import SpecialtyDetails from '../SpecialtyDetails'
import { ReactComponent as CloseIcon } from '@/assets/icons/close.svg'
import Accordion from '../../../dependents/AddDependentDocument/containers/MinorAge/components/Accordion'
import { useToggle } from '@/hooks/useToggle'

const SpecialtyItem = ({ specialtyInfo }) => {
  const [state, toggle] = useToggle()

  return (
    <Container>
      <div>
        <h2>{specialtyInfo.name}</h2>
        {state ? (
          <span onClick={toggle}>
            <CloseIcon />
          </span>
        ) : (
          <OutlineButton onClick={toggle}>Ver Especialistas</OutlineButton>
        )}
      </div>
      <Accordion
        expanded={state ? 1 : 0}
        hasChildren
        data-expanded={state ? 1 : 0}
      >
        {specialtyInfo?.doctorSpecialty?.map((dataSpecialtyDetails, index) => (
          <SpecialtyDetails
            key={index}
            dataSpecialtyDetails={{
              ...dataSpecialtyDetails,
              specialtyName: specialtyInfo.name,
            }}
            parentWasClosed={state}
          />
        ))}
      </Accordion>
    </Container>
  )
}
export default SpecialtyItem
