import React, { useState, useEffect } from 'react'

import { ReactComponent as CloseIcon } from '@/assets/icons/close-multselct.svg'

import { Container } from './styles'
import { AddArea } from './components/AddArea'

import { useLoading } from '@/hooks/useLoading'
import { mapDataToSendApi } from './helpers/mapDataToSendApi'
import apiPatient from '@/services/apiPatient'

export const RangeOfUse = ({
  rangesOfUse,
  setRangesOfUse = () => {},
  viewMode,
}) => {
  const { Loading } = useLoading()
  const [listRangeOfUse, setListRangeOfUse] = useState(
    rangesOfUse.map((range) => ({ ...range, showCities: false }))
  )

  const onGetArea = async (area) => {
    // setListRangeOfUse([...listRangeOfUse, { ...area, showCities: false }])
    const dataToSend = mapDataToSendApi(area, listRangeOfUse)

    console.log(dataToSend)

    try {
      Loading.turnOn()

      const response = await apiPatient.post('/plano/abrangencia', dataToSend)

      console.log(response)
    } catch (error) {
      console.log(error)
    } finally {
      Loading.turnOff()
    }
  }

  const removeRegionalAndUf = (position) => {
    const rangesOfUseRemoved = listRangeOfUse.filter(
      (range, index) => index !== position
    )

    setListRangeOfUse(rangesOfUseRemoved)
  }

  // const removeUf = (position) => {
  //   const rangesOfUseTemporary = listRangeOfUse

  //   rangesOfUseTemporary[position] = {
  //     ...rangesOfUseTemporary[position],
  //     uf: '',
  //     cities: [],
  //   }

  //   setListRangeOfUse([...rangesOfUseTemporary])
  // }

  const removeCity = (position, id) => {
    const rangesOfUseTemporary = listRangeOfUse

    const newCities = rangesOfUseTemporary[position].cities?.filter(
      (city) => city.id !== id
    )

    rangesOfUseTemporary[position] = {
      ...rangesOfUseTemporary[position],
      cities: newCities,
    }

    setListRangeOfUse([...rangesOfUseTemporary])
  }

  return (
    <Container viewMode={viewMode}>
      <header>
        Abrangência de Utilização*: <span />
      </header>
      {!viewMode && (
        <>
          <AddArea onGetArea={onGetArea} />
          {!listRangeOfUse.length && (
            <small>
              Ao menos a seleção de um item da Abrangência de Utilização é
              obrigatório.
            </small>
          )}
        </>
      )}
      {
        !!listRangeOfUse.length && (
          <table>
            <thead>
              <tr>
                <th>Regional</th>
                <th>UF</th>
                <th>Cidade</th>
              </tr>
            </thead>
            <tbody>
              {listRangeOfUse.map((range, index) => (
                <tr key={index}>
                  <td>
                    <div>
                      <p>{range.regional.label}</p>
                      {!viewMode && (
                        <CloseIcon onClick={() => removeRegionalAndUf(index)} />
                      )}
                    </div>
                  </td>
                  <td>
                    {range.uf && (
                      <div>
                        <p>{range.uf.label}</p>
                        {!viewMode && (
                          <CloseIcon
                            onClick={() => removeRegionalAndUf(index)}
                          />
                        )}
                      </div>
                    )}
                  </td>
                  <td>
                    {range.cities.map((city, indexCity) =>
                      range.showCities ? (
                        <div key={city.id}>
                          <p>{city.name}</p>
                          {!viewMode && (
                            <CloseIcon
                              onClick={() => removeCity(index, city.id)}
                            />
                          )}
                        </div>
                      ) : (
                        indexCity < 2 && (
                          <div key={city.id}>
                            <p>{city.name}</p>
                            {!viewMode && (
                              <CloseIcon
                                onClick={() => removeCity(index, city.id)}
                              />
                            )}
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
        )
        // : (
        //   <h1>Sem dados de abrangência de utilização para mostrar</h1>
        // )
      }
    </Container>
  )
}
