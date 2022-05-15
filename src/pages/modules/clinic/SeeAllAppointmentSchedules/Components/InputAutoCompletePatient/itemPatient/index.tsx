import React from 'react'
import { Item } from '../styles'

interface ItemSpecialistProps {
  patient: any
}

const itemPatient: React.FC<ItemSpecialistProps> = ({ patient }) => {

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Item>
        {
          patient
        }
      </Item>
    </div>
  )
}

export default itemPatient
