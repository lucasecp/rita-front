import jwt from 'jwt-decode'
import apiUser from '@/services/apiUser'
import {
  deleteHeaderToken,
  deleteLocalStorage,
  getUserStorage,
  setHeaderToken,
  setLocalStorage,
} from '@/storage/user'

import React, { createContext, useState, useContext, useEffect } from 'react'
import { useLoading } from '../useLoading'
import { useModal } from '../useModal'
import InvalidCredences from './messages/InvalidCredences'
import { useHistory } from 'react-router'
import permissions from '@/routes/constants/permissions'
import { MASTERPAGE } from '@/routes/constants/namedRoutes/routes'

const UserContext = createContext()

export default function AuthProvider({ children }) {
  // let currentUserPermission = null
  // const [userPermission, setUserPermission] = useState(
  //   getUserStorage()?.userPermission || null
  // )

  const { Loading } = useLoading()
  const { showMessage } = useModal()
  const history = useHistory()

  const [user, setUser] = useState(getUserStorage() || null)

  useEffect(() => {
    if (!isAuthorization()) return logout()
    setDataLogin(getUserStorage())
  }, [])

  const login = async (payload, prevPath) => {
    try {
      Loading.turnOn()
      const { data } = await apiUser.post('/login', payload)

      const dataUser = jwt(data.jwtToken)

      // setUserPermission(isValidatorUser(dataUser.perfis))
      // currentUserPermission = isValidatorUser(dataUser.perfis)

      setDataLogin({
        ...dataUser,
        cpf: payload.cpf,
        token: data.jwtToken,
        // userPermission: currentUserPermission,
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

  const isAuthorization = () => {
    if (!user) {
      return false
    }

    return new Date() < new Date(user.exp * 1000)
  }

  // const isValidatorUser = (users) => {
  //   const isValidator = users.some(
  //     (user) => user.nome === permissions.VALIDATOR
  //   )
  //   if (isValidator) return permissions.VALIDATOR
  //   return ''
  // }

  return (
    <UserContext.Provider
      value={{
        user,
        // userPermission,
        // setUserPermission,
        login,
        logout,
        isAuthorization,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useAuth = () => useContext(UserContext)
