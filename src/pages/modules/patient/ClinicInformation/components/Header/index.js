import React from 'react'
import { Container } from './styles'
import { ReactComponent as VerifiedIcon } from '@/assets/icons/verified.svg'
import { ReactComponent as WhatsAppIcon } from '@/assets/icons/whatsapp.svg'
import { ReactComponent as PhoneIcon } from '@/assets/icons/phone.svg'
import { formatMobilePhone } from '@/helpers/formatMobilePhone'
import { formatPhone } from '@/helpers/formatPhone'
import CustomTooltip from '@/components/Tooltip'

const Header = ({ clinicInfo }) => {
  return (
    <Container>
      <div>
        <img
          src={`data:image/png;base64,${clinicInfo?.photo}`}
          alt="Imagem da clínica"
        />
      </div>
      <div>
        <h2>{clinicInfo?.name}</h2>
        <ul>
          <li>
            <span>
              {clinicInfo?.address}, {clinicInfo?.number},{' '}
              {clinicInfo?.complement} - {clinicInfo?.district} -{' '}
              {clinicInfo?.city} / {clinicInfo?.uf}
            </span>
            {clinicInfo?.validAddress && (
              <CustomTooltip label="Verificado">
                <VerifiedIcon />
              </CustomTooltip>
            )}
            <a
              href={clinicInfo?.linkGoogleMap}
              target="_blank"
              rel="noreferrer"
              className="link-address"
            >
              Como chegar
            </a>
          </li>
          <li>
            {clinicInfo?.phone?.length > 10 ? (
              <a
                href={`https://api.whatsapp.com/send?phone=${clinicInfo?.phone}`}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon />
                {formatMobilePhone(clinicInfo?.phone)}
              </a>
            ) : (
              <span>
                <PhoneIcon />
                {formatPhone(clinicInfo?.phone)}
              </span>
            )}
          </li>
        </ul>
      </div>
    </Container>
  )
}
export default Header
