import React from 'react'
import { Container } from './styles'
import { ReactComponent as VerifiedIcon } from '@/assets/icons/verified.svg'
import { ReactComponent as WhatsAppIcon } from '@/assets/icons/whatsapp.svg'
import { ReactComponent as PhoneIcon } from '@/assets/icons/phone.svg'

const Header = ({ clinicInfo }) => {
  return (
    <Container>
      <div> <img src={clinicInfo?.photo}/></div>
      <div>
        <h2>{clinicInfo?.name}</h2>
        <ul>
          <li>
            <span>
              {clinicInfo?.address}, {clinicInfo?.number},{' '}
              {clinicInfo?.complement} - {clinicInfo?.district} -{' '}
              {clinicInfo?.city} / {clinicInfo?.uf}
            </span>
            <VerifiedIcon />
            <a
              href={clinicInfo?.linkGoogleMap}
              target="_blank"
              rel="noreferrer"
            >
              Como chegar
            </a>
          </li>
          <li>
            {clinicInfo?.phone?.length > 10 ? (
              <a href={`https://api.whatsapp.com/send?phone=${clinicInfo?.phone}`}  target="_blank"
              rel="noreferrer">
                <WhatsAppIcon />
                {clinicInfo?.phone}
              </a>
            ) : (
              <span>
                <PhoneIcon />
                {clinicInfo?.phone}
              </span>
            )}
          </li>
        </ul>
      </div>
    </Container>
  )
}
export default Header
