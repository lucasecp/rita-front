import React, { useEffect, useState } from 'react'

import InputText from '@/components/Form/InputText'
import InputMask from '@/components/Form/InputMask'
import { InputEmail } from '@/components/smarts/InputEmail'

import { Select } from '@/components/Form/Select'

import { User } from '../../index'

import { Container } from './styles'
import ProfilesMultiSelect from './components/ProfilesMultiSelect'

interface IUserDataProps {
  initialUser?: User | undefined
  onGetAnyFieldsHasChanged: React.Dispatch<React.SetStateAction<boolean>>
  saveUser: number
}

export const UserData: React.FC<IUserDataProps> = ({
  initialUser,
  onGetAnyFieldsHasChanged,
  saveUser,
}) => {
  const [name, setName] = useState(initialUser?.name || '')
  const [status, setStatus] = useState(initialUser?.status || '')
  const [cpf, setCpf] = useState(initialUser?.cpf || '')
  const [email, setEmail] = useState(initialUser?.email || '')
  const [phone, setPhone] = useState(initialUser?.phone || '')
  const [accessProfile, setAccessProfile] = useState(
    initialUser?.accessProfile || [],
  )

  const [changeTimes, setChangeTimes] = useState(0)

  useEffect(() => {
    if (changeTimes >= 3) {
      onGetAnyFieldsHasChanged(true)
    }

    setChangeTimes(changeTimes + 1)
  }, [name, status, cpf, email, phone, accessProfile])

  useEffect(() => {
    if (saveUser) {
      // const loadUserData = async () => {
      //     try {
      //       Loading.turnOn()
      //       // const { data } = await apiUser.get(`/usuario/${id}`)
      //       // const userMapped = userFromApi(data)
      //       const userMapped = userFromApi(null)
      //       setUser(userMapped)
      //     } catch (error) {
      //       toast.error('Erro ao carregar usuário')
      //     } finally {
      //       Loading.turnOff()
      //     }
      //   }
      //   loadUserData()
    }
  }, [saveUser])

  return (
    <Container>
      <InputText label="Nome Completo*:" value={name} setValue={setName} />
      <Select
        label="Status:"
        value={status}
        options={[
          { label: 'Ativo', value: 'active' },
          { label: 'Inativo', value: 'inative' },
        ]}
        setValue={setStatus}
      />
      <InputMask
        label="CPF:"
        mask="999.999.999-99"
        value={cpf}
        disabled
        setValue={setCpf}
      />
      <InputEmail initialEmail={email} onGetEmail={setEmail} />
      <InputMask
        label="Celular*:"
        mask="(99) 99999-9999"
        value={phone}
        setValue={setPhone}
      />
      <ProfilesMultiSelect
        initialProfiles={accessProfile}
        onGetAccessProfile={setAccessProfile}
      />
    </Container>
  )
}
