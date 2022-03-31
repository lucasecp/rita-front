import React from 'react'

import CustomTooltip from '@/components/Tooltip'
import { useLoading } from '@/hooks/useLoading'

import { ReactComponent as ActivateIcon } from '@/assets/icons/activate-grid.svg'

import apiUser from '@/services/apiUser'

interface ActivateUserProps {
  userId: number
}

export const ActivateUser: React.FC<ActivateUserProps> = ({ userId }) => {
  const { Loading } = useLoading()

  const onActivateUser = async () => {
    try {
      Loading.turnOn()

      const response = await apiUser.patch(`/usuario/${userId}/ativar`)

      console.log('response: ', response.data)
    } catch {
      console.log('Erro na Ação Ativar')
    } finally {
      Loading.turnOff()
    }
    console.log('Ativar: ', userId)
  }

  return (
    <CustomTooltip label="Ativar">
      <ActivateIcon onClick={onActivateUser} />
    </CustomTooltip>
  )
}
