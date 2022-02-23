import React from 'react'
import { Container } from './styles'
import { ReactComponent as EyePurpleIcon } from '@/assets/icons/eye-purple.svg'
import { ReactComponent as TrashIcon } from '@/assets/icons/trash.svg'
import CustomTooltip from '@/components/Tooltip'
import { useHistory } from 'react-router'
import { DIRECTOR_SEE_ONE_PROFILE } from '@/routes/constants/namedRoutes/routes'

const Actions = ({ id }) => {
  const history = useHistory()

  const ToDelete = () => {
    //   history.push(ENDPOINT DO PERFIL, {
    //     id: planInformations.idPlano,
    //   })
  }

  return (
    <Container>
      <CustomTooltip label="Visualizar">
        <EyePurpleIcon
          onClick={() => history.push(DIRECTOR_SEE_ONE_PROFILE, { id })}
        />
      </CustomTooltip>
      <CustomTooltip label="Excluir">
        <TrashIcon
          onClick={
            ToDelete
            // () => console.log(id, 'deletar')
          }
        />
      </CustomTooltip>
    </Container>
  )
}

export default Actions
