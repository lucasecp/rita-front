import React from 'react'
import { Container, DoctorImage, DefaultImage } from './styles'
import { ReactComponent as VerifiedIcon } from '@/assets/icons/verified.svg'
import CustomTooltip from '@/components/Tooltip'

const Header = ({ doctorInfo }) => {
  return (
    <Container>
      {doctorInfo?.photo ? (
        <DoctorImage>
          <img
            src={`data:image/png;base64,${doctorInfo?.photo}`}
            alt="Imagem do Médico"
          />
        </DoctorImage>
      ) : (
        <DefaultImage />
      )}
      <div>
        <h2>
          {doctorInfo?.title}&nbsp;{doctorInfo?.name}
        </h2>
        <h4>{doctorInfo?.doctorSpecialty?.especialidade?.descricao}</h4>
        <ul>
          <li>
            <h6>
              Conselho Regional:
              <span>
                &nbsp;CRM - {doctorInfo?.crm} - {doctorInfo?.crmuf}
              </span>
            </h6>
          </li>
          <li>
            <h6>
              Especialidades:
              <span>
                &nbsp;
                {doctorInfo?.doctorSpecialty?.especialidade?.descricao} -
                {doctorInfo?.doctorSpecialty.RQE}
              </span>
              {doctorInfo?.verified && (
                <CustomTooltip label="Verificado">
                  <VerifiedIcon />
                </CustomTooltip>
              )}
            </h6>
          </li>
        </ul>
      </div>
    </Container>
  )
}

export default Header
