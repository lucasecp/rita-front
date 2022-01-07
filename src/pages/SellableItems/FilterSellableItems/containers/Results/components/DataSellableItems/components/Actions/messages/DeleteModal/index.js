import React, { useState } from 'react'
import { useHistory } from 'react-router'

import { useModal } from '@/hooks/useModal'
import { Container, ButtonGroup } from './style'
import { useLoading } from '@/hooks/useLoading'

import OutlineButton from '@/components/Button/Outline'

import Textarea from '@/components/Form/Textarea'

const DeleteModal = ({ plan }) => {
  const { closeModal } = useModal()
  const { Loading } = useLoading()
  const history = useHistory()
  const initialDescription = ''
  const [description, setDescription] = useState(initialDescription)
  const [error, setError] = useState('')

  const onConfirm = () => {
    if (description.length > 20) {
      try {
        Loading.turnOn()
        //   // history.push() Lógica para excluir item vendavel

        //   if () {
        //     toast.success(`PLANO EXCLUIDO`)
        //   }
        // } catch (error) {
        //   toast.error(`ERRO AO TENTAR EXCLUIR PLANO`)
        // } finally {
        //   Loading.turnOff()
        // }
      } finally {
        setError('Informe 20 caracteres ou mais.')
      }
    }
  }

  return (
    <Container>
      <div>
        <h1>
          O item abaixo deixará de ser disponibilizado, deseja prosseguir?
        </h1>
        <h2>
          {plan.name} - {plan.rangeOfUse} - R$ {plan.amount}
        </h2>
        <h3>Esta ação não afeta contratos ativos!</h3>

        <Textarea
          label="justificativa:"
          limit="200"
          showCaractersInformation
          setValue={setDescription}
          value={description}
          hasError={!!error}
          messageError={error}
        />
      </div>
      <ButtonGroup>
        <OutlineButton onClick={closeModal}>Não</OutlineButton>
        <a onClick={onConfirm}>Sim</a>
      </ButtonGroup>
    </Container>
  )
}

export default DeleteModal
