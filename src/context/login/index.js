import jwt from 'jwt-decode'
import apiUser from '@/services/apiUser'
import { deleteLocalStorage, setLocalStorage } from '@/storage/user'

import React, { createContext, useState, useContext } from 'react'
import { useLoading } from '../useLoading'
import { useModal } from '../useModal'
import InvalidCredences from './messages/InvalidCredences'
import { useHistory } from 'react-router'

const UserContext = createContext()

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const { Loading } = useLoading()
  const { showMessage } = useModal()
  const history = useHistory()
  const [errorLogin,setErrorLogin] = useState('')

  const login = async (payload,prevPath) => {
    try {
      Loading.turnOn()
      const { data } = await apiUser.post('/login', payload)
      const dataUser = jwt(data.jwtToken)
      setDataLogin({...dataUser,cpf:payload.cpf})
      pushToUrl(prevPath)
    } catch ({ response }) {
      showMessage(InvalidCredences)
    } finally {
      Loading.turnOff()
    }
  }
  const setDataLogin = (payload) => {
    setUser(payload)
    setLocalStorage(payload)
  }
  const logout = () => {
    setUser(null)
    deleteLocalStorage()
  }
  const pushToUrl = (url) =>{
    if(!url) return history.push('/master-page')
    history.push(url.from)
  }

  return (
    <UserContext.Provider value={{ user,setUser,errorLogin,setErrorLogin, module, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export const useAuth = () => useContext(UserContext)
