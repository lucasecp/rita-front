import React, { useState, useEffect } from 'react'

import { ReactComponent as CloseIcon } from '@/assets/icons/close-multselct.svg'

import CustomMultSelect from '../Form/MultSelect'
import { Select } from '../Form/Select'
import { REGIONAL } from './constants/regional'
import { UF } from './constants/uf'

import { Container } from './styles'
import ButtonPrimary from '../Button/Primary'

export const RangeOfUse = ({
  rangesOfUse,
  setRangesOfUse = () => {},
  viewMode,
}) => {
  const [regional, setRegional] = useState('')
  const [uf, setUf] = useState('')
  const [cities, setCities] = useState([])

  // const [hasEmptyFields, setHasEmptyFields] = useState(false)
  // const [listRangeOfUse, setListRangeOfUse] = useState([
  //   {
  //     regional: { label: 'Centro Oeste', value: 5 },
  //     uf: { label: 'Distrito Federal', value: 9 },
  //     cities: [
  //       { name: 'Brasília', id: 2 },
  //       { name: 'Gama', id: 3 },
  //       { name: 'Taguatinga', id: 4 },
  //       { name: 'Brazlândia', id: 5 },
  //       { name: 'Planaltina', id: 9 },
  //       { name: 'Paranoá', id: 7 },
  //     ],
  //     showCities: false,
  //   },
  //   {
  //     regional: { label: 'Centro Oeste', value: 5 },
  //     uf: { label: 'Goiás', value: 9 },
  //     cities: [
  //       { name: 'Goiânia', id: 2 },
  //       { name: 'Avelinópolis', id: 3 },
  //     ],
  //     showCities: false,
  //   },
  // ])
  const [listRangeOfUse, setListRangeOfUse] = useState(
    rangesOfUse.map((range) => ({ ...range, showCities: false }))
  )

  useEffect(() => {
    setRangesOfUse(listRangeOfUse)
  }, [listRangeOfUse])

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
                variation="secondary"
              />
            </section>
            <ButtonPrimary>Adicionar</ButtonPrimary>
          </div>
          {!listRangeOfUse.length && (
            <small>
              Ao menos a seleção de um item da Abrangência de Utilização é
              obrigatório.
            </small>
          )}
        </>
      )}
      {!!listRangeOfUse.length && (
        <table>
          <thead>
            <th>Regional</th>
            <th>UF</th>
            <th>Cidade</th>
          </thead>
          <tbody>
            {listRangeOfUse.map((range, index) => (
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
                      <div key={city.id}>
                        <p>{city.name}</p>
                        {!viewMode && <CloseIcon />}
                      </div>
                    ) : (
                      index < 2 && (
                        <div key={city.id}>
                          <p>{city.name}</p>
                          {!viewMode && <CloseIcon />}
                        </div>
                      )
                    )
                  )}
                  {range.cities.length > 2 && (
                    <button
                      onClick={() => {
                        const rangeOfUseTemporary = listRangeOfUse
                        rangeOfUseTemporary[index].showCities =
                          !rangeOfUseTemporary[index].showCities
                        setListRangeOfUse([...rangeOfUseTemporary])
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
