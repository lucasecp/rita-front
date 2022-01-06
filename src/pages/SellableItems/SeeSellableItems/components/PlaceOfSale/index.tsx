import { Table } from './styles'

interface Place {
  city?: {
    id: string
    label: string
  }
  uf?: {
    id: string
    sigla: string
    label: string
  }
  regional: {
    id: string
    label: string
  }
}
interface PlaceOfSaleProps {
  places: Place[]
}

// [
//   {
//     municipios: [{ id: '2', nome: 'Timbó' }],
//     regional: {
//       id: '1',
//       nome: 'Sul',
//     },
//     uf: {
//       id: '10',
//       sigla: 'SC',
//       nome: 'Santa Catarina',
//     },
//   },
// ]

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
                  <p>{range.regional.label}</p>
                </div>
              </td>
              <td>
                {range.uf && (
                  <div>
                    <p>{range.uf.label}</p>
                  </div>
                )}
              </td>
              <td>
                {range.city && (
                  <div key={range.city.id}>
                    <p>{range.city.label}</p>
                  </div>
                )}
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  )
}
