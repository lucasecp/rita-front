import React, { createContext, useContext, useState } from 'react'

const LoadingContext = createContext({})

const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)

  const Loading = {
      turnOff() {
      setLoading(false)
    },
     turnOn() {
      setLoading(true)
    }
  }
  
  return (
    <LoadingContext.Provider
      value={{ loading, Loading}}
    >
      {children}
    </LoadingContext.Provider>
  )
}

const useLoading = () => useContext(LoadingContext)

export { LoadingProvider, useLoading }
