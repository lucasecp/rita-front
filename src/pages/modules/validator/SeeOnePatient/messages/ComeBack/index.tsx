import React from 'react'
import { useHistory } from 'react-router'

import warningIcon from '@/assets/icons/alerts/warning.svg'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { useModal } from '@/hooks/useModal'
import { useLoading } from '@/hooks/useLoading'

import apiPatient from '@/services/apiPatient'
import { AxiosError } from 'axios'

import { Container } from './styles'
import { VALIDATOR_ANALYZE_PATIENTS } from '@/routes/constants/namedRoutes/routes'

interface ComeBackProps {
  idPatient: number
}

export const ComeBack: React.FC<ComeBackProps> = ({ idPatient }) => {
  const { closeModal, showSimple } = useModal()
  const { Loading } = useLoading()
  const history = useHistory()

  const onDoNotConfirmExit = () => {
    closeModal()
  }

  const onConfirmExit = async () => {
    try {
      Loading.turnOn()

      const response = await apiPatient.patch(
        `/paciente/${idPatient}/liberar-validacao`,
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
    } catch (error) {
      const { response } = error as AxiosError

      if (response?.status.toString()[0] === '5') {
        showSimple.error('Erro no Servidor!')
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
