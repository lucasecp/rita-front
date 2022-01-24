import OutlineButton from '@/components/Button/Outline'
import React from 'react'
import { Container } from './styles'
import ClinicItemDetails from '../ClinicItemDetails'
import { ReactComponent as VerifiedIcon } from '@/assets/icons/verified.svg'
import { ReactComponent as CloseIcon } from '@/assets/icons/close.svg'
import Accordion from '../../../dependents/AddDependentDocument/containers/MinorAge/components/Accordion'
import { useToggle } from '@/hooks/useToggle'
import CustomTooltip from '@/components/Tooltip'

const ClinicItem = ({ clinic }) => {
  const [state, toggle] = useToggle()
  return (
    <Container>
      <div>
        <div>
          <h2>{clinic?.clinic.description}</h2>
          <ul>
            {state ? (
              <li>
                <span>
                  {clinic?.clinic.address} - {clinic?.clinic.district} -{' '}
                  {clinic?.clinic.city}
                </span>
                {clinic?.verified && (
                  <CustomTooltip label="Verificado">
                    <VerifiedIcon />
                  </CustomTooltip>
                )}
                <a
                  href={clinic?.linkGoogleMap}
                  target="_blank"
                  rel="noreferrer"
                >
                  Como chegar
                </a>
              </li>
            ) : (
              <li>
                {clinic?.clinic.district} - {clinic?.clinic.city}
              </li>
            )}
          </ul>
        </div>
        {state ? (
          <CloseIcon onClick={toggle} />
        ) : (
          <OutlineButton onClick={toggle}>Ver detalhes</OutlineButton>
        )}
      </div>
      <Accordion expanded={state ? 1 : 0}>
        <ClinicItemDetails clinicDetails={clinic} />
      </Accordion>
    </Container>
  )
}

export default ClinicItem
