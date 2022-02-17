import React from 'react'
import { Container, Status } from './styles'
import CustomTooltip from '@/components/Tooltip'
import { ContentProps } from '../../types'
import { useHistory } from 'react-router-dom'
import { OPERATOR_EDIT_SPRECIALTY } from '@/routes/constants/namedRoutes/routes'
import edit from '@/assets/icons/edit.svg'

const Content: React.FC<ContentProps> = ({ specialtys }) => {
  const history = useHistory()

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
          <Status type={specialtys.subscriptionRequired ? 1 : 0}>
            <span>{specialtys.subscriptionRequired ? 'Sim' : 'Não'}</span>
          </Status>
          <li>
            <CustomTooltip label="Editar">
              <button
                onClick={() =>
                  history.push(OPERATOR_EDIT_SPRECIALTY, {
                    specialtyInfo: specialtys,
                  })
                }
              >
                <img src={edit} />
              </button>
            </CustomTooltip>
          </li>
        </ul>
      ))}
      {!specialtys.total && <h2>Nenhum resultado encontrado</h2>}
    </Container>
  )
}

export default Content
