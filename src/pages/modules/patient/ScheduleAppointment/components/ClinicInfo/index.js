import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styles'
import { ReactComponent as ArrowRightIcon } from '@/assets/icons/arrow-right2.svg'

const ClinicInfo = ({dataClinic}) => {
  console.log(dataClinic);
  return (
    <Container>
      <div></div>
      <h4>Clínica Viva Mais</h4>
      <ul>
        <li>
          <h6>Especialidade:</h6>
          <p>Ortopedia - Pediatria - Traumatologia - Ginecologia.</p>
        </li>
      </ul>
      <Link to="">
        Ver mais <ArrowRightIcon />{' '}
      </Link>
    </Container>
  )
}

export default ClinicInfo
