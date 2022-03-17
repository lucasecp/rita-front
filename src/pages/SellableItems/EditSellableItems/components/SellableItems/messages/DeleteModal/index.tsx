import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { useModal } from '@/hooks/useModal'
import { Container, ButtonGroup, PlanName, Price } from './styles'
import { useLoading } from '@/hooks/useLoading'

import OutlineButton from '@/components/Button/Outline'
import Textarea from '@/components/Form/Textarea'
import apiAdmin from '@/services/apiAdmin'
import ButtonPrimary from '@/components/Button/Primary'
import warning from '@/assets/icons/alerts/warning.svg'
import { FILTER_SELLABLE_ITEMS } from '@/routes/constants/namedRoutes/routes'
import { toast } from '@/styles/components/toastify'

interface Plan {
  amount: string
  id: number
  idPlan: number
  name: string
  outlets: string
  rangeOfUse: string
  type: string
}

interface DeleteModalProps {
  plan: Plan
}

export const DeleteModal: React.FC<DeleteModalProps> = ({ plan }) => {
  const { closeModal } = useModal()
  const { Loading } = useLoading()
  const history = useHistory()
  const initialDescription = ''
  const [description, setDescription] = useState(initialDescription)
  const [error, setError] = useState('')

  const onConfirm = async () => {
    if (description.length > 19) {
      Loading.turnOn()
      try {
        await apiAdmin.delete(`/itens-vendaveis/${plan.id}`, {
          params: {
            idPlano: plan.idPlan,
            tipo: plan.type === 'city' ? 'municipio' : plan.type,
          },
        })

        toast.success('Item excluído com com sucesso.')
        history.push(FILTER_SELLABLE_ITEMS)
        closeModal()
      } catch (error) {
        console.log(error)
      } finally {
        Loading.turnOff()
      }
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
