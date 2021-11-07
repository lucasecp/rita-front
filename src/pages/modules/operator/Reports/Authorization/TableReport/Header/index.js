import React from 'react'
import {columns} from '../../static'
import { ArrowDown, ArrowUp,Content,Container } from './styles'

const Header = ({ setOrders, orders }) => {

  const hasDescOrder = (name) =>
    orders.some((obj) => obj.name === name && obj.value === 'DESC')

  const hasAscOrder = (name) =>
    orders.some((obj) => obj.name === name && obj.value === 'ASC')

  const handleClick = (name) => {

    if(hasDescOrder(name)) {
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

      {columns.map((field) => (
        <Content key={field.id}>
           <h5> {field.name} </h5>
            <div onClick={() => handleClick(field.id)}>
              <ArrowUp order={hasAscOrder(field.id) ? 1 : 0} />
              <ArrowDown order={hasDescOrder(field.id) ? 1 : 0} />
            </div>

        </Content>
      ))}
      </Container>
  )
}

export default Header