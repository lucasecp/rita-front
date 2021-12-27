import React from 'react'
import { Item } from '../styles'
import profileIcon from '@/assets/img/profile.png'

const ItemSpecialty = (id, name, group, photo) => {
  return {
    value: name,
    label: (
      <Item>
        <div>
          <div>
          <div> <img src={profileIcon} /> </div>
          </div> 
          <span> {name}</span>
        </div>
        <span>{group}</span>
      </Item>
    ),
  }
}

export default ItemSpecialty
