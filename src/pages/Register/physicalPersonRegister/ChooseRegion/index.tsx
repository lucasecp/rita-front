import React from 'react'
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
  // PHYSICAL_PERSON_REGISTER_DOCUMENTS,
} from '@/routes/constants/namedRoutes/routes'
import { AddUserOnWaitList } from './messages/AddUserOnWaitList'
import apiAdmin from '@/services/apiAdmin'
import { useLoading } from '@/hooks/useLoading'
import { toast } from 'react-toastify'
import { usePhysicalPersonRegister } from '../shared/hooks'

export const ChooseRegion: React.FC = () => {
  const history = useHistory()
  const { Loading } = useLoading()
  const { showMessage } = useModal()
  const { region } = usePhysicalPersonRegister()

  const onComeBack = () => {
    history.push(LOGIN)
  }

  const onNextStep = async () => {
    try {
      Loading.turnOn()

      const { data } = await apiAdmin.get('/plano/itens-vendaveis', {
        params: {
          municipio: region.get.city,
          uf: region.get.uf,
        },
      })

      if (!data.length) {
        showMessage(AddUserOnWaitList, {}, true)

        return
      }

      history.push(PHYSICAL_PERSON_REGISTER_CHOOSE_PLAN)
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
          <h3>Desta forma você terá acesso aos planos da sua região</h3>
          <InputCep />
          <section>
            <hr />
            <h3>Ou</h3>
            <hr />
          </section>
          <CityAutocomplete />
          {!!region.get.city && (
            <h5>
              Cidade Selecionada:{' '}
              <span>
                {region.get.city} - {region.get.uf}
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
            disabled={!region.get.city}
          >
            Próxima Etapa
          </ButtonPrimary>
        </footer>
      </div>
    </Container>
  )
}
