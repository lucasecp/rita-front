import React from 'react'

import warningIcon from '@/assets/icons/alerts/warning.svg'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { Container } from './styles'
import { useModal } from '@/context/useModal'
import { useHistory } from 'react-router'
import apiPatient from '@/services/apiPatient'

function ComeBack({ idPatient }) {
  const { closeModal } = useModal()
  const history = useHistory()

  const onDoNotConfirmExit = () => {
    closeModal()
  }

  const onConfirmExit = async () => {
    try {
      const response = await apiPatient.patch(
        `/paciente/${idPatient}/liberar-validacao`
      )

      console.log(response)
    } catch ({ response }) {
      console.log(response)
    }

    history.push('/autorizacoes/analisar-pacientes')
    closeModal()
  }

  return (
    <Container>
      <img src={warningIcon} />
      <p>
        Suas últimas alterações não foram salvas.
        <br />
        Confirma a saída?
      </p>
      <footer>
        <OutlineButton onClick={onDoNotConfirmExit}>Não</OutlineButton>
        <ButtonPrimary onClick={onConfirmExit}>Sim</ButtonPrimary>
      </footer>
    </Container>
  )
}

export default ComeBack
