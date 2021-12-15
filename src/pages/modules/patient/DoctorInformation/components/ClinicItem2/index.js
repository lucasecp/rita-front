import OutlineButton from '@/components/Button/Outline'
import React from 'react'
import { Container } from './styles'
import ClinicItemDetails from '../ClinicItemDetails2'
import { ReactComponent as VerifiedIcon } from '@/assets/icons/verified.svg'
import { ReactComponent as CloseIcon } from '@/assets/icons/close.svg'
import { Accordion } from '../../../ClinicInformation/components/styles'
import { useToggle } from '@/hooks/useToggle'

const ClinicItem = () => {
  const [state, toggle] = useToggle()
  return (
    <Container>
      <div>
        <div>
          <h2>Clinica Cardiológica + Vida</h2>
          <ul>
            {state ? (
              <li>
                <span>
                  Av. Médicos do Brasil, 800 - Saúde - Rio de Janeiro/RJ
                </span>
                <VerifiedIcon />
                <a href="">Como chegar</a>
              </li>
            ) : (
              <li>Saúde - Rio de janeiro - RJ</li>
            )}
          </ul>
        </div>
        {state ? (
          <CloseIcon onClick={toggle} />
        ) : (
          <OutlineButton onClick={toggle}>Ver detalhes</OutlineButton>
        )}
      </div>
      <Accordion data-expanded={state ? 1 : 0}>
        <ClinicItemDetails />
      </Accordion>
    </Container>
  )
}

export default ClinicItem
