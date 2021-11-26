import React from 'react'
import orderly from '../../static/orderly'
import { Container, ArrowUp, ArrowDown, Content } from './styles'

const Header = ({ order, setOrder }) => {
  const hasDescOrder = (name) => name === order?.name && order?.value === 'DESC'

  const hasAscOrder = (name) => name === order?.name && order?.value === 'ASC'

  const toggleOrder = (name) => {
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
          <Content key={order.name}>
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
