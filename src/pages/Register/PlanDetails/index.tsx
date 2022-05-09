import React from 'react'

import { RegisterLayout } from '@/components/Layout/RegisterLayout'

import { ButtonArea, Content, Price, Top } from './styles'

import ButtonPrimary from '@/components/Button/Primary'
import { useHistory, useLocation } from 'react-router-dom'

export const PlanDetails: React.FC = () => {
  const { plan } = useLocation().state
  const history = useHistory()

  return (
    <RegisterLayout>
      <Content>
        <Top>
          <h1>{plan.name}</h1>
          <span>Experimente 7 dias grátis</span>
        </Top>
        <span>
          O {plan.name} tem abrangência em toda parte Norte e Sul do Brasil,
          conta com redes credenciadas e atendimento especial para você.
        </span>
        <h3>inclusão de Dependentes</h3>
        <span>Sim</span>

        <h3>Serviços Oferecidos</h3>
        <ul>
          <li>Urgência e Emergência</li>
          <li>consultas médicas</li>
          <li>Exames Simples</li>
        </ul>
        <Price>
          <h2>R$ {plan.price}/Mês</h2>
        </Price>
      </Content>
      <footer>
        <ButtonArea>
          <ButtonPrimary onClick={history.back}>Voltar</ButtonPrimary>
        </ButtonArea>
      </footer>
    </RegisterLayout>
  )
}
