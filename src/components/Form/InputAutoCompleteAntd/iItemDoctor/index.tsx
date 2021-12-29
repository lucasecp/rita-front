import { ItemWithLink } from '../styles';
import profileIcon from '@/assets/img/avatar.svg'
import React from 'react'
import { Link } from 'react-router-dom'
import { PATIENT_DOCTOR_INFORMATION } from '@/routes/constants/namedRoutes/routes'

const ItemDoctor = (id: number, name: string, group: string) => {
  return {
    value: name,
    label: (
      <ItemWithLink>
        <Link
          to={{ pathname: PATIENT_DOCTOR_INFORMATION, state: { idClinic: id } }}
        >
          <div>
            <div>
              <img src={profileIcon} />{' '}
            </div>
            <span> {name}</span>
          </div>
          <span>{group}</span>
        </Link>
      </ItemWithLink>
    ),
  }
}

export default ItemDoctor
