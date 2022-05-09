import React, { useEffect, useState } from 'react'

import { RegisterLayout } from '@/components/Layout/RegisterLayout'

import { ButtonArea, CardArea, Content, TitleAndLogo } from './styles'

import ButtonPrimary from '@/components/Button/Primary'
import { RegionState, MappedPlan } from '../newPatientRegister/ChooseRegion'
import { useLocation } from 'react-router-dom'
import ButtonLink from '@/components/Button/Link'
import { CardOfPlans } from './components/Card'

export interface DataProps {
  region: RegionState
  data: MappedPlan[]
}

export const ChoosePlans: React.FC = () => {
  const { plans, region } = useLocation().state
  const [selectedPlan, setSelectedPlan] = useState({ idPlan: 0, name: '' })

  return (
    <RegisterLayout>
      <Content>
        <TitleAndLogo>
          <h6>Escolha seu Plano</h6>
          <h2>
            Exibindo os planos para a sua região: {region.city}/{region.uf}
          </h2>
        </TitleAndLogo>
        <CardArea>
          {plans.map((plan, index) => {
            return (
              <div key={plan.idPlan}>
                <CardOfPlans
                  selectedPlan={selectedPlan}
                  setSelectedPlan={setSelectedPlan}
                  plan={plan}
                  colorThemeIndex={index % 4}
                />
              </div>
            )
          })}
        </CardArea>
      </Content>
      <ButtonArea>
        <ButtonLink>Voltar</ButtonLink>
        {selectedPlan.name.length > 0 && (
          <span>Você escolheu o plano {selectedPlan.name}</span>
        )}
        <ButtonPrimary>Próxima Etapa</ButtonPrimary>
      </ButtonArea>
    </RegisterLayout>
  )
}
