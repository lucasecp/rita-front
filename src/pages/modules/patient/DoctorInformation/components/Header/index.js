import React from 'react'
import { Container } from './styles'
import { ReactComponent as VerifiedIcon } from '@/assets/icons/verified.svg'

const Header = ({ doctorInfo }) => {
  return (
    <Container>
      <div></div>
      <div>
        <h2>
          {doctorInfo?.title}&nbsp;{doctorInfo?.name}
        </h2>
        <h4>{doctorInfo?.doctorSpecialty.especialidade.descricao}</h4>
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
                {doctorInfo?.doctorSpecialty.especialidade.descricao} -
                {doctorInfo?.doctorSpecialty.RQE}
              </span>
              <VerifiedIcon />
            </h6>
          </li>
        </ul>
      </div>
    </Container>
  )
}

export default Header
