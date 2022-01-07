import React, { useState } from 'react'
import { useHistory } from 'react-router'

import { useModal } from '@/hooks/useModal'
import { Container, ButtonGroup, PlanName, Price } from './styles'
import { useLoading } from '@/hooks/useLoading'

import OutlineButton from '@/components/Button/Outline'

import Textarea from '@/components/Form/Textarea'

import warning from '@/assets/icons/alerts/warning.svg'
import ButtonPrimary from '@/components/Button/Primary'

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
        <img src={warning} />
        <h1>
          O item abaixo deixará de ser disponibilizado, deseja prosseguir?
        </h1>

        <PlanName>{plan.name}</PlanName>
        <p>{plan.rangeOfUse}</p>
        <Price>{plan.amount}</Price>

        <h2>Esta ação não afeta contratos ativos!</h2>

        <Textarea
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
        <ButtonPrimary onClick={onConfirm}>Sim</ButtonPrimary>
      </ButtonGroup>
    </Container>
  )
}

export default DeleteModal
