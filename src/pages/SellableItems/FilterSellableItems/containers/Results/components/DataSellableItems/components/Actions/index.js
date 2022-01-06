import React from 'react'
import { Container } from './styles'
import { ReactComponent as InactiveIcon } from '@/assets/icons/inactive.svg'
import { ReactComponent as EyePurpleIcon } from '@/assets/icons/eye-purple.svg'
import { ReactComponent as TrashIcon } from '@/assets/icons/trash.svg'
import CustomTooltip from '@/components/Tooltip'
import { useHistory } from 'react-router'
import { DIRECTOR_SEE_PLAN_MANAGMENT } from '@/routes/constants/namedRoutes/routes'
import { Inactivate } from './Inactivate'
import { Suspend } from './Suspend'
import { Activate } from './Activate'

const Actions = ({}) => {
  const history = useHistory()

  return (
    <Container>
      <CustomTooltip label="Visualizar">
        <EyePurpleIcon
        // onClick={() =>
        //   history.push(DIRECTOR_SEE_PLAN_MANAGMENT, {
        //     id: 2,
        //   })
        // }
        />
      </CustomTooltip>
      <CustomTooltip label="Excluir">
        <TrashIcon />
      </CustomTooltip>
    </Container>
  )
}

export default Actions
