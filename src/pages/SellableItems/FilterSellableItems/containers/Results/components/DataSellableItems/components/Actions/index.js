import React from 'react'
import { Container } from './styles'
import { ReactComponent as InactiveIcon } from '@/assets/icons/inactive.svg'
import { ReactComponent as EyePurpleIcon } from '@/assets/icons/eye-purple.svg'
import { ReactComponent as TrashIcon } from '@/assets/icons/trash.svg'
import CustomTooltip from '@/components/Tooltip'
import { useHistory } from 'react-router'
import { SEE_SELLABLE_ITEMS } from '@/routes/constants/namedRoutes/routes'
import { useLoading } from '@/hooks/useLoading'

const Actions = ({ idPlan }) => {
  const history = useHistory()
  const { Loading } = useLoading()

  const toSeeSellableItem = () => {
    try {
      Loading.turnOn()

      history.push(SEE_SELLABLE_ITEMS, {
        idPlan,
      })
    } catch (err) {
      console.log(err)
    } finally {
      Loading.turnOff()
    }
  }

  const toDeleteSellableItem = async () => {
    try {
      Loading.turnOn()

      showMessage(SimpleModal, {
        type: 'error',
        message: 'kdsnfsjdkfndskjfn',
      })
    } catch (err) {
      console.log(err)
    } finally {
      Loading.turnOff()
    }
  }

  return (
    <Container>
      <CustomTooltip label="Visualizar">
        <EyePurpleIcon onClick={toSeeSellableItem} />
      </CustomTooltip>
      <CustomTooltip label="Excluir" onClick={toDeleteSellableItem}>
        <TrashIcon />
      </CustomTooltip>
    </Container>
  )
}

export default Actions
