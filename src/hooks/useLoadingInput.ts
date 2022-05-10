import { useState } from 'react'

interface UseLoadingInputProps {
  LoadingMessage: string
  LoadingInput: {
    turnOn: () => void
    turnOff: () => void
  }
}

export const UseLoadingInput = (): UseLoadingInputProps => {
  const [LoadingMessage, setLoadingMessage] = useState('Selecione:')

  const turnOn = () => {
    setLoadingMessage('Carregando...')
  }

  const turnOff = () => {
    setLoadingMessage('Selecione:')
  }

  const LoadingInput = {
    turnOn,
    turnOff,
  }
  return { LoadingInput, LoadingMessage }
}
