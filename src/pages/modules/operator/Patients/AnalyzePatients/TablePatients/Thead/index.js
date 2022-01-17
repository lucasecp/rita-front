import React from 'react'
import _static from './static'
import { Container, ArrowUp, ArrowDown, Content } from './styles'

const Thead = ({ setOrders, orders }) => {
  const hasDescOrder = (name) =>
    orders.some((obj) => obj.name === name && obj.value === 'DESC')

  const hasAscOrder = (name) =>
    orders.some((obj) => obj.name === name && obj.value === 'ASC')

  const toggleOrder = (name) => {
    if (hasDescOrder(name)) {
      return setOrders([])
    }

    if (hasDescOrder(name) || !hasAscOrder(name) || !orders.length) {
      setOrders([{ name, value: 'ASC' }])
      return
    }

    setOrders([{ name, value: 'DESC' }])
  }

  return (
    <Container>
      <div>
        {_static.map((order) => (
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

export default Thead
