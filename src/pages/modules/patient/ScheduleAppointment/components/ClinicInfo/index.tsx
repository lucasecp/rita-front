import React from 'react'
import { Link } from 'react-router-dom'
import { Container, DefaultPhoto, PhotoClinic } from './styles'
import { ReactComponent as ArrowRightIcon } from '@/assets/icons/arrow-right2.svg'
import { ClinicInfoProps } from '../../types'
import { PATIENT_CLINIC_INFORMATION } from '@/routes/constants/namedRoutes/routes'

const ClinicInfo: React.FC<ClinicInfoProps> = ({ dataClinic }) => {
  return (
    <Container>
      {dataClinic.photo ? (
        <PhotoClinic>
          <img src={'data:image/png;base64,' + dataClinic.photo} />
        </PhotoClinic>
      ) : (
        <DefaultPhoto />
      )}
      <h4>{dataClinic.name}</h4>
      <ul>
        <li>
          <h6>Especialidades:</h6>
          <div>
            {dataClinic.specialtys.map((spec, index, array) => (
              <p key={index}>{index < array.length - 1 ? `${spec} -` : spec}</p>
            ))}
          </div>
        </li>
      </ul>
      <Link
        to={{
          pathname: PATIENT_CLINIC_INFORMATION,
          state: { idClinic: dataClinic.id },
        }}
      >
        Ver mais <ArrowRightIcon />{' '}
      </Link>
    </Container>
  )
}

export default ClinicInfo
