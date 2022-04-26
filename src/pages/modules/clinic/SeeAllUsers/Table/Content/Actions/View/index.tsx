import React from 'react'
import { ReactComponent as ViewIcon } from '@/assets/icons/eye-purple.svg'
//import { CLINIC_SEE_ONE_USER } from '@/routes/constants/namedRoutes/routes'
//import { useHistory } from 'react-router'

const View: React.FC<{ idUsuario: number, idClinica: number }> = ({ idUsuario, idClinica }) => {
  //const history = useHistory()

  const pushToSpeclialists = () => {
    //history.push('CLINIC_SEE_ONE_USER', { idUsuario, idClinica })
  }
  return <ViewIcon onClick={pushToSpeclialists} />
}

export default View
