import api from '@/services/api'
import { deleteLocalStorage, getUser, setLocalStorage } from '@/storage/user'
import React, { createContext, useState, useContext, useEffect } from 'react'

const UserContext = createContext()

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setErrors] = useState({ message: '' })

  useEffect(() => {
    setUser(getUser())
  }, [])
  const login = async (payload) => {
    try {
      setLoading(true)
      const { data } = await api.post('/login', payload)
      setDataLogin(data)
    } catch ({ response }) {
      if (response.status === 400) {
        setErrors({ message: 'Erro na requisição' })
      }
    } finally {
      setLoading(false)
    }
  }
  const setDataLogin = ({ id, cpf, token }) => {
    setUser({ id, cpf, token, })
    setLocalStorage({ id, cpf, token })
  }
  const logout = () => {
    setUser(null)
    deleteLocalStorage()
  }

  return (
    <UserContext.Provider value={{ user, loading, error, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export const useAuth = () => useContext(UserContext)
