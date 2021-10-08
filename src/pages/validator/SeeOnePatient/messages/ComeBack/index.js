import React from 'react'
import { useHistory } from 'react-router'

import warningIcon from '@/assets/icons/alerts/warning.svg'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { useModal } from '@/context/useModal'
import apiPatient from '@/services/apiPatient'
import apiUser from '@/services/apiUser'

import { Container } from './styles'

function ComeBack({ idPatient }) {
  const { closeModal } = useModal()
  const history = useHistory()

  const onDoNotConfirmExit = () => {
    closeModal()
  }

  const onConfirmExit = async () => {
    // console.log(apiPatient.defaults.headers.token)
    // console.log(apiUser.defaults.headers.token)

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
