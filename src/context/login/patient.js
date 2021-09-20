import api from '@/services/api'
import { deleteLocalStorage, getUser, setLocalStorage } from '@/storage/user'
import React, { createContext, useState, useContext, useEffect } from 'react'

const UserContext = createContext()

export default function AuthPatientProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setErrors] = useState({ message: '' })
  useEffect(() => {
    setUser(getUser())
  }, [])
  const login = async (payload) => {
    try {
      setLoading(true)
      const { data } = await api.post('/login/patient', payload)
      setDataLogin(data)
    } catch ({ response }) {
      if (response.status === 400) {
        setErrors({ message: 'Erro na requisição' })
      }
    } finally {
      loading(false)
    }
  }
  const setDataLogin = ({ id, email, token }) => {
    setUser({ id, email, token, module: 'patient' })
      setLocalStorage({ id, email, token})
  }
  const logout = () => {
    setUser(null)
    deleteLocalStorage()
  }

  return (
    <UserContext.Provider value={{ user, loading, error, login,logout }}>
      {children}
    </UserContext.Provider>
  )
}

export const useAuthPatient = () => useContext(UserContext)
