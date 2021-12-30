import React from 'react'
import { Container, DefaultImg, Profile } from './styles'
import { ReactComponent as VerifiedIcon } from '@/assets/icons/verified.svg'
import { ReactComponent as ArrowRightIcon } from '@/assets/icons/arrow-right2.svg'
import { useHistory } from 'react-router'
import { PATIENT_DOCTOR_INFORMATION } from '@/routes/constants/namedRoutes/routes'
import { DoctorInfoProps } from '../../types/index'

const DoctorInfo: React.FC<DoctorInfoProps> = ({ dataDoctor, isVerify }) => {
  const history = useHistory()

  return (
    <Container>
      {dataDoctor.photo ? (
        <Profile>
          <img src={'data:image/png;base64,' + dataDoctor.photo} />
        </Profile>
      ) : (
        <DefaultImg />
      )}

      <h4>{dataDoctor.name}</h4>
      <ul>
        <li>
          <div>
            <h6>Conselho Regional:</h6>
            <p>{dataDoctor.crm}</p>
          </div>
          {dataDoctor.verified && <VerifiedIcon />}
        </li>
        <li>
          <div>
            <h6>Especialidade:</h6>
            <p>{dataDoctor.specialtys}</p>
          </div>
        </li>
      </ul>
      <button
        onClick={() =>
          history.push(PATIENT_DOCTOR_INFORMATION, { idDoctor: dataDoctor.id })
        }
      >
        Ver mais <ArrowRightIcon />{' '}
      </button>
    </Container>
  )
}

export default DoctorInfo
