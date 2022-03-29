import { Table } from './styles'
import { ReactComponent as CloseIcon } from '@/assets/icons/close-multselct.svg'

import apiAdmin from '@/services/apiAdmin'
// import { placeOfSaleToApi } from './adapters/toApi'
import { useLoading } from '@/hooks/useLoading'
import { PlaceOfSale } from '../..'
import { placeOfSaleToApi } from '../../../../adapters/toApi'
import { placeOfSaleFromApi } from '../../../../adapters/fromApi'

interface PlaceOfSaleProps {
  placeOfSale: PlaceOfSale[]
  setPlaceOfSale: (placeOfSale: PlaceOfSale[]) => void
}

export const PlaceOfSaleList: React.FC<PlaceOfSaleProps> = ({
  placeOfSale,
  setPlaceOfSale,
}) => {
  const { Loading } = useLoading()

  const removeRegional = async (id: number) => {
    try {
      Loading.turnOn()

      const { data } = await apiAdmin.delete(
        `/itens-vendaveis/local-venda/${id}`,
        {
          params: { tipo: 'regional' },
          data: placeOfSaleToApi(placeOfSale),
        },
      )

      const placesOfSaleMapped = placeOfSaleFromApi(data)

      setPlaceOfSale(placesOfSaleMapped)
    } catch (error) {
      console.log(error)
    } finally {
      Loading.turnOff()
    }
  }

  const removeUf = async (id: number) => {
    try {
      Loading.turnOn()

      const { data } = await apiAdmin.delete(
        `/itens-vendaveis/local-venda/${id}`,
        {
          params: { tipo: 'uf' },
          data: placeOfSaleToApi(placeOfSale),
        },
      )

      const placesOfSaleMapped = placeOfSaleFromApi(data)

      setPlaceOfSale(placesOfSaleMapped)
    } catch (error) {
      console.log(error)
    } finally {
      Loading.turnOff()
    }
  }

  const removeCity = async (id: number) => {
    try {
      Loading.turnOn()

      const { data } = await apiAdmin.delete(
        `/itens-vendaveis/local-venda/${id}`,
        {
          params: { tipo: 'municipio' },
          data: placeOfSaleToApi(placeOfSale),
        },
      )

      const placesOfSaleMapped = placeOfSaleFromApi(data)

      setPlaceOfSale(placesOfSaleMapped)
    } catch (error) {
      console.log(error)
    } finally {
      Loading.turnOff()
    }
  }

  return (
    <Table>
      {placeOfSale.length !== 0 && (
        <table>
          <thead>
            <tr>
              <th>Regional</th>
              <th>UF</th>
              <th>Cidade</th>
            </tr>
          </thead>
          <tbody>
            {placeOfSale.map((range, index) => (
              <tr key={index}>
                <td>
                  <div>
                    <p>{range.regional.label}</p>
                    {!range.uf && (
                      <CloseIcon
                        onClick={() => removeRegional(range.regional?.id)}
                      />
                    )}
                  </div>
                </td>
                <td>
                  {range.uf && (
                    <div>
                      <p>{range.uf.label}</p>
                      <CloseIcon onClick={() => removeUf(range.uf.id)} />
                    </div>
                  )}
                </td>
                <td>
                  {range.cities.length !== 0 &&
                    range.cities.map((city, indexCity) =>
                      range.showCities ? (
                        <div key={city.id}>
                          <p>{city.name}</p>
                          {/* {!viewMode && ( */}
                          <CloseIcon onClick={() => removeCity(city.id)} />
                          {/* )} */}
                        </div>
                      ) : (
                        indexCity < 2 && (
                          <div key={city.id}>
                            <p>{city.name}</p>
                            {/* {!viewMode && ( */}
                            <CloseIcon onClick={() => removeCity(city.id)} />
                            {/* )} */}
                          </div>
                        )
                      ),
                    )}

                  {range.cities.length > 2 && (
                    <button
                      onClick={() => {
                        const rangeOfUseTemporary = placeOfSale
                        rangeOfUseTemporary[index].showCities =
                          !rangeOfUseTemporary[index].showCities

                        setPlaceOfSale([...rangeOfUseTemporary])
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
    </Table>
  )
}
