import React from 'react'

import { RegisterLayout } from '@/components/Layout/RegisterLayout'

import { ButtonArea, Content, Price, Top } from './styles'

import ButtonPrimary from '@/components/Button/Primary'
import { useLocation, useHistory } from 'react-router-dom'
import { usePhysicalPersonRegister } from '../shared/hooks'
import { PHYSICAL_PERSON_REGISTER_CHOOSE_PLAN } from '@/routes/constants/namedRoutes/routes'

export const PlanDetails: React.FC = () => {
  const history = useHistory()
  const { region } = usePhysicalPersonRegister()
  const { plan } = useLocation().state

  return (
    <RegisterLayout>
      <Content>
        <Top>
          <h1>{plan.name}</h1>
          <span>Experimente 7 dias grátis</span>
        </Top>
        <span>
          O plano {plan.name} tem abrangência em toda parte do Brasil, conta com
          redes credenciadas e atendimento especial para você.
        </span>
        <h3>Inclusão de Dependentes</h3>
        <span data-test={`maximumDependentsQuantityDetails-${plan.idPlan}`}>
          {plan.maximumDependentsQuantity
            ? `Sim. Até ${plan.maximumDependentsQuantity} dependente${
                plan.maximumDependentsQuantity > 1 ? 's' : ''
              }`
            : 'Não'}
        </span>

        <h3>Serviços Oferecidos</h3>
        <ul>
          <li>Urgência e Emergência</li>
          <li>Consultas médicas</li>
          <li>Exames Simples</li>
        </ul>
        <Price>
          <h2>
            {plan.price === 'Isento'
              ? 'Isento'
              : `${plan.price}/${plan.periodicity}`}
          </h2>
        </Price>
      </Content>
      <footer>
        <ButtonArea>
          <ButtonPrimary
            onClick={() => history.push(PHYSICAL_PERSON_REGISTER_CHOOSE_PLAN)}
          >
            Voltar
          </ButtonPrimary>
        </ButtonArea>
      </footer>
    </RegisterLayout>
  )
}
