import React, { useState } from 'react'

import { ReactComponent as CloseIcon } from '@/assets/icons/close-multselct.svg'

import CustomMultSelect from '../Form/MultSelect'
import { Select } from '../Form/Select'
import { REGIONAL } from './constants/regional'
import { UF } from './constants/uf'

import { Container } from './styles'
import ButtonPrimary from '../Button/Primary'

export const RangeOfUse = () => {
  const viewMode = false

  const [regional, setRegional] = useState('')
  const [uf, setUf] = useState('')
  const [cities, setCities] = useState([])

  // const [hasEmptyFields, setHasEmptyFields] = useState(false)
  // const [rangesOfUse, setRangeOfUse] = useState([
  //   {
  //     regional: { label: 'Centro Oeste', value: 5 },
  //     uf: { label: 'Distrito Federal', value: 9 },
  //     cities: [
  //       { label: 'Brasília', value: 2 },
  //       { label: 'Gama', value: 3 },
  //       { label: 'Taguatinga', value: 4 },
  //       { label: 'Brazlândia', value: 5 },
  //       { label: 'Planaltina', value: 9 },
  //       { label: 'Paranoá', value: 7 },
  //     ],
  //     showCities: false,
  //   },
  //   {
  //     regional: { label: 'Centro Oeste', value: 5 },
  //     uf: { label: 'Goiás', value: 9 },
  //     cities: [
  //       { label: 'Goiânia', value: 2 },
  //       { label: 'Avelinópolis', value: 3 },
  //     ],
  //     showCities: false,
  //   },
  // ])
  const [rangesOfUse, setRangeOfUse] = useState([])

  return (
    <Container viewMode={viewMode}>
      <header>
        Abrangência de Utilização*: <span />
      </header>
      {!viewMode && (
        <>
          <div>
            <section>
              <Select
                label="Regional:"
                labelDefaultOption="Selecione..."
                options={REGIONAL}
                name="regional"
                setValue={setRegional}
                value={regional}
              />
              <Select
                label="UF:"
                labelDefaultOption="Selecione..."
                options={UF}
                name="uf"
                setValue={setUf}
                value={uf}
              />
              <CustomMultSelect
                options={[{ name: 'Cidade', id: 1 }]}
                label="Cidade(s):"
                value={cities}
                setValue={setCities}
              />
            </section>
            <ButtonPrimary>Adicionar</ButtonPrimary>
          </div>
          {!rangesOfUse.length && (
            <small>
              Ao menos a seleção de um item da Abrangência de Utilização é
              obrigatório.
            </small>
          )}
        </>
      )}
      {!!rangesOfUse.length && (
        <table>
          <thead>
            <th>Regional</th>
            <th>UF</th>
            <th>Cidade</th>
          </thead>
          <tbody>
            {rangesOfUse.map((range, index) => (
              <tr key={index}>
                <td>
                  <div>
                    <p>{range.regional.label}</p>
                    {!viewMode && <CloseIcon />}
                  </div>
                </td>
                <td>
                  <div>
                    <p>{range.uf.label}</p>
                    {!viewMode && <CloseIcon />}
                  </div>
                </td>
                <td>
                  {range.cities.map((city, index) =>
                    range.showCities ? (
                      <div key={city.value}>
                        <p>{city.label}</p>
                        {!viewMode && <CloseIcon />}
                      </div>
                    ) : (
                      index < 2 && (
                        <div key={city.value}>
                          <p>{city.label}</p>
                          {!viewMode && <CloseIcon />}
                        </div>
                      )
                    )
                  )}
                  {range.cities.length > 2 && (
                    <button
                      onClick={() => {
                        const rangeOfUseTemporary = rangesOfUse
                        rangeOfUseTemporary[index].showCities =
                          !rangeOfUseTemporary[index].showCities
                        setRangeOfUse([...rangeOfUseTemporary])
                      }}
                    >
                      {range.showCities
                        ? 'Ver Menos'
                        : `Ver + (${range.cities.length - 2})`}
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Container>
  )
}
