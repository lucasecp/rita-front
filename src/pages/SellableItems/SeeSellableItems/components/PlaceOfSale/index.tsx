import { Table } from './styles'

interface Place {
  city?: {
    id: number
    nome: string
  }[]
  uf?: {
    id: number
    sigla: string
    nome: string
  }
  regional: {
    id: number
    nome: string
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
                  <p>{range.regional.nome}</p>
                </div>
              </td>
              <td>
                {range.uf && (
                  <div>
                    <p>{range.uf.nome}</p>
                  </div>
                )}
              </td>
              <td>
                {range.city && (
                  <div key={range.city[0].id}>
                    <p>{range.city[0].nome}</p>
                  </div>
                )}
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  )
}
