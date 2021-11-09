import React from 'react'

import { Container } from './styles'

export const SpinnerLoading = () => {
  return (
    <Container animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Container>
  )
}

export default SpinnerLoading
