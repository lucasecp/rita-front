import React from 'react'
import { ReactComponent as TrashIcon } from '@/assets/icons/trash.svg'
import CustomTooltip from '@/components/Tooltip'

import { useModal } from '@/hooks/useModal'
import { KeyProfileWarning } from './messages/KeyProfileWarning'
import { RemainingUsersWarning } from './messages/RemainingUsersWarning'
import { ConfirmDelete } from './messages/ConfirmDelete'

interface ActionDeleteProps {
  id: number
  usersQuantity: number
  keyProfile: boolean
}

export const ActionDelete: React.FC<ActionDeleteProps> = ({
  id,
  usersQuantity,
  keyProfile,
}) => {
  const { showMessage } = useModal()

  const CheckPossibilityToDelete = () => {
    if (usersQuantity > 0) {
      return showMessage(RemainingUsersWarning)
    }

    if (keyProfile) {
      return showMessage(KeyProfileWarning)
    }

    showMessage(ConfirmDelete, { id })
  }
  return (
    <CustomTooltip label="Excluir">
      <TrashIcon onClick={CheckPossibilityToDelete} />
    </CustomTooltip>
  )
}
