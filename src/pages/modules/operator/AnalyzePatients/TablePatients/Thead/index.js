import React from 'react'
import _static from './static'
import { ArrowDown, ArrowUp,Content } from './styles'

const Thead = ({ setOrders, orders }) => {

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
    <thead>
    <tr>
      {_static.map((field) => (
        <th key={field.label}>
            <Content>
            {field.label}
            <div onClick={() => handleClick(field.name)}>
              <ArrowUp order={hasAscOrder(field.name) ? 1 : 0} />
              <ArrowDown order={hasDescOrder(field.name) ? 1 : 0} />
            </div>
            </Content>
        </th>
      ))}
    </tr>
    </thead>
  )
}

export default Thead
