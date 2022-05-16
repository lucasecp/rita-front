import React, { useEffect, useState } from 'react'

import { RegisterLayout } from '@/components/Layout/RegisterLayout'

import { ButtonArea, CardArea, Content, TitleAndLogo } from './styles'

import ButtonPrimary from '@/components/Button/Primary'
import { useHistory } from 'react-router-dom'
import ButtonLink from '@/components/Button/Link'
import { CardOfPlan } from './components/Card'
import { usePhysicalPersonRegister } from '../shared/hooks'
import {
  PHYSICAL_PERSON_REGISTER_CHOOSE_REGION,
  PHYSICAL_PERSON_REGISTER_CPF,
  PHYSICAL_PERSON_REGISTER_DEPENDENTS,
  // PHYSICAL_PERSON_REGISTER_DOCUMENTS,
} from '@/routes/constants/namedRoutes/routes'
import apiAdmin from '@/services/apiAdmin'
import { fromApiPlans } from './adapters/fromApi'

const cardColors = ['purple', 'green', 'blue', 'orange']

export interface MappedPlan {
  idPlan: number
  maximumDependentsQuantity: number
  name: string
  allowedMajorAge: boolean
  price: string
  periodicity: string
}

export const ChoosePlans: React.FC = () => {
  const history = useHistory()
  const { region, selectedPlan, patientWantsMinimumDependent } =
    usePhysicalPersonRegister()
  const [plans, setPlans] = useState([])
  useEffect(() => {
    const callApi = async () => {
      const { data } = await apiAdmin.get('/plano/itens-vendaveis', {
        params: {
          municipio: region.get.city,
          uf: region.get.uf,
          ...(patientWantsMinimumDependent.get > 0 && {
            minimoDependente: patientWantsMinimumDependent.get,
          }),
        },
      })

      const mappedPlan = fromApiPlans(data)

      setPlans(mappedPlan)
    }

    callApi()
  }, [])

  const toNext = () => {
    if (patientWantsMinimumDependent.get > 0) {
      return history.push(PHYSICAL_PERSON_REGISTER_DEPENDENTS)
    }
    history.push(PHYSICAL_PERSON_REGISTER_CPF)
  }

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
          {plans.length > 0 &&
            plans.map((plan, index) => {
              return (
                <div key={plan.idPlan}>
                  <CardOfPlan
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
        <ButtonPrimary onClick={toNext} disabled={!selectedPlan.get.idPlan}>
          Próxima Etapa
        </ButtonPrimary>
      </ButtonArea>
    </RegisterLayout>
  )
}
