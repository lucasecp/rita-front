import React from 'react'
import { Container } from './styles'
import { ReactComponent as EyePurpleIcon } from '@/assets/icons/eye-purple.svg'
import { ReactComponent as TrashIcon } from '@/assets/icons/trash.svg'
import CustomTooltip from '@/components/Tooltip'
import { useHistory } from 'react-router'
import { SEE_SELLABLE_ITEMS } from '@/routes/constants/namedRoutes/routes'
import { useLoading } from '@/hooks/useLoading'
import { useModal } from '@/hooks/useModal'
import DeleteModal from './messages/DeleteModal'

const Actions = ({ plan }) => {
  const history = useHistory()
  const { Loading } = useLoading()
  const { showMessage } = useModal()

  const toSeeSellableItem = () => {
    try {
      Loading.turnOn()

      history.push(SEE_SELLABLE_ITEMS, {
        plan,
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

      showMessage(DeleteModal, {
        plan,
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
      <CustomTooltip label="Excluir">
        <TrashIcon onClick={toDeleteSellableItem} />
      </CustomTooltip>
    </Container>
  )
}

export default Actions
