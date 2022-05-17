import React from 'react'
import { Item } from '../styles'

interface ItemSpecialistProps {
  specialist: any
}

const ItemSpecialty: React.FC<ItemSpecialistProps> = ({ specialist }) => {

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Item>
        {
          specialist
        }
      </Item>
    </div>
  )
}

export default ItemSpecialty
