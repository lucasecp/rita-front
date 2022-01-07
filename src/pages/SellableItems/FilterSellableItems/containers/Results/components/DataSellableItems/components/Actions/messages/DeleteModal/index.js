import React, { useState } from 'react'
import { useHistory } from 'react-router'

import { useModal } from '@/hooks/useModal'
import { Container, ButtonGroup, PlanName, Price } from './styles'
import { useLoading } from '@/hooks/useLoading'

import OutlineButton from '@/components/Button/Outline'

import Textarea from '@/components/Form/Textarea'

import warning from '@/assets/icons/alerts/warning.svg'
import ButtonPrimary from '@/components/Button/Primary'
import { toast } from '@/styles/components/toastify'
import apiPatient from '@/services/apiPatient'

const DeleteModal = ({ plan }) => {
  const { closeModal } = useModal()
  const { Loading } = useLoading()
  const history = useHistory()
  const initialDescription = ''
  const [description, setDescription] = useState(initialDescription)
  const [error, setError] = useState('')

  const onConfirm = async () => {
    if (description.length > 20) {
      Loading.turnOn()
      // try {
      //   const response = await apiPatient.delete(
      //     `/itens-vendaveis/local-venda/${plan.idPlan}`,
      //   )

      //   console.log(response)
      //   if (response.RESPOSTA) toast.success(`Plano ${plan.name} Excluído`)
      // } catch (error) {
      //   toast.error(`Erro ao tentar excluir o plano ${plan.name}`)
      //   Loading.turnOff()
      // } finally {
      //   Loading.turnOff()
      // }
    } else {
      setError('Informe 20 caracteres ou mais.')
      Loading.turnOff()
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
