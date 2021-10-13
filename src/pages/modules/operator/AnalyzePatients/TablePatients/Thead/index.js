import React from 'react'
import _static from './static'
import { ArrowDown, ArrowUp,Content } from './styles'

const Thead = ({ setOrders, orders }) => {

  const hasDescOrder = (name) =>
    orders.some((obj) => obj.name === name && obj.order === 'DESC')

  const hasAscOrder = (name) =>
    orders.some((obj) => obj.name === name && obj.order === 'ASC')

  const updateOrder = (value) => {
   const valueUpdated = orders.reduce((ac,obj,i)=>{
     if(obj.name === value.name && value.order !== obj.order) {
      ac.splice(i,1)
      return ac
      }
     ac.push(obj)
     return ac
    },[]
    )
    setOrders([...valueUpdated,value])
  }

  const handleClick = (name) => {
    if (hasDescOrder(name) || !hasAscOrder(name) || !orders.length) {
      updateOrder({ name, order: 'ASC' })
      return
    }
    updateOrder({ name, order: 'DESC' })
  }

  return (
    <thead>
    <tr>
      {_static.map((field) => (
        <th key={field.label}>
            <Content>
            {field.label}
            <div onClick={() => handleClick(field.name)}>
              <ArrowUp order={hasDescOrder(field.name)} />
              <ArrowDown order={hasAscOrder(field.name)} />
            </div>
            </Content>
        </th>
      ))}
    </tr>
    </thead>
  )
}

export default Thead
