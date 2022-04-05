import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { DefaultLayout } from '@/components/Layout/DefaultLayout'

import { MultiSelectOption } from '@/components/Form/MultSelect'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { Container } from './styles'

import { userFromApi } from './adapters/fromApi'
import { useLoading } from '@/hooks/useLoading'
import { toast } from '@/styles/components/toastify'
import { UserData } from './components/UserData'

import apiUser from '@/services/apiUser'
import { FILTER_USERS, EDIT_USER } from '@/routes/constants/namedRoutes/routes'

export interface User {
  name: string
  status: string
  cpf: string
  email: string
  phone: string
  accessProfile: MultiSelectOption[]
}

export const SeeOneUser: React.FC = () => {
  const history = useHistory()
  const { Loading } = useLoading()

  const { id } = useLocation<{ id: number }>().state || {}

  const [user, setUser] = useState({} as User)

  useEffect(() => {
    if (!id) {
      history.push('/usuarios/')
    }

    const loadUserData = async () => {
      try {
        Loading.turnOn()

        const { data } = await apiUser.get(`/usuario/${id}`)

        const userMapped = userFromApi(data)

        setUser(userMapped)
      } catch (error) {
        console.log(error)

        toast.error('Erro ao carregar usuário')
      } finally {
        Loading.turnOff()
      }
    }

    loadUserData()
  }, [])

  const onComeBack = () => {
    history.push(FILTER_USERS)
  }

  const onEditUser = () => {
    history.push(EDIT_USER, { user: { ...user, id } })
  }

  return (
    <DefaultLayout title="Visualizar e Editar Usuários">
      <Container>
        <h2>Dados do Usuário</h2>
        <UserData user={user} />
        <footer>
          <OutlineButton onClick={onComeBack}>Voltar</OutlineButton>
          <ButtonPrimary onClick={onEditUser}>Editar</ButtonPrimary>
        </footer>
      </Container>
    </DefaultLayout>
  )
}
