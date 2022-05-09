import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { Container } from './styles'

import { useModal } from '@/hooks/useModal'

import { CityAutocomplete } from './components/CityAutocomplete'
import InputCep from './components/InputCep'

import {
  LOGIN,
  PHYSICAL_PERSON_REGISTER_CHOOSE_PLAN,
} from '@/routes/constants/namedRoutes/routes'
import { AddUserOnWaitList } from './messages/AddUserOnWaitList'
import apiAdmin from '@/services/apiAdmin'
import { useLoading } from '@/hooks/useLoading'
import { toast } from 'react-toastify'
import { fromApiPlans } from './adapters/fromApi'

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
  AllowedMajorAge: boolean
  price: string
}

export interface RegionState {
  uf: string
  city: string
}

export const ChooseRegion: React.FC = () => {
  const history = useHistory()
  const { Loading } = useLoading()
  const { showMessage } = useModal()

  const [region, setRegion] = useState({} as RegionState)

  const onComeBack = () => {
    history.push(LOGIN)
  }

  const onNextStep = async () => {
    try {
      Loading.turnOn()

      const { data } = await apiAdmin.get('/plano/itens-vendaveis', {
        params: { municipio: region.city, uf: region.uf },
      })

      if (!data.length) {
        return showMessage(AddUserOnWaitList, { region }, true)
      }

      const mappedPlans: MappedPlan[] = fromApiPlans(data)

      history.push(PHYSICAL_PERSON_REGISTER_CHOOSE_PLAN, {
        plans: mappedPlans,
        region,
      })
    } catch ({ response }) {
      toast.error('Erro ao Buscar Planos')
    } finally {
      Loading.turnOff()
    }
  }

  return (
    <Container>
      <div>
        <div>
          <h2>Onde você está?</h2>
          <h3>Desta forma você terá acesso aos planos da sua regiãos</h3>
          <InputCep onGetRegion={setRegion} />
          <section>
            <hr />
            <h3>Ou</h3>
            <hr />
          </section>
          <CityAutocomplete onGetRegion={setRegion} />
          {!!region.city && (
            <h5>
              Cidade Selecionada:{' '}
              <span>
                {region.city} - {region.uf}
              </span>
            </h5>
          )}
        </div>
        <footer>
          <OutlineButton data-test="comeBack" onClick={onComeBack}>
            Voltar
          </OutlineButton>
          <ButtonPrimary
            onClick={onNextStep}
            data-test="nextStep"
            disabled={!region.city}
          >
            Próxima Etapa
          </ButtonPrimary>
        </footer>
      </div>
    </Container>
  )
}
