import React from 'react'
import { useHistory } from 'react-router'

import warningIcon from '@/assets/icons/alerts/warning.svg'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { useModal } from '@/context/useModal'
import { useLoading } from '@/context/useLoading'
import apiPatient from '@/services/apiPatient'

import { Container } from './styles'
import SimpleModal, { MODAL_TYPES } from '@/components/Modal/SimpleModal'
import { VALIDATOR_ANALYZE_PATIENTS } from '@/routes/constants/namedRoutes/routes'

function ComeBack({ idPatient }) {
  const { closeModal, showMessage } = useModal()
  const { Loading } = useLoading()
  const history = useHistory()

  const onDoNotConfirmExit = () => {
    closeModal()
  }

  const onConfirmExit = async () => {
    try {
      Loading.turnOn()

      const response = await apiPatient.patch(
        `/paciente/${idPatient}/liberar-validacao`
      )

      if (response.status === 200) {
        if (
          response.data.mensagem ===
          'Avaliacão de paciente liberada com sucesso!'
        ) {
          history.push(VALIDATOR_ANALYZE_PATIENTS)
          closeModal()
        }
      }
    } catch ({ response }) {

      if (response.status.toString()[0] === '5') {
        showMessage(SimpleModal, {
          type: MODAL_TYPES.ERROR,
          message: 'Erro no Servidor!',
        })
      }
    } finally {
      Loading.turnOff()
    }
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
