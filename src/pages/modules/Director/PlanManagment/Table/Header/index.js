import React from 'react'
import orderly from '../../static/orderly'
import { Container, ArrowUp, ArrowDown, Content } from './styles'

const Header = ({ order, setOrder }) => {
  const hasDescOrder = (name) => name === order?.name && order?.value === 'DESC'

  const hasAscOrder = (name) => name === order?.name && order?.value === 'ASC'

  const toggleOrder = (name) => {
    setOrder((lastOrder) => {
      if (!Object.keys(lastOrder).length) {
        return { name, value: 'ASC' }
      }

      if (lastOrder.value === 'ASC') {
        return { name, value: 'DESC' }
      }
      return {}
    })
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
