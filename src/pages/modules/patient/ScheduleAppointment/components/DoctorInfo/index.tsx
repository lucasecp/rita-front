import React from 'react'
import { Container, DefaultImg, Profile } from './styles'
import { ReactComponent as VerifiedIcon } from '@/assets/icons/verified.svg'
import { ReactComponent as WaitingIcon } from '@/assets/icons/waiting.svg'
import { ReactComponent as ArrowRightIcon } from '@/assets/icons/arrow-right2.svg'
import { useHistory } from 'react-router'
import { PATIENT_DOCTOR_INFORMATION } from '@/routes/constants/namedRoutes/routes'
import { DoctorInfoProps } from '../../types/index'
import CustomTooltip from '@/components/Tooltip'

const DoctorInfo: React.FC<DoctorInfoProps> = ({ dataDoctor }) => {
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
          {dataDoctor.verified ? (
            <CustomTooltip label="Conselho de classe validado">
              <VerifiedIcon />
            </CustomTooltip>
          ) : (
            <CustomTooltip label="Conselho de classe aguardando validação">
              <WaitingIcon />
            </CustomTooltip>
          )}
        </li>
        <li>
          <div>
            <h6>Especialidade:</h6>
            {dataDoctor.specialtys.map((spec) => (
              <div key={spec.name}>
                <p>
                  {spec.RQE ? `${spec.name} - RQE Nº: ${spec.RQE}` : spec.name}
                </p>
                {spec.verified && spec.RQE !== undefined && (
                  <CustomTooltip label="RQE validado">
                    <VerifiedIcon />
                  </CustomTooltip>
                )}
                {!spec.verified && spec.RQE !== undefined && (
                  <CustomTooltip label="RQE aguardando validação">
                    <WaitingIcon />
                  </CustomTooltip>
                )}
              </div>
            ))}
          </div>
        </li>
      </ul>
      <button
        onClick={() =>
          history.push(PATIENT_DOCTOR_INFORMATION, {
            idDoctor: dataDoctor.id,
            urlPrevResults: window.location.search,
          })
        }
      >
        Ver mais <ArrowRightIcon />{' '}
      </button>
    </Container>
  )
}

export default DoctorInfo
