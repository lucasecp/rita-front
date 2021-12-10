import React from 'react'
import { Container } from './styles'
import { ReactComponent as VerifiedIcon } from '@/assets/icons/verified.svg'
import { ReactComponent as WhatsAppIcon } from '@/assets/icons/whatsapp.svg'
import { ReactComponent as PhoneIcon } from '@/assets/icons/phone.svg'

const Header = () => {
  return (
    <Container>
      <div></div>
      <div>
        <h2>Clínica +Vida</h2>
        <ul>
          <li>
            Av. Médicos do Brasil, 800 - Saúde - Rio de Janeiro/RJ
            <VerifiedIcon />
            <a href="">Como chegar</a>
          </li>
          <li>
            <span>
              <PhoneIcon />
              (11) 3445-8765
            </span>
            <span>
              <WhatsAppIcon />
              (11) 98888.9900
            </span>
          </li>
        </ul>
      </div>
    </Container>
  )
}
export default Header
