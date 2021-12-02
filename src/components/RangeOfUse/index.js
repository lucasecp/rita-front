import React from 'react'

import { ReactComponent as CloseIcon } from '@/assets/icons/close-multselct.svg'

import CustomMultSelect from '../Form/MultSelect'
import { Select } from '../Form/Select'
import { REGIONAL } from './constants/regional'
import { UF } from './constants/uf'

import { Container } from './styles'

export const RangeOfUse = () => {
  return (
    <Container>
      <header>
        Abrangência de Utilização*:
        <span />
      </header>
      <div>
        <Select
          label="Regional:"
          labelDefaultOption="Selecione..."
          options={UF}
          name="regional"
          // setValue={setUf}
          // value={uf}
        />
        <Select
          label="UF:"
          labelDefaultOption="Selecione..."
          options={REGIONAL}
          name="uf"
          // setValue={setUf}
          // value={uf}
        />
        <CustomMultSelect
          options={['Cidade']}
          label="Cidade(s):"
          value={['Cidade']}
          // setValue={setServices}
        />
      </div>
      <table>
        <thead>
          <th>Regional</th>
          <th>UF</th>
          <th>Cidade</th>
        </thead>
        <tbody>
          <tr>
            <td>
              Centro Oeste
              <CloseIcon />
            </td>
            <td>
              Distrito Federal
              <CloseIcon />
            </td>
            <td>
              Brasília
              <CloseIcon />
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
