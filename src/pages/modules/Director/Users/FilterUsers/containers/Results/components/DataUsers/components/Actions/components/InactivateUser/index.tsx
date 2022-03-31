import React from 'react'

import CustomTooltip from '@/components/Tooltip'
import { useLoading } from '@/hooks/useLoading'

import { ReactComponent as InactivateIcon } from '@/assets/icons/inactivate-grid.svg'

import apiUser from '@/services/apiUser'

interface InactivateUserProps {
  userId: number
}

export const InactivateUser: React.FC<InactivateUserProps> = ({ userId }) => {
  const { Loading } = useLoading()

  const onInactivateUser = async () => {
    try {
      Loading.turnOn()

      const response = await apiUser.patch(`/usuario/${userId}/inativar`)

      console.log('response: ', response.data)
    } catch {
      console.log('Erro na Ação Inativar')
    } finally {
      Loading.turnOff()
    }
    console.log('Inativar: ', userId)
  }

  return (
    <CustomTooltip label="Inativar">
      <InactivateIcon onClick={onInactivateUser} />
    </CustomTooltip>
  )
}
