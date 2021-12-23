import { Item } from '../styles'
import clinicIcon from '@/assets/img/avatar.svg'
import React from 'react'
import { useHistory } from 'react-router'
import { PATIENT_CLINIC_INFORMATION } from '@/routes/constants/namedRoutes/routes'

const ComponentRedirect = ({ children, id }) => {
  const history = useHistory()
  return (
    <Item
      onClick={() => history.push(PATIENT_CLINIC_INFORMATION, { idClinic: id })}
    >
      {children}
    </Item>
  )
}

const ItemDoctorAndClinic = (id, name, group, formatedName) => {
  return {
    value:  id,
    label: (
      <ComponentRedirect id={id}>
        <div>
          <div>
            <img src={clinicIcon} />
          </div>
         <span> {name}</span>
        </div>
        <span>{group}</span>
      </ComponentRedirect>
    ),
  }
}

export default ItemDoctorAndClinic
