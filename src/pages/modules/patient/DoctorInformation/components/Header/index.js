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
        <h2>{doctorInfo?.name}</h2>
        <h4>
          {doctorInfo?.doctorSpecialty?.map((speciality, i) => {
            return i > 0
              ? ' - ' + speciality?.description
              : speciality?.description
          })}
        </h4>
        <ul>
          <li>
            <h6>
              Registro Profissional:
              <span>
                &nbsp; {doctorInfo?.crm} - {doctorInfo?.profissionalRegister} -{' '}
                {doctorInfo?.crmuf}
              </span>
            </h6>
          </li>
          <li>
            <h6>
              Especialidades:
              <span>
                &nbsp;
                {doctorInfo?.doctorSpecialty?.map((speciality, i) => {
                  return speciality.RQE
                    ? i > 0
                      ? ' | ' + speciality?.description + ' - ' + speciality.RQE
                      : speciality?.description + ' - ' + speciality.RQE + ' '
                    : i > 0
                    ? ' | ' + speciality?.description
                    : speciality?.description + ' '
                })}
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
