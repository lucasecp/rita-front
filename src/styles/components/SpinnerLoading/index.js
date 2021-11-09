import React from 'react'

import { Container } from './styles'
import { CircularProgress } from '@material-ui/core'

function SpinnerLoading({variation,...rest}) {
  return (
    <Container variation={true} {...rest}  >
    <CircularProgress {...rest} animation="border" role="status"/>
    </Container>
  )
}

export default SpinnerLoading
