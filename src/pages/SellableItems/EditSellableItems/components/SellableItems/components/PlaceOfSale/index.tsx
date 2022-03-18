import { Table } from './styles'

interface Place {
  cities?: {
    id: number
    name: string
  }[]
  uf?: {
    id: number
    acronym: string
    name: string
  }
  regional: {
    id: number
    name: string
  }
}
interface PlaceOfSaleProps {
  places: Place[]
}

export const PlaceOfSale: React.FC<PlaceOfSaleProps> = ({ places }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Regional</th>
          <th>UF</th>
          <th>Cidade</th>
        </tr>
      </thead>
      <tbody>
        {places &&
          places.map((range, index) => (
            <tr key={index}>
              <td>
                <div>
                  <p>{range.regional.name}</p>
                </div>
              </td>
              <td>
                {range.uf && (
                  <div>
                    <p>{range.uf.name}</p>
                  </div>
                )}
              </td>
              <td>
                {range.cities?.length && (
                  <div key={range.cities[0].id}>
                    <p>{range.cities[0].name}</p>
                  </div>
                )}
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  )
}
