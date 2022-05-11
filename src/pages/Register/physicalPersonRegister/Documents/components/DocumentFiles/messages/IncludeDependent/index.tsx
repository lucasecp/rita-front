import React from 'react'
import { useHistory } from 'react-router-dom'

import warningIcon from '@/assets/icons/alerts/warning.svg'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { useModal } from '@/hooks/useModal'

import { Container } from './styles'

import { NoPlansToAddDependents } from './messages/NoPlansToAddDependents'
import { SelectedPlanDontAllowAddDependents } from './messages/SelectedPlanDontAllowAddDependents'

import { toast } from '@/styles/components/toastify'

import { usePhysicalPersonRegister } from '@/pages/Register/physicalPersonRegister/shared/hooks'
import { useLoading } from '@/hooks/useLoading'
import { PHYSICAL_PERSON_REGISTER_DEPENDENTS } from '@/routes/constants/namedRoutes/routes'
import apiAdmin from '@/services/apiAdmin'

export const IncludeDependent: React.FC = () => {
  const { closeModal, showMessage } = useModal()
  const history = useHistory()
  const { Loading } = useLoading()

  const { finishRegister, region } = usePhysicalPersonRegister()

  // remove static values
  const planSelectedAllowsDependent = false

  const onNotIncludeDependent = () => {
    finishRegister()
  }

  const onIncludeDependent = async () => {
    if (planSelectedAllowsDependent) {
      history.push(PHYSICAL_PERSON_REGISTER_DEPENDENTS)

      closeModal()
      return
    }

    try {
      Loading.turnOn()
      const { data } = await apiAdmin.get('/plano/itens-vendaveis', {
        params: {
          municipio: region.get.city,
          uf: region.get.uf,
          minimoDependente: 1,
        },
      })

      if (data.length) {
        showMessage(SelectedPlanDontAllowAddDependents)

        return
      }
    } catch (error) {
      toast.error('Erro ao buscar planos com dependentes')
    } finally {
      Loading.turnOff()
    }

    showMessage(NoPlansToAddDependents)
  }

  return (
    <Container>
      <img src={warningIcon} />
      <p>Deseja incluir seus dependentes?</p>
      <footer>
        <OutlineButton onClick={onNotIncludeDependent}>Não</OutlineButton>
        <ButtonPrimary onClick={onIncludeDependent}>Sim</ButtonPrimary>
      </footer>
    </Container>
  )
}
