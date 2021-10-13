import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import error from '@/assets/icons/alerts/error.svg'

import { Container,ButtonGroup } from '../style'

import { useModal } from '@/context/useModal'
import OutlineButton from '@/components/Button/Outline'
import { useLoading } from '@/context/useLoading'
import apiPatient from '@/services/apiPatient'
import { useHistory } from 'react-router'

function RecordAlreadyAnalized(data) {
  const { closeModal } = useModal()
  const {Loading} = useLoading()
  const history = useHistory()

  const handleClick = async () => {
    try {
      Loading.turnOn()

      const response = await apiPatient.patch(
        `/paciente/${data.id}/assumir-validacao?forcar=true`,
      )
      if (response.status === 200) {
        closeModal()
        history.push('/autorizacoes/ver-paciente', { cpf:data.cpf })
      }
    } catch ({ response }) {
      const responseApi = response.data
      console.log(responseApi);
    } finally {
      Loading.turnOff()
    }
  }
  return (
    <Container>
      <img src={error} />
      <p>Atenção Este registro está sendo analisado pelo(a) validador(a) {data.validator} desde {data.date}.</p>
      <ButtonGroup>
      <OutlineButton onClick={closeModal}>Cancelar</OutlineButton>
      <ButtonPrimary onClick={handleClick}>Assumir Validação</ButtonPrimary>
      </ButtonGroup>
      </Container>
  )
}

export default RecordAlreadyAnalized
