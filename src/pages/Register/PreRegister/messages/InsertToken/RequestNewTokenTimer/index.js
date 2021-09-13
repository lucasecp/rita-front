import React, { useState, useEffect } from 'react'

import SpinnerLoading from '@/styles/components/SpinnerLoading'

import { Container } from './styles'

function RequestNewTokenTimer({ active, onFinishTimer }) {
  const INITIAL_TIME = 10
  // const INITIAL_TIME = 120

  const [time, setTime] = useState(INITIAL_TIME)

  useEffect(() => {
    if (active) {
      if (time > 0) {
        setTimeout(() => {
          setTime(time - 1)
        }, 1000)
      } else {
        setTime(INITIAL_TIME)
        onFinishTimer(false)
      }
    }
  }, [active, time])

  return (
    active && (
      <Container active={active}>
        <SpinnerLoading />
        <h4>Você pode solicitar um novo token em {time} segundos...</h4>
      </Container>
    )
  )
}

export default RequestNewTokenTimer
