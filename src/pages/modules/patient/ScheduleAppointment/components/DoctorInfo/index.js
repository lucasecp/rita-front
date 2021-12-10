import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styles'
import { ReactComponent as VerifiedIcon } from '@/assets/icons/verified.svg'
import { ReactComponent as ArrowRightIcon } from '@/assets/icons/arrow-right2.svg'

const DoctorInfo = ({ name, isVerify }) => {
  return (
    <Container>
      <div></div>
      <h4>Dr. Fábio Mendes</h4>
      <ul>
        <li>
          <div>
            <h6>Conselho Regional:</h6>
            <p>CRM - 11123 - RJ</p>
          </div>
          {isVerify && <VerifiedIcon />}
        </li>
        <li>
          <div>
          <h6>Especialidade:</h6>
          <p>Ortopedista - RQE Nº: 1234</p>
          </div>
        </li>
      </ul>
      <Link to="">
        Ver mais <ArrowRightIcon />{' '}
      </Link>
    </Container>
  )
}

export default DoctorInfo
