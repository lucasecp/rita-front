import React from 'react'

import { RegisterLayout } from '@/components/Layout/RegisterLayout'

import { ButtonArea, Content, TitleAndLogo } from './styles'

import ButtonPrimary from '@/components/Button/Primary'
import { RegionState } from '../newPatientRegister/ChooseRegion'
import { useLocation } from 'react-router'

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
        <ButtonArea>
          <ButtonPrimary>Enviar</ButtonPrimary>
        </ButtonArea>
      </Content>
    </RegisterLayout>
  )
}
