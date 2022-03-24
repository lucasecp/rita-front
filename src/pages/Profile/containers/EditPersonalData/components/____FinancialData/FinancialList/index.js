import React from 'react'
import { Container } from './styles'

import { FinancialItem } from '../FinancialItem'

export const FinancialList = ({
  direction,
  icon,
  items,
  textAdd,
  onItemAdd,
  onItemClick,
  onItemRemove,
}) => {
  const currentDirection = ['horizontal', 'vertical'].includes(direction)
    ? direction
    : 'vertical'

  return (
    <Container direction={currentDirection}>
      {textAdd && (
        <FinancialItem icon={icon} title={textAdd} onClick={onItemAdd} />
      )}
      {items &&
        items.map((item, itemIndex) => {
          return (
            <FinancialItem
              key={itemIndex}
              icon={icon}
              title={item.title}
              active={item.active}
              disabled={item.disabled}
              onClick={() => onItemClick && onItemClick(item)}
              onRemove={() => onItemRemove && onItemRemove(item)}
            >
              {item.data &&
                item.data.map((dataItem, dataIndex) => {
                  return <span key={dataIndex}>{dataItem}</span>
                })}
            </FinancialItem>
          )
        })}
    </Container>
  )
}
