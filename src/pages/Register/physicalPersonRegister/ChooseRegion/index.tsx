import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { Container } from './styles'

import { useModal } from '@/hooks/useModal'

import { CityAutocomplete } from './components/CityAutocomplete'
import InputCep from './components/InputCep'

import { LOGIN, PLANS } from '@/routes/constants/namedRoutes/routes'
import { AddUserOnWaitList } from './messages/AddUserOnWaitList'
import apiAdmin from '@/services/apiAdmin'
import { useLoading } from '@/hooks/useLoading'
import { toast } from 'react-toastify'

export const ChooseRegion: React.FC = () => {
  const history = useHistory()
  const { Loading } = useLoading()
  const { showMessage } = useModal()

  const onComeBack = () => {
    history.push(LOGIN)
  }

  const onNextStep = async () => {
    try {
      Loading.turnOn()

      const { data } = await apiAdmin.get(`/plano/regiao`, {
        params: { municipio: region.city, ufSigla: 'pr' },
      })

      if (!data.dados.length) {
        return showMessage(AddUserOnWaitList, { region }, true)
      }

      history.push(PLANS, { data, region })
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
