import React from 'react'

import { ReactComponent as CloseIcon } from '@/assets/icons/close-multselct.svg'

import { Container } from './styles'
import { AddArea } from './components/AddArea'

import { useLoading } from '@/hooks/useLoading'
import {
  mapDataToSendApi,
  mapRangesToSendApi,
} from './helpers/mapDataToSendApi'

import apiAdmin from '@/services/apiAdmin'
import { mapDataComingFromApi } from '@/components/RangeOfUse/helpers/mapDataComingFromApi'

type RangeOfUseProps = {
  rangesOfUse: any
  setRangesOfUse: any
  viewMode: any
  label: any
  id: any
  messageError: any
  regionals: any
  setRegionals: any
  city: any
  setCity: any
  ufs: any
  setUfs: any
  regionalSelected: any
  setRegionalSelected: any
  ufSelected: any
  setUfSelected: any
  citiesSelected: any
  setCitiesSelected: any
  listRangeOfUseToSaveAndToCreateTable: any
  setListRangeOfUseToSaveAndToCreateTable: any
}

export const RangeOfUse: React.FC<RangeOfUseProps> = ({
  rangesOfUse,
  setRangesOfUse = () => {},
  viewMode,
  label = '',
  id,
  messageError,
  regionals,
  setRegionals,
  city,
  setCity,
  ufs,
  setUfs,
  regionalSelected,
  setRegionalSelected,
  ufSelected,
  setUfSelected,
  citiesSelected,
  setCitiesSelected,
  listRangeOfUseToSaveAndToCreateTable,
  setListRangeOfUseToSaveAndToCreateTable,
}) => {
  const { Loading } = useLoading()

  const onGetArea = async (area: any) => {
    const regional = regionals.filter(
      (item: any) => item.label === regionalSelected,
    )[0].index

    const uf = ufSelected.length
      ? ufs.filter((item: any) => item.label === ufSelected)[0].index
      : null

    const cities = area.cities.map((city: any) => `${city.id}`)

    const dataToSend = mapDataToSendApi({
      id,
      regional,
      uf,
      cities,
      ranges: listRangeOfUseToSaveAndToCreateTable,
    })

    console.log('dataToSend')

    try {
      Loading.turnOn()

      const { data } = await apiAdmin.post(
        '/itens-vendaveis/local-venda',
        dataToSend,
      )

      const rangesOfUseMapped = mapDataComingFromApi(data)

      setListRangeOfUseToSaveAndToCreateTable([
        ...listRangeOfUseToSaveAndToCreateTable,
        rangesOfUseMapped[0],
      ])
    } catch (error) {
      console.log(error)
    } finally {
      Loading.turnOff()
    }
  }

  const removeRegional = async (id: any) => {
    try {
      const { data } = await apiAdmin.delete(`/plano/abrangencia/${id}`, {
        params: { tipo: 'regional' },
        data: mapRangesToSendApi(listRangeOfUseToSaveAndToCreateTable),
      })

      const rangesOfUseMapped = mapDataComingFromApi(data)

      setListRangeOfUseToSaveAndToCreateTable(rangesOfUseMapped)
      setRangesOfUse(rangesOfUseMapped)
    } catch (error) {
      console.log(error)
    }
  }

  const removeUf = async (id: any) => {
    try {
      const { data } = await apiAdmin.delete(`/plano/abrangencia/${id}`, {
        params: { tipo: 'uf' },
        data: mapRangesToSendApi(listRangeOfUseToSaveAndToCreateTable),
      })

      const rangesOfUseMapped = mapDataComingFromApi(data)

      setListRangeOfUseToSaveAndToCreateTable(rangesOfUseMapped)
      setRangesOfUse(rangesOfUseMapped)
    } catch (error) {
      console.log(error)
    }
  }

  const removeCity = async (id: any) => {
    try {
      const { data } = await apiAdmin.delete(`/plano/abrangencia/${id}`, {
        params: { tipo: 'municipio' },
        data: mapRangesToSendApi(listRangeOfUseToSaveAndToCreateTable),
      })

      const rangesOfUseMapped = mapDataComingFromApi(data)

      setListRangeOfUseToSaveAndToCreateTable(rangesOfUseMapped)
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
      {/* {!viewMode && ( */}
      <>
        <AddArea
          onGetArea={onGetArea}
          regionals={regionals}
          // @ts-ignore
          setRegionals={setRegionals}
          setRegionalSelected={setRegionalSelected}
          regionalSelected={regionalSelected}
          setUfSelected={setUfSelected}
          ufSelected={ufSelected}
          ufs={ufs}
          setUfs={setUfs}
          city={city}
          setCity={setCity}
          listRangeOfUseToSaveAndToCreateTable={
            listRangeOfUseToSaveAndToCreateTable
          }
          setListRangeOfUseToSaveAndToCreateTable={
            setListRangeOfUseToSaveAndToCreateTable
          }
          citiesSelected={citiesSelected}
          setCitiesSelected={setCitiesSelected}
        />
        {/* {messageError && !listRangeOfUseToSaveAndToCreateTable.length && (
          <small>
            Ao menos a seleção de um item da Abrangência de Utilização é
            obrigatório.
          </small>
        )} */}
      </>
      {/* )}   */}
      {/* {!!listRangeOfUseToSaveAndToCreateTable.length && (
        <table>
          <thead>
            <tr>
              <th>Regional</th>
              <th>UF</th>
              <th>Cidade</th>
            </tr>
          </thead>
          <tbody>
            {listRangeOfUseToSaveAndToCreateTable.map((range, index) => (
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
                  {range.cities.length !== 0 &&
                    range.cities.map((city, indexCity) =>
                      range.showCity ? (
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
                        const rangeOfUseTemporary =
                          listRangeOfUseToSaveAndToCreateTable
                        rangeOfUseTemporary[index].showCity =
                          !rangeOfUseTemporary[index].showCity
                        setListRangeOfUseToSaveAndToCreateTable([
                          ...rangeOfUseTemporary,
                        ])
                      }}
                    >
                      {range.showCity
                        ? 'Ver Menos'
                        : `Ver + (${range.city.length - 2})`}
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )} */}
    </Container>
  )
}
