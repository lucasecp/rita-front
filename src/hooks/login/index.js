import jwt from 'jwt-decode'
import apiUser from '@/services/apiUser'
import {
  deleteHeaderToken,
  deleteLocalStorage,
  getUserStorage,
  setHeaderToken,
  setUserLocalStorage,
} from '@/storage/user'

import React, { createContext, useState, useContext } from 'react'
import { useLoading } from '../useLoading'
import { useModal } from '../useModal'
import InvalidCredences from './messages/InvalidCredences'
import { useHistory } from 'react-router-dom'
import { LOGIN, INITIAL_PAGE } from '@/routes/constants/namedRoutes/routes'
import apiPatient from '@/services/apiPatient'
import AnalyzingData from './messages/AnalzingData'
import UserBlocked from './messages/userBlocked'

const UserContext = createContext()

export default function AuthProvider({ children }) {
  const { Loading } = useLoading()
  const { showMessage } = useModal()
  const history = useHistory()

  const [user, setUser] = useState(getUserStorage() || null)

  const setDataLogin = (payload) => {
    setUser(payload)
    setUserLocalStorage(payload)
    setHeaderToken(payload.token)
  }

  const pushToUrl = (url) => {
    if (!url) return history.push(INITIAL_PAGE)
    history.push(url.from)
  }

  const login = async (payload, prevPath) => {
    let searchPatientStatus = false
    let canDoLogin = false

    try {
      Loading.turnOn()

      await apiUser.get(`/status`, {
        params: { cpf: payload.cpf },
      })

      canDoLogin = true
    } catch (error) {
      searchPatientStatus = true
    } finally {
      Loading.turnOff()
    }

    if (searchPatientStatus) {
      try {
        Loading.turnOn()

        const { data } = await apiPatient.get(
          `paciente/status?cpf=${payload.cpf}`,
        )

        if (data.status === 'P' || data.status === 'D') {
          showMessage(AnalyzingData)
        }
      } catch (error) {
        // console.log(error)
        // Futuro tratamento caso exista um usuário sem paciente

        showMessage(InvalidCredences)
      } finally {
        Loading.turnOff()
      }
    }

    if (canDoLogin) {
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
      } catch (error) {
        console.log(error)

        if (error.response.status === 403) {
          return showMessage(UserBlocked)
        }

        showMessage(InvalidCredences)
      } finally {
        Loading.turnOff()
      }
    }
  }

  const logout = () => {
    setUser(null)
    deleteLocalStorage()
    deleteHeaderToken()
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
        setDataLogin
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useAuth = () => useContext(UserContext)
