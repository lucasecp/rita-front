import React from 'react'

import { RegisterLayout } from '@/components/Layout/RegisterLayout'

import { ButtonArea, CardArea, Content, TitleAndLogo } from './styles'

import ButtonPrimary from '@/components/Button/Primary'
import { useHistory } from 'react-router-dom'
import ButtonLink from '@/components/Button/Link'
import { CardOfPlans } from './components/Card'
import { MappedPlan } from '../ChooseRegion'
import { usePhysicalPersonRegister } from '../shared/hooks'
import { PHYSICAL_PERSON_REGISTER_CHOOSE_REGION } from '@/routes/constants/namedRoutes/routes'

const cardColors = ['purple', 'green', 'blue', 'orange']

export interface DataProps {
  data: MappedPlan[]
}

export const ChoosePlans: React.FC = () => {
  const history = useHistory()
  const { plans, region, selectedPlan } = usePhysicalPersonRegister()

  return (
    <RegisterLayout>
      <Content>
        <TitleAndLogo>
          <h6 data-test="choosePlanTitle">Escolha seu Plano</h6>
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
                  <CardOfPlans
                    plan={plan}
                    colorTheme={
                      cardColors[
                        Object.keys(cardColors)[index % cardColors.length]
                      ]
                    }
                  />
                </div>
              )
            })}
        </CardArea>
      </Content>
      <ButtonArea>
        <ButtonLink
          onClick={() => history.push(PHYSICAL_PERSON_REGISTER_CHOOSE_REGION)}
        >
          Voltar
        </ButtonLink>
        {selectedPlan.get.name && (
          <span>Você escolheu o plano {selectedPlan.get.name}</span>
        )}
        {console.log(selectedPlan)}
        <ButtonPrimary disabled={!selectedPlan.get.idPlan}>
          Próxima Etapa
        </ButtonPrimary>
      </ButtonArea>
    </RegisterLayout>
  )
}
