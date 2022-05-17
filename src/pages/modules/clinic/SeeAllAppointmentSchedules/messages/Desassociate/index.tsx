import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import warningIcon from '@/assets/icons/alerts/warning.svg'
import { Container, ButtonGroup } from './styles'
import { useModal } from '@/hooks/useModal'
import OutlineButton from '@/components/Button/Outline'
import apiAdmin from '@/services/apiAdmin'
import { toast } from '@/styles/components/toastify'
import { useLoading } from '@/hooks/useLoading'

interface DesassociateProps {
  idDoctor: string
  setMakeRequest: (x: number) => void
}

const Desassociate: React.FC<DesassociateProps> = ({
  idDoctor,
  setMakeRequest,
}) => {
  const { closeModal } = useModal()
  const { Loading } = useLoading()

  const onDesassociate = async () => {
    try {
      Loading.turnOn()

      await apiAdmin.delete(`/clinica/59/medico/${idDoctor}`)
      setMakeRequest(Math.random())

      toast.success('Especialista desassociado com sucesso!')
    } catch (error) {
      toast.error('Erro ao desassociar o especialista.')
      console.log(error)
    } finally {
      Loading.turnOff()
    }
    closeModal()
  }

  return (
    <Container>
      <img src={warningIcon} />
      <p>Deseja desassociar esse especialista ?</p>

      <ButtonGroup>
        <OutlineButton onClick={closeModal}>Não</OutlineButton>
        <ButtonPrimary onClick={onDesassociate}>Sim</ButtonPrimary>
      </ButtonGroup>
    </Container>
  )
}

export default Desassociate
