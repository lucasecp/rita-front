import React from 'react'
import { ReactComponent as ViewIcon } from '@/assets/icons/eye-purple.svg'
import { useHistory } from 'react-router'
import { CLINIC_EDIT_USERS } from '@/routes/constants/namedRoutes/routes'
import { DataUsersClinic } from '../../../../types'

const View: React.FC<DataUsersClinic> = (data) => {
  const history = useHistory()

  const viewAndEdit = () => {
    history.push(CLINIC_EDIT_USERS, {
      idClinica: data.idClinica,
      idUsuario: data.idUsuario
    })
  }

  return <ViewIcon onClick={viewAndEdit}/>
}

export default View
