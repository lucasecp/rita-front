import React from 'react'

import { RegisterLayout } from '@/components/Layout/RegisterLayout'

import { ButtonArea, CardArea, Card, Content, TitleAndLogo } from './styles'

import ButtonPrimary from '@/components/Button/Primary'
import { RegionState } from '../newPatientRegister/ChooseRegion'
import { useLocation } from 'react-router'
import { RadioGroup } from '@material-ui/core'
import RadioButton from '@/styles/components/RadioButton'

interface PlansProps {
  region: RegionState
  data: {
    total: number
    dados: {
      preco: number
      municipio: {
        idMunicipio: number
        descricao: string
      }
      plano: {
        idPlano: number
        codigo: string
        nome: string
        status: string
        maximoDependente: null
        permiteMaiores: null
      }
    }
  }
}

export const Plans: React.FC<PlansProps> = () => {
  const { data, region } = useLocation().state

  return (
    <RegisterLayout>
      <Content>
        <TitleAndLogo>
          <h6>Escolha seu Plano</h6>
          <h2>
            Exibindo os planos para a sua região: {region.city}/{region.uf}
          </h2>
        </TitleAndLogo>
        <RadioGroup
        // onChange={onReasonChange} value={reason}
        >
          <CardArea>
            <Card>
              <RadioButton
                value="adaptation"
                label=""
                // checked={reason === 'adaptation'}
                checked
              />
            </Card>
            <Card>
              <RadioButton
                value="adaptation"
                label=""
                // checked={reason === 'adaptation'}
                checked
              />
            </Card>
            <Card>
              <RadioButton
                value="adaptation"
                label=""
                // checked={reason === 'adaptation'}
                checked
              />
            </Card>
          </CardArea>
        </RadioGroup>
        <ButtonArea>
          <ButtonPrimary>Enviar</ButtonPrimary>
        </ButtonArea>
      </Content>
    </RegisterLayout>
  )
}
