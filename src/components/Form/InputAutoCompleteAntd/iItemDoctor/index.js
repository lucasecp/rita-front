import { Item } from '../styles'
import profileIcon from '@/assets/img/profile.png'
import React from 'react'

const ItemDoctor = (id, name, group, formatedName) => {
  return {
    value: id,
    label: (
      <Item>
        <div>
          <div>
            {' '}
            <img src={profileIcon} />{' '}
          </div>
          <span> {name}</span>
        </div>
        <span>{group}</span>
      </Item>
    ),
  }
}

export default ItemDoctor
