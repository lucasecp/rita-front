import React from 'react'
import { ReactComponent as ViewIcon } from '@/assets/icons/eye-purple.svg'
import { useHistory } from 'react-router'
import { CLINIC_SEE_ONE_SPECIALIST } from '@/routes/constants/namedRoutes/routes'

const View: React.FC<{ id: string }> = ({ id }) => {
  const history = useHistory()

  const pushToSpeclialists = () => {
    history.push(CLINIC_SEE_ONE_SPECIALIST, { idDoctor: id })
  }
  return <ViewIcon onClick={pushToSpeclialists} />
}

export default View
