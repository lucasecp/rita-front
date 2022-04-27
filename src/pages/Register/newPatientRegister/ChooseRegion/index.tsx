import React, { useState } from 'react'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { Container } from './styles'
import { AutocompleteOptions } from '@/components/Form/Autocomplete'

import { useModal } from '@/hooks/useModal'

import { CityAutocomplete } from './components/CityAutocomplete'
import InputCep from './components/InputCep'
import { LOGIN } from '@/routes/constants/namedRoutes/routes'
import { useHistory } from 'react-router-dom'
import { AddUserOnWaitList } from './messages/AddUserOnWaitList'

export interface RegionState {
  uf: string
  city: string
}

export const ChooseRegion: React.FC = () => {
  const history = useHistory()
  const { showMessage } = useModal()

  const [region, setRegion] = useState({} as RegionState)

  const [city, setCity] = useState({} as AutocompleteOptions)

  const onComeBack = () => {
    history.push(LOGIN)
  }

  const onProcedure = async () => {
    // return showMessage(AddUserOnWaitList)
    try {
      // const { data } = await apiAdmin.get('/clinica') API
      // const dataMapped = mapClinics(data?.clinicas)
      const test = []
      if (!test.length) {
        return showMessage(AddUserOnWaitList)
      }
      // to next page
    } catch ({ response }) {}
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
          <CityAutocomplete onGetCity={setCity} region={region} />
        </div>
        <footer>
          <OutlineButton data-test="comeBack" onClick={onComeBack}>
            Voltar
          </OutlineButton>
          <ButtonPrimary
            onClick={onProcedure}
            data-test="nextStep"
            disabled={city.value === 0}
          >
            Próxima Etapa
          </ButtonPrimary>
        </footer>
      </div>
    </Container>
  )
}
