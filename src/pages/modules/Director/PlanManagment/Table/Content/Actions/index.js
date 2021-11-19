import React from 'react'
import { Container } from './styles'
import { ReactComponent as InactiveIcon } from '@/assets/icons/inactive.svg'
import { ReactComponent as EyePurpleIcon } from '@/assets/icons/eye-purple.svg'
import { ReactComponent as ActiveIcon } from '@/assets/icons/active.svg'
import { ReactComponent as SuspenseIcon } from '@/assets/icons/suspense.svg'

const Actions = () => {

  return (
    <Container>
      <EyePurpleIcon />
      <InactiveIcon />
      <ActiveIcon />
      {/* <SuspenseIcon/> */}
    </Container>
  )
}

export default Actions
