import React from 'react'
import { Container } from './styles'
import { ReactComponent as EyePurpleIcon } from '@/assets/icons/eye-purple.svg'
import { ReactComponent as TrashIcon } from '@/assets/icons/trash.svg'
import CustomTooltip from '@/components/Tooltip'
import { useHistory } from 'react-router'
import { DIRECTOR_SEE_PERFIS } from '@/routes/constants/namedRoutes/routes'
// import { SEE_SELLABLE_ITEMS } from '@/routes/constants/namedRoutes/routes'
import { useLoading } from '@/hooks/useLoading'
// import DeleteModal from './messages/DeleteModal'

const Actions = ({ id }) => {
  const history = useHistory()
  const { Loading } = useLoading()

  return (
    <Container>
      <CustomTooltip label="Visualizar">
        <EyePurpleIcon
          onClick={
            // () => console.log(id, 'visualizar')
            () => history.push(`${DIRECTOR_SEE_PERFIS}/${id}`, { id })
          }
        />
      </CustomTooltip>
      <CustomTooltip label="Excluir">
        <TrashIcon
          onClick={
            () => console.log(id, 'deletar')
            //   history.push(ENDPOINT DO PERFIL, {
            //     id: planInformations.idPlano,
            //   })
          }
        />
      </CustomTooltip>
    </Container>
  )
}

export default Actions
