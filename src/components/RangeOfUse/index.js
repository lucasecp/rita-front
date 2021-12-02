import React from 'react'

import { ReactComponent as CloseIcon } from '@/assets/icons/close-multselct.svg'

import CustomMultSelect from '../Form/MultSelect'
import { Select } from '../Form/Select'
import { REGIONAL } from './constants/regional'
import { UF } from './constants/uf'

import { Container } from './styles'
import ButtonPrimary from '../Button/Primary'

export const RangeOfUse = () => {
  return (
    <Container>
      <header>
        Abrangência de Utilização*: <span />
      </header>
      <div>
        <section>
          <Select
            label="Regional:"
            labelDefaultOption="Selecione..."
            options={REGIONAL}
            name="regional"
            // setValue={setUf}
            // value={uf}
          />
          <Select
            label="UF:"
            labelDefaultOption="Selecione..."
            options={UF}
            name="uf"
            // setValue={setUf}
            // value={uf}
          />
          <CustomMultSelect
            options={[{ name: 'Cidade', id: 1 }]}
            label="Cidade(s):"
            value={[{ name: 'Cidade', id: 1 }]}
            // setValue={setServices}
          />
        </section>
        <ButtonPrimary>Adicionar</ButtonPrimary>
      </div>
      <small>
        Ao menos a seleção de um item da Abrangência de Utilização é
        obrigatório.
      </small>
      <table>
        <thead>
          <th>Regional</th>
          <th>UF</th>
          <th>Cidade</th>
        </thead>
        <tbody>
          <tr>
            <td>
              <div>
                <p>Centro Oeste</p>
                <CloseIcon />
              </div>
            </td>
            <td>
              <div>
                <p>Distrito Federal</p>
                <CloseIcon />
              </div>
            </td>
            <td>
              <div>
                <p>Brasília</p>
                <CloseIcon />
              </div>
              <div>
                <p>Gama</p>
                <CloseIcon />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <p>Centro Oeste</p>
                <CloseIcon />
              </div>
            </td>
            <td>
              <div>
                <p>Goiás</p>
                <CloseIcon />
              </div>
            </td>
            <td>
              <div>
                <p>Goiânia</p>
                <CloseIcon />
              </div>
              <div>
                <p>Avelinópolis</p>
                <CloseIcon />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
