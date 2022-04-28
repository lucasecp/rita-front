import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { Container } from './styles'

import { CityAutocomplete } from './components/CityAutocomplete'
import InputCep from './components/InputCep'

import { LOGIN } from '@/routes/constants/namedRoutes/routes'

export interface RegionState {
  uf: string
  city: string
}

export const ChooseRegion: React.FC = () => {
  const history = useHistory()

  const [region, setRegion] = useState({} as RegionState)

  const onComeBack = () => {
    history.push(LOGIN)
  }

  console.log(region)

  return (
    <Container>
      <div>
        <div>
          <h2>Onde você está?</h2>
          <h3>Desta forma você terá acesso aos planos da sua regiãos</h3>
          <InputCep onGetRegion={setRegion} region={region} />
          <section>
            <hr />
            <h3>Ou</h3>
            <hr />
          </section>
          <CityAutocomplete onGetRegion={setRegion} region={region} />
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
          <ButtonPrimary data-test="nextStep" disabled={!region.city}>
            Próxima Etapa
          </ButtonPrimary>
        </footer>
      </div>
    </Container>
  )
}
