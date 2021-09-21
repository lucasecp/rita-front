import React, { createContext, useState, useContext } from 'react'

const ModuleContext = createContext()

export default function ModuleProvider({ children }) {
  const [module, setModule] = useState('');

  return (
    <ModuleContext.Provider value={{ module,setModule }}>
      {children}
    </ModuleContext.Provider>
  )
}

export const useModule = () => useContext(ModuleContext)
