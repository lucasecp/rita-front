import jwt from 'jwt-decode'
import apiUser from '@/services/apiUser'
import {
  deleteHeaderToken,
  deleteLocalStorage,
  getUserStorage,
  setHeaderToken,
  setLocalStorage,
} from '@/storage/user'

import React, { createContext, useState, useContext } from 'react'
import { useLoading } from '../useLoading'
import { useModal } from '../useModal'
import InvalidCredences from './messages/InvalidCredences'
import { useHistory } from 'react-router'
import { LOGIN, MASTERPAGE } from '@/routes/constants/namedRoutes/routes'

const UserContext = createContext()

export default function AuthProvider({ children }) {
  const { Loading } = useLoading()
  const { showMessage } = useModal()
  const history = useHistory()

  const [user, setUser] = useState(getUserStorage() || null)

  // useEffect(() => {
  //   apiUser.defaults.headers.token = user?.token
  //   apiPatient.defaults.headers.token = user?.token
  // }, [user])

  const login = async (payload, prevPath) => {
    try {
      Loading.turnOn()
      const { data } = await apiUser.post('/login', payload)

      const dataUser = jwt(data.jwtToken)

      setDataLogin({
        ...dataUser,
        cpf: payload.cpf,
        token: data.jwtToken,
      })

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
    setHeaderToken(payload.token)
  }

  const logout = () => {
    setUser(null)
    deleteLocalStorage()
    deleteHeaderToken()
  }

  const pushToUrl = (url) => {
    if (!url) return history.push(MASTERPAGE)
    history.push(url.from)
  }
  const clearDataLogout = () => {
    logout()
    history.push(LOGIN)
  }

  const isAuthorization = () => {
    if (!user) {
      return false
    }

    return new Date() < new Date(user.exp * 1000)
  }

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
        clearDataLogout,
        isAuthorization,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useAuth = () => useContext(UserContext)
