import { Table } from './styles'

interface Place {
  municipios?: {
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
                {range.municipios && (
                  <div key={range.municipios[0].id}>
                    <p>{range.municipios[0].nome}</p>
                  </div>
                )}
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  )
}
