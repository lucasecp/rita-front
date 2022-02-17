import React from 'react'
import { Container, Status } from './styles'
import { showStatus } from '../../helpers/showStatus'
// import formatTextWithLimit from '@/helpers/formatTextWithLimit'
import CustomTooltip from '@/components/Tooltip'
import { ContentProps } from '../../types'
import { useHistory } from 'react-router-dom'
import { formatCpf } from '@/helpers/formatCpf'

const Content: React.FC<ContentProps> = ({ clinics }) => {
  const history = useHistory()

  return (
    <Container>
      <ul
      // key={index}
      // onClick={() =>
      //   history.push()
      // }
      >
        <li>
          <CustomTooltip label="Pedro Vasconcelos ">
            <div>Pedro Vasconcelos </div>
          </CustomTooltip>
        </li>
        <li>{formatCpf('14275351220')}</li>
        <li>010992-SP</li>
        <li>CRM</li>
        <Status type={showStatus('I')}>
          <span>{showStatus('I')}</span>
        </Status>
      </ul>
      <ul
      // key={index}
      // onClick={() =>
      //   history.push()
      // }
      >
        <li>
          <CustomTooltip label="Pedro Vasconcelos ">
            <div>Pedro Vasconcelos </div>
          </CustomTooltip>
        </li>
        <li>{formatCpf('14275351220')}</li>
        <li>010992-SP</li>
        <li>CRM</li>
        <Status type={showStatus('I')}>
          <span>{showStatus('I')}</span>
        </Status>
      </ul>
      <ul
      // key={index}
      // onClick={() =>
      //   history.push()
      // }
      >
        <li>
          <CustomTooltip label="Pedro Vasconcelos ">
            <div>Pedro Vasconcelos </div>
          </CustomTooltip>
        </li>
        <li>{formatCpf('14275351220')}</li>
        <li>010992-SP</li>
        <li>CRM</li>
        <Status type={showStatus('I')}>
          <span>{showStatus('I')}</span>
        </Status>
      </ul>
      {/* {!clinics.total && <h2>Nenhum resultado encontrado</h2>} */}
    </Container>
  )
}

export default Content
