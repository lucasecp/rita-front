import React from 'react'
import { useHistory } from 'react-router-dom'

import ButtonPrimary from '@/components/Button/Primary'
import errorIcon from '@/assets/icons/alerts/error.svg'

import { Container } from '../../styles'
import { useModal } from '@/context/useModal'

function NotFound({ ...data }) {
  const history = useHistory()
  const { closeModal } = useModal()

  const handleCloseModal = () => {
    closeModal()
    history.push('/cadastro/paciente/', { userData: { cpf: data.cpf } })
  }

  return (
    <Container>
      <img src={errorIcon} />
      <p>
        Desculpe, os seus dados não foram encontrados na nossa base. Isso não
        significa que seu cadastro do cartão Sabin Saúde não exista.
      </p>
      <ButtonPrimary onClick={handleCloseModal}>
        Faça seu cadastro
      </ButtonPrimary>
    </Container>
  )
}

export default NotFound
