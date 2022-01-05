import React from 'react'
import { Container } from './styles'
import { ReactComponent as InactiveIcon } from '@/assets/icons/inactive.svg'
import { ReactComponent as EyePurpleIcon } from '@/assets/icons/eye-purple.svg'
import { ReactComponent as ActiveIcon } from '@/assets/icons/active.svg'
import CustomTooltip from '@/components/Tooltip'
import { useHistory } from 'react-router'
import { DIRECTOR_SEE_PLAN_MANAGMENT } from '@/routes/constants/namedRoutes/routes'
import { Inactivate } from './Inactivate'
import { Suspend } from './Suspend'
import { Activate } from './Activate'

const Actions = ({ status, planInformations }) => {
  const history = useHistory()

  return (
    <Container>
      <CustomTooltip label="Visualizar">
        <EyePurpleIcon
          onClick={() =>
            history.push(DIRECTOR_SEE_PLAN_MANAGMENT, {
              idPlan: planInformations.idPlano,
            })
          }
        />
      </CustomTooltip>
      
      <Activate status={status} plan={planInformations} />

      <Inactivate
        status={status}
        plan={{ id: planInformations.idPlano, name: planInformations.nome }}
      />

      <Suspend
        status={status}
        plan={{ id: planInformations.idPlano, name: planInformations.nome }}
      />
    </Container>
  )
}

export default Actions