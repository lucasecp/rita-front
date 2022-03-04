import { useEffect, useState } from 'react'
import { usersFields } from './constants/usersFields'
import { Container, ArrowUp, ArrowDown, Content } from './styles'

interface FieldsUsersProps {
  onGetOrder: any
}

export const FieldsUsers: React.FC<FieldsUsersProps> = ({ onGetOrder }) => {
  const [order, setOrder] = useState({ name: '', value: '' })

  useEffect(() => {
    onGetOrder(order)
  }, [order])

  const hasDescOrder = (name: string) =>
    name === order.name && order.value === 'descending'

  const hasAscOrder = (name: string) =>
    name === order.name && order.value === 'ascending'

  const toggleOrder = (name: string) => {
    if (hasDescOrder(name)) {
      return setOrder({ name: '', value: '' })
    }

    if (
      hasDescOrder(name) ||
      !hasAscOrder(name) ||
      !Object.keys(order).length
    ) {
      return setOrder({ name, value: 'ascending' })
    }

    setOrder({ name, value: 'descending' })
  }

  return (
    <Container>
      <div>
        {usersFields.map((order) => (
          <Content key={order.name}>
            <h5>{order.label}</h5>
            {(order.label === 'Nome' ||
              order.label === 'Login' ||
              order.label === 'Status') && (
              <div onClick={() => toggleOrder(order.name)}>
                <ArrowUp order={hasAscOrder(order.name) ? 1 : 0} />
                <ArrowDown order={hasDescOrder(order.name) ? 1 : 0} />
              </div>
            )}
          </Content>
        ))}
      </div>
    </Container>
  )
}
