import React from 'react'
import orderly from '../../static/orderly'
import { HeaderProps } from '../../types'
import { Container, ArrowUp, ArrowDown, Content } from './styles'

const Header: React.FC<HeaderProps> = ({ order, setOrder }) => {
  const hasDescOrder = (name: string) =>
    name === order?.name && order?.value === 'DESC'

  const hasAscOrder = (name: string) =>
    name === order?.name && order?.value === 'ASC'

  const toggleOrder = (name: string) => {
    if (hasDescOrder(name)) {
      return setOrder({})
    }

    if (
      hasDescOrder(name) ||
      !hasAscOrder(name) ||
      !Object.keys(order).length
    ) {
      return setOrder({ name, value: 'ASC' })
    }

    setOrder({ name, value: 'DESC' })
  }

  return (
    <Container>
      <div>
        {orderly.map((order) => (
          <Content
            isSpeciality={order.name === 'especialidade'}
            key={order.name}
          >
            <h5> {order.label} </h5>
            <div onClick={() => toggleOrder(order.name)}>
              <ArrowUp order={hasAscOrder(order.name) ? 1 : 0} />
              <ArrowDown order={hasDescOrder(order.name) ? 1 : 0} />
            </div>
          </Content>
        ))}
      </div>
    </Container>
  )
}

export default Header