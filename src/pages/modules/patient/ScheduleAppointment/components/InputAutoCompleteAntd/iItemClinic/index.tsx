import { ItemWithLink } from '../styles'
import clinicIcon from '@/assets/icons/ic-clinic.svg'
import React from 'react'
import { PATIENT_CLINIC_INFORMATION } from '@/routes/constants/namedRoutes/routes'
import { Link } from 'react-router-dom'

const ItemClinic = (id: number, name: string, group: string) => {
  return {
    value: name,
    label: (
      <ItemWithLink>
        <Link
          to={{ pathname: PATIENT_CLINIC_INFORMATION, state: { idClinic: id } }}
        >
          <div>
            <div>
              <img src={clinicIcon} />
            </div>
            <span> {name}</span>
          </div>
          <span>{group}</span>
        </Link>
      </ItemWithLink>
    ),
  }
}

export default ItemClinic
