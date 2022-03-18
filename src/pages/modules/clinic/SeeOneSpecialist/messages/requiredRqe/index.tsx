import React, { useState } from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import WarniingIcon from '@/assets/icons/alerts/warning.svg'
import whatsApp from '@/assets/icons/whatsapp.svg'
import { Container } from './styles'
import { useModal } from '@/hooks/useModal'
import InputText from '@/components/Form/InputText'

interface RequiredRqeProps {
  setSpecialist: (v: any) => void
  newSpecialty: any
}

const requiredRqe: React.FC<RequiredRqeProps> = ({
  newSpecialty,
  setSpecialist,
}) => {
  const { closeModal } = useModal()
  const [rqe, setRqe] = useState('')

  const onAddRqe = () => {
    setSpecialist((prevState: any) => [...prevState, { ...newSpecialty, rqe }])
  }

  return (
    <Container>
      <img src={WarniingIcon} />
      <p>Essa especialidade requer inscrição.</p>
      <p>Por favor, insira o número de inscrição.</p>
      <InputText value={rqe} setValue={setRqe} />
      <ButtonPrimary onClick={closeModal}>OK</ButtonPrimary>
    </Container>
  )
}

export default requiredRqe
