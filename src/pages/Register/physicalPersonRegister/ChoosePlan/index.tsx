import React, { useEffect, useState } from 'react'

import { RegisterLayout } from '@/components/Layout/RegisterLayout'

import { ButtonArea, CardArea, Content, TitleAndLogo } from './styles'

import ButtonPrimary from '@/components/Button/Primary'
import { useHistory } from 'react-router-dom'
import ButtonLink from '@/components/Button/Link'
import { CardOfPlans } from './components/Card'
import { usePhysicalPersonRegister } from '../shared/hooks'
import { PHYSICAL_PERSON_REGISTER_CHOOSE_REGION } from '@/routes/constants/namedRoutes/routes'
import apiAdmin from '@/services/apiAdmin'
import { fromApiPlans } from './adapters/fromApi'

const cardColors = ['purple', 'green', 'blue', 'orange']

export interface DataProps {
  data: MappedPlan[]
}

export interface Plans {
  idPlano: number
  maximoDependente: number
  nome: string
  permiteMaiores: boolean
  preco: string
}

export interface MappedPlan {
  idPlan: number
  maximumDependentsQuantity: number
  name: string
  allowedMajorAge: boolean
  price: string
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
          minimoDependente: patientWantsMinimumDependent.get,
        },
      })

      const mappedPlan = fromApiPlans(data)

      setPlans(mappedPlan)
    }

    callApi()
  }, [])

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
