import React, { useEffect, useState } from 'react'
import { sellableItemsFields } from './constants/sellableItemsFields'
import { Container, ArrowUp, ArrowDown, Content } from './styles'

export const FieldsSellableItems = ({ onGetOrder }) => {
  const [order, setOrder] = useState()

  useEffect(() => {
    onGetOrder(order)
  }, [order])

  const hasDescOrder = (name) =>
    name === order?.name && order?.value === 'descending'

  const hasAscOrder = (name) =>
    name === order?.name && order?.value === 'ascending'

  const toggleOrder = (name) => {
    if (hasDescOrder(name)) {
      return setOrder({})
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
        {sellableItemsFields.map((order) => (
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
