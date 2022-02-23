import { useState } from 'react'

export const useMessage = (initialState = 0): [number, () => void] => {
  const [message, setMessage] = useState(initialState)

  const sendMessage = () => {
    setMessage(Math.random)
  }

  return [message, sendMessage]
}
