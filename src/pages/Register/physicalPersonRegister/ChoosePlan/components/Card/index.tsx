import React from 'react'

import { ReactComponent as RitaLogoHalf } from '@/assets/img/rita-logo-half.svg'

import { Card, LinkArea, CheckField } from './styles'

import { useHistory } from 'react-router-dom'
import ButtonLink from '@/components/Button/Link'
import { ReactComponent as ArrowRightIcon } from '@/assets/icons/arrow-right2.svg'
import { PHYSICAL_PERSON_REGISTER_CHOOSE_PLAN_DETAILS } from '@/routes/constants/namedRoutes/routes'
import { MappedPlan } from '../..'
import { usePhysicalPersonRegister } from '../../../shared/hooks'

export interface SelectedPlan {
  idPlan: number | 0
  name: string | ''
  allowedMajorAge: boolean | null
  maximumDependentsQuantity: number | null
}

export interface DataProps {
  data: MappedPlan
}

interface CardProps {
  colorTheme: number
  plan: MappedPlan
}

export const CardOfPlans: React.FC<CardProps> = ({ plan, colorTheme }) => {
  const history = useHistory()
  const { selectedPlan } = usePhysicalPersonRegister()

  const ToDetails = () => {
    history.push(PHYSICAL_PERSON_REGISTER_CHOOSE_PLAN_DETAILS, { plan })
  }

  return (
    <Card
      key={plan.idPlan}
      data-test={`planCard-${plan.idPlan}`}
      colorTheme={colorTheme}
      checked={selectedPlan.get.idPlan === plan.idPlan}
      onClick={() =>
        selectedPlan.set({
          idPlan: plan.idPlan,
          name: plan.name,
          allowedMajorAge: plan.allowedMajorAge,
          maximumDependentsQuantity: plan.maximumDependentsQuantity,
        })
      }
    >
      <RitaLogoHalf />
      <div>
        <h1>{plan.name}</h1>
        <div>
          <CheckField
            checked={selectedPlan.get.idPlan === plan.idPlan}
            colorTheme={colorTheme}
            data-test={`planCardCheckBox-${plan.idPlan}`}
          >
            <div></div>
          </CheckField>
        </div>
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
      <LinkArea
        colorTheme={colorTheme}
        checked={selectedPlan.get.idPlan === plan.idPlan}
        data-test={`planCardDetails-${plan.idPlan}`}
      >
        <ButtonLink onClick={ToDetails}>
          <span>
            Saber Mais <ArrowRightIcon />
          </span>
        </ButtonLink>
      </LinkArea>
    </Card>
  )
}
