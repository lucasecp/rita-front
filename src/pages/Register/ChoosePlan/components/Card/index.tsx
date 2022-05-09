import React, { useState } from 'react'

import backgroundCardImage from '@/assets/img/background-card-image.svg'

import { Card, LinkArea, CheckField } from './styles'

import {
  RegionState,
  MappedPlan,
} from '../../../newPatientRegister/ChooseRegion'
import { useHistory } from 'react-router-dom'
import ButtonLink from '@/components/Button/Link'
import { ReactComponent as ArrowRightIcon } from '@/assets/icons/arrow-right2.svg'
import { PLANS_DETAILS } from '@/routes/constants/namedRoutes/routes'

export interface DataProps {
  region: RegionState
  data: MappedPlan
}

interface CardProps {
  colorThemeIndex: number
  plan: MappedPlan
  selectedPlan: {
    idPlan: number
    name: string
  }
  setSelectedPlan: () => void
}

export const CardOfPlans: React.FC<CardProps> = ({
  plan,
  colorThemeIndex,
  selectedPlan,
  setSelectedPlan,
}) => {
  const history = useHistory()

  const ToDetails = (plan) => {
    history.push(PLANS_DETAILS, { plan })
  }

  console.log(plan)

  return (
    <Card key={plan.idPlan} colorThemeIndex={colorThemeIndex}>
      <div>
        <h1>{plan.name}</h1>
        <div
          onClick={() =>
            setSelectedPlan({
              idPlan: plan.idPlan,
              name: plan.name,
            })
          }
        >
          <CheckField
            checked={selectedPlan.idPlan === plan.idPlan}
            colorThemeIndex={colorThemeIndex}
          />
        </div>
        <img src={backgroundCardImage} />
      </div>
      <h3>inclusão de Dependentes</h3>
      <ul>
        <li>sim</li>
      </ul>

      <h3>Serviços Oferecidos</h3>
      <ul>
        <li>Urgência e Emergência</li>
        <li>consultas médicas</li>
        <li>Exames Simples</li>
      </ul>
      <h2>R$ {plan.price}/Mês</h2>
      <h3>Experimente 7 dias grátis</h3>
      <LinkArea colorThemeIndex={colorThemeIndex}>
        <ButtonLink onClick={() => ToDetails(plan)}>
          <span>
            Saber Mais <ArrowRightIcon />
          </span>
        </ButtonLink>
      </LinkArea>
    </Card>
  )
}
