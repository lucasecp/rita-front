import React, { useState } from 'react'

import { ReactComponent as CloseIcon } from '@/assets/icons/close-multselct.svg'

import { Container } from './styles'
import { AddArea } from './components/AddArea'

import { useLoading } from '@/hooks/useLoading'
import {
  mapDataToSendApi,
  mapRangesToSendApi,
} from './helpers/mapDataToSendApi'
import apiAdmin from '@/services/apiAdmin'
import { mapDataComingFromApi } from './helpers/mapDataComingFromApi'

export const RangeOfUse = ({
  rangesOfUse,
  setRangesOfUse = () => {},
  viewMode,
  label = '',
}) => {
  const { Loading } = useLoading()
  const [listRangeOfUse, setListRangeOfUse] = useState(rangesOfUse)

  const onGetArea = async (area) => {
    // setListRangeOfUse([...listRangeOfUse, { ...area, showCities: false }])
    const dataToSend = mapDataToSendApi(area, listRangeOfUse)

    try {
      Loading.turnOn()

      const { data } = await apiAdmin.post('/plano/abrangencia', dataToSend)

      const rangesOfUseMapped = mapDataComingFromApi(data)

      setListRangeOfUse(rangesOfUseMapped)
      setRangesOfUse(rangesOfUseMapped)
    } catch (error) {
      console.log(error)
    } finally {
      Loading.turnOff()
    }
  }

  const removeRegional = async (id) => {
    try {
      const { data } = await apiAdmin.delete(`/plano/abrangencia/${id}`, {
        params: { tipo: 'regional' },
        data: mapRangesToSendApi(listRangeOfUse),
      })

      const rangesOfUseMapped = mapDataComingFromApi(data)

      setListRangeOfUse(rangesOfUseMapped)
      setRangesOfUse(rangesOfUseMapped)
    } catch (error) {
      console.log(error)
    }
  }

  const removeUf = async (id) => {
    try {
      const { data } = await apiAdmin.delete(`/plano/abrangencia/${id}`, {
        params: { tipo: 'uf' },
        data: mapRangesToSendApi(listRangeOfUse),
      })

      const rangesOfUseMapped = mapDataComingFromApi(data)

      setListRangeOfUse(rangesOfUseMapped)
      setRangesOfUse(rangesOfUseMapped)
    } catch (error) {
      console.log(error)
    }
  }

  const removeCity = async (id) => {
    try {
      const { data } = await apiAdmin.delete(`/plano/abrangencia/${id}`, {
        params: { tipo: 'municipio' },
        data: mapRangesToSendApi(listRangeOfUse),
      })

      const rangesOfUseMapped = mapDataComingFromApi(data)

      setListRangeOfUse(rangesOfUseMapped)
      setRangesOfUse(rangesOfUseMapped)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container viewMode={viewMode}>
      {label && (
        <header>
          {label} <span />
        </header>
      )}
      {!viewMode && (
        <>
          <AddArea onGetArea={onGetArea} rangesOfUse={listRangeOfUse} />
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
                    {!viewMode && !range.uf && (
                      <CloseIcon
                        onClick={() => removeRegional(range.regional.value)}
                      />
                    )}
                  </div>
                </td>
                <td>
                  {range.uf && (
                    <div>
                      <p>{range.uf.label}</p>
                      {!viewMode && (
                        <CloseIcon onClick={() => removeUf(range.uf.value)} />
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
                          <CloseIcon onClick={() => removeCity(city.id)} />
                        )}
                      </div>
                    ) : (
                      indexCity < 2 && (
                        <div key={city.id}>
                          <p>{city.name}</p>
                          {!viewMode && (
                            <CloseIcon onClick={() => removeCity(city.id)} />
                          )}
                        </div>
                      )
                    ),
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
