import React from 'react'
import orderColumnsToTable from '../../helpers/orderColumnsToHeaderTable'
import { ArrowDown, ArrowUp, Content, Container } from './styles'

const Header = ({ setOrders, orders, columns }) => {
  const hasDescOrder = (name) =>
    orders.some((obj) => obj.name === name && obj.value === 'DESC')

  const hasAscOrder = (name) =>
    orders.some((obj) => obj.name === name && obj.value === 'ASC')

  const handleClick = (name) => {
    
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
        {orderColumnsToTable(columns).map((field) => (
          <Content key={field.id}>
            <h5> {field.name} </h5>
            <div onClick={() => handleClick(field.id)}>
              <ArrowUp order={hasAscOrder(field.id) ? 1 : 0} />
              <ArrowDown order={hasDescOrder(field.id) ? 1 : 0} />
            </div>
          </Content>
        ))}
      </div>
    </Container>
  )
}

export default Header
