import React from 'react'
import { ReactComponent as SuspenseIcon } from '@/assets/icons/suspense.svg'
import { useModal } from '@/hooks/useModal'
import Desassociate from '../../../../messages/Desassociate'
import { useAuth } from '@/hooks/login'
import { SpecialistI } from '../../../../types'

interface DesassociateProps {
  id: string
  setMakeRequest: (x: number) => void
}

const DesassociateIcon: React.FC<DesassociateProps> = ({
  id,
  setMakeRequest,
}) => {
  const { user } = useAuth()
  const { showMessage } = useModal()
  return (
    <SuspenseIcon
      onClick={() =>
        showMessage(Desassociate, {
          idDoctor: id,
          idClinic: user.id,
          setMakeRequest,
        })
      }
    />
  )
}

export default DesassociateIcon
