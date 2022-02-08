import React from 'react'
import { Container, Status } from './styles'
import CustomTooltip from '@/components/Tooltip'
import { ContentProps } from '../../types'
import { useHistory } from 'react-router-dom'
import { OPERATOR_SEE_ALL_SPECIALTYS } from '@/routes/constants/namedRoutes/routes'
import edit from '@/assets/icons/edit.svg'

const Content: React.FC<ContentProps> = ({ specialtys }) => {
  // const history = useHistory()

  return (
    <Container>
      {specialtys?.data?.map((specialtys, index) => (
        <ul
          key={index}
          // onClick={() =>
          //   history.push(OPERATOR_SEE_ALL_SPECIALTYS, { idClinic: clinic.id })
          // }
        >
          <li>{specialtys.code}</li>
          <li>
            <CustomTooltip label={specialtys.name}>
              <div>{specialtys.name}</div>
            </CustomTooltip>
          </li>
          <Status type={specialtys.subscriptionRequired}>
            <span>{specialtys.subscriptionRequired}</span>
          </Status>
          <li>
            <button>
              <img src={edit} />
            </button>
          </li>
        </ul>
      ))}
      {!specialtys.total && <h2>Nenhum resultado encontrado</h2>}
    </Container>
  )
}

export default Content
