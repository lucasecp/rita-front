import React from 'react'

import { RegisterLayout } from '@/components/Layout/RegisterLayout'

import { ButtonArea, CardArea, Content, TitleAndLogo } from './styles'

import ButtonPrimary from '@/components/Button/Primary'
import { useLocation } from 'react-router-dom'
import ButtonLink from '@/components/Button/Link'
import { CardOfPlans } from './components/Card'
import { MappedPlan } from '../ChooseRegion'
import { usePhysicalPersonRegister } from '../shared/hooks'

export interface DataProps {
  data: MappedPlan[]
}

export const ChoosePlans: React.FC = () => {
  const { plans, region, selectedPlan } = usePhysicalPersonRegister()

  console.log(plans)

  return (
    <RegisterLayout>
      <Content>
        <TitleAndLogo>
          <h6>Escolha seu Plano</h6>
          <h2>
            Exibindo os planos para a sua região: {region.get.city}/
            {region.get.uf}
          </h2>
        </TitleAndLogo>
        <CardArea>
          {plans.get.length > 0 &&
            plans.get.map((plan, index) => {
              return (
                <div key={plan.idPlan}>
                  <CardOfPlans plan={plan} colorThemeIndex={index % 4} />
                </div>
              )
            })}
        </CardArea>
      </Content>
      <ButtonArea>
        <ButtonLink>Voltar</ButtonLink>
        {selectedPlan.get.name.length > 0 && (
          <span>Você escolheu o plano {selectedPlan.get.name}</span>
        )}
        <ButtonPrimary disabled={!selectedPlan.get.idPlan}>
          Próxima Etapa
        </ButtonPrimary>
      </ButtonArea>
    </RegisterLayout>
  )
}
