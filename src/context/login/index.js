import jwt from 'jwt-decode'
import apiUser from '@/services/apiUser'
import { deleteLocalStorage, getUser, setLocalStorage } from '@/storage/user'

import React, { createContext, useState, useContext, useEffect } from 'react'
import { useLoading } from '../useLoading'
import { useModal } from '../useModal'
import InvalidCredences from './messages/InvalidCredences'

const UserContext = createContext()

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [module, setModule] = useState('DEFAULT')
  const { setLoading, loading } = useLoading()
  const { showMessage } = useModal()

  useEffect(() => {
    setUser(getUser())
  }, [])
  const login = async (payload) => {
    try {
      setLoading(true)
      console.log(payload)
      const { data } = await apiUser.post('/login', payload)
      const dataUser = jwt(data.jwtToken)
      console.log(dataUser)
    } catch ({ response }) {
      showMessage(InvalidCredences)
    } finally {
      setLoading(false)
    }
  }
  const setDataLogin = ({ id, cpf, token }) => {
    setUser({ id, cpf, token })
    setLocalStorage({ id, cpf, token })
  }
  const logout = () => {
    setUser(null)
    deleteLocalStorage()
  }

  return (
    <UserContext.Provider value={{ user, module, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export const useAuth = () => useContext(UserContext)
