import type { ReactNode } from 'react'
import type { FinancialListItemModel } from '../FinancialListItem'
import React from 'react'
import { Container } from './styles'

import FinancialListItem from '../FinancialListItem'

type FinancialListProps = {
  icon?: ReactNode
  items?: FinancialListItemModel[]
  direction?: 'horizontal' | 'vertical'
  onItemClick?: (item: FinancialListItemModel) => void
  onItemRemove?: (item: FinancialListItemModel) => void
}

const FinancialList: React.FC<FinancialListProps> = ({
  icon,
  items = [],
  direction = 'vertical',
  onItemClick,
  onItemRemove,
}) => {
  return (
    <Container direction={direction}>
      {items &&
        items.map((item, itemIndex) => {
          return (
            <FinancialListItem
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
            </FinancialListItem>
          )
        })}
    </Container>
  )
}

export default FinancialList
