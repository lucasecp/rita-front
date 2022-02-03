import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'

import warningIcon from '@/assets/icons/alerts/warning.svg'

import { useModal } from '@/hooks/useModal'
import { Container } from './style'
import apiPatient from '@/services/apiPatient'
import { useLoading } from '@/hooks/useLoading'
import { toast } from '@/styles/components/toastify'
import { ButtonGroup } from '@/pages/Login/messages/style'

interface DisassociateProps {
  idDependent?: string
  IdHolder?: string
  isAMinor?: boolean
  setStep: (step: number) => void
}

const Disassociate: React.FC<DisassociateProps> = ({
  idDependent,
  IdHolder,
  isAMinor,
  setStep,
}) => {
  const { Loading } = useLoading()
  const { closeModal } = useModal()

  const OnDisassociate = async () => {
    try {
      Loading.turnOn()
      closeModal()
      await apiPatient.delete(`paciente/${IdHolder}/dependente/${idDependent}`)
      toast.success('Dependente desassociado')
      setStep(3)
    } catch (error) {
    } finally {
      Loading.turnOff()
    }
  }
  return (
    <Container>
      <img src={warningIcon} />
      {isAMinor ? (
        <p>
          Esta ação tornará o dependente inativo, deseja desassociar este
          Dependente ?
        </p>
      ) : (
        <p>Deseja desassociar este Dependente ?</p>
      )}
      <ButtonGroup>
        <ButtonPrimary onClick={() => closeModal()}>Não</ButtonPrimary>
        <ButtonPrimary onClick={OnDisassociate}>Sim</ButtonPrimary>
      </ButtonGroup>
    </Container>
  )
}

export default Disassociate
