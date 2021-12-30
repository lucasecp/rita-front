import React from 'react'
import { Container } from './styles'
import { ReactComponent as WarningIcon } from '@/assets/icons/warning-red.svg'
import { ReactComponent as EyePurpleIcon } from '@/assets/icons/eye-purple.svg'
import { ReactComponent as DeleteIcon } from '@/assets/icons/trash.svg'
import CustomTooltip from '@/components/Tooltip'
import { useHistory } from 'react-router'
import { ActionsProps } from '../../../types'
import { PATIENT_SEE_DEPENDENT } from '@/routes/constants/namedRoutes/routes'

const Actions: React.FC<ActionsProps> = ({ status, warning, idDependent }) => {
  const history = useHistory()

  return (
    <Container>
      <CustomTooltip label="Atençao">
        {warning && <WarningIcon />}
      </CustomTooltip>

      {status === 'inativo' ||
        (status === 'excluido' ? null : (
          <CustomTooltip label="Visualizar">
            <EyePurpleIcon
              onClick={() =>
                history.push(PATIENT_SEE_DEPENDENT, { idDependent })
              }
            />
          </CustomTooltip>
        ))}

      <CustomTooltip label="Exlcuir">
        <DeleteIcon />
      </CustomTooltip>
    </Container>
  )
}

export default Actions
