import React from 'react'

import { Container } from './styles'

import {ReactComponent as  LoadingIcon} from '@/assets/icons/spinner.svg'
const Spinner = () => {
  return (
    <Container>
     <LoadingIcon/>
    </Container>
  )
}

export default Spinner
