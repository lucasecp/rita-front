import React from 'react'
import { Item } from '../styles'
import profileIcon from '@/assets/icons/ic-specialty.svg'

const ItemSpecialty = (id: number, name: string, group: string) => {
  return {
    value: name,
    label: (
      <Item>
        <div>
          <div>
            <div>

              <img src={profileIcon} />
            </div>
          </div>
          <span> {name}</span>
        </div>
        <span>{group}</span>
      </Item>
    ),
  }
}

export default ItemSpecialty
