import React, { useState } from 'react'
import { useHistory } from 'react-router'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import Textarea from '@/components/Form/Textarea'

import { useModal } from '@/hooks/useModal'
import { useLoading } from '@/hooks/useLoading'

import { Container, ButtonGroup, PlanName, Price } from './styles'
import { toast } from '@/styles/components/toastify'
import warning from '@/assets/icons/alerts/warning.svg'

import apiAdmin from '@/services/apiAdmin'
import { FILTER_SELLABLE_ITEMS } from '@/routes/constants/namedRoutes/routes'

interface Plan {
  amount: string
  id: number
  idPlan: number
  name: string
  outlets: string
  rangeOfUse: string
  type: string
}

interface ConfirmPriceChangeProps {
  priceToSave: string
  plan: Plan
}

export const ConfirmPriceChange: React.FC<ConfirmPriceChangeProps> = ({
  priceToSave,
  plan,
}) => {
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')
  const { closeModal } = useModal()
  const { Loading } = useLoading()
  const history = useHistory()

  const onDoNotProceed = () => {
    closeModal()
  }

  const onProceed = async () => {
    setError('')

    if (description.length < 20) {
      return setError('Informe 20 caracteres ou mais')
    }

    try {
      Loading.turnOn()

      const tipo = plan.type === 'city' ? 'municipio' : plan.type

      await apiAdmin.put(`itens-vendaveis/${plan.id}`, {
        idPlano: plan.idPlan,
        tipo,
        preco:
          priceToSave.slice(0, priceToSave.length - 2) +
          ',' +
          priceToSave.slice(-2),
      })

      toast.success('Atualização realizada com sucesso.')
      history.push(FILTER_SELLABLE_ITEMS)
      closeModal()
    } catch ({ error }) {
      toast.error('Erro ao tentar salvar')
    } finally {
      Loading.turnOff()
    }
  }

  return (
    <Container>
      <div>
        <img src={warning} />
        <h1>O item abaixo:</h1>

        <PlanName>{plan.name}</PlanName>
        <p>{plan.rangeOfUse}</p>
        <Price>{plan.amount}</Price>

        <h2>teve seu valor alterado para</h2>
        <Price>
          R${' '}
          {priceToSave.slice(0, priceToSave.length - 2) +
            ',' +
            priceToSave.slice(-2)}
        </Price>

        <h3>Deseja prosseguir?</h3>
        <h4>Esta ação não afeta contratos ativos!</h4>

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
        <OutlineButton onClick={onDoNotProceed}>Não</OutlineButton>
        <ButtonPrimary onClick={onProceed}>Sim</ButtonPrimary>
      </ButtonGroup>
    </Container>
  )
}
