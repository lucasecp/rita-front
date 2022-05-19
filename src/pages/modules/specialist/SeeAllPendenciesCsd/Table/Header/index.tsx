import React from 'react'
import orderly from '../../static/orderly'
import { HeaderProps } from '../../types'
import { ArrowDown, ArrowUp, Container, Content } from './styles'

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
          <Content key={order.name}>
            <h5> {order.label} </h5>
            {order.label !== 'Atendimento' && (
              <div onClick={() => toggleOrder(order.name)}>
                <ArrowUp order={hasAscOrder(order.name) ? 1 : 0} />
                <ArrowDown order={hasDescOrder(order.name) ? 1 : 0} />
              </div>
            )}
          </Content>
        ))}
        <Content>
          <h5> Ações </h5>
        </Content>
      </div>
    </Container>
  )
}

export default Header
