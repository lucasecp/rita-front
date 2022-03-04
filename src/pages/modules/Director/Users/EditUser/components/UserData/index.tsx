import React, { useEffect, useState } from 'react'

import InputText from '@/components/Form/InputText'
import InputMask from '@/components/Form/InputMask'
import { InputEmail } from '@/components/smarts/InputEmail'

import { Select } from '@/components/Form/Select'

import { User } from '../../index'

import { Container } from './styles'
import ProfilesMultiSelect from './components/ProfilesMultiSelect'
import { useMessage } from '@/hooks/useMessage'

import { validateFullName } from '@/helpers/validateFields/validateFullName'
import { validatePhone } from '@/helpers/validateFields/validatePhone'
import { validateAccessProfile } from './helpers/validateAccessProfile'
import { useLoading } from '@/hooks/useLoading'
import apiUser from '@/services/apiUser'
import { toast } from '@/styles/components/toastify'
import { userToApi } from './adapters/toApi'
import { useHistory } from 'react-router'
import { DIRECTOR_FILTER_USERS } from '@/routes/constants/namedRoutes/routes'

interface ErrorsState {
  email: boolean
  name: string
  phone: string
  accessProfile: string
}
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
  const { Loading } = useLoading()
  const history = useHistory()

  const [name, setName] = useState(initialUser?.name || '')
  const [status, setStatus] = useState(initialUser?.status || '')
  const [cpf, setCpf] = useState(initialUser?.cpf || '')
  const [email, setEmail] = useState(initialUser?.email || '')
  const [phone, setPhone] = useState(initialUser?.phone || '')
  const [accessProfile, setAccessProfile] = useState(
    initialUser?.accessProfile || [],
  )

  const [errors, setErrors] = useState({} as ErrorsState)
  const [errorMessage, sendErrorMessage] = useMessage()

  const [changeTimes, setChangeTimes] = useState(0)

  useEffect(() => {
    if (changeTimes >= 3) {
      onGetAnyFieldsHasChanged(true)
    }

    setChangeTimes(changeTimes + 1)
  }, [name, status, cpf, email, phone, accessProfile])

  useEffect(() => {
    if (saveUser) {
      sendErrorMessage()

      const errorsTemporary = {
        ...errors,
        name: validateFullName(name),
        phone: validatePhone(phone),
        accessProfile: validateAccessProfile(accessProfile),
      }

      setErrors(errorsTemporary)

      const hasErrors = Object.values(errorsTemporary).some((value) => value)

      if (hasErrors) {
        return
      }

      const sendUserToApi = async () => {
        try {
          Loading.turnOn()

          const userMapped = userToApi({
            name,
            status,
            cpf,
            email,
            phone,
            accessProfile,
          })

          await apiUser.put(`/usuario/${initialUser?.id}`, userMapped)

          toast.success('Edição realizada com sucesso!')

          history.push(DIRECTOR_FILTER_USERS)
        } catch (error) {
          toast.error('Erro ao salvar usuário')
        } finally {
          Loading.turnOff()
        }
      }

      sendUserToApi()
    }
  }, [saveUser])

  return (
    <Container>
      <InputText
        label="Nome Completo:"
        value={name}
        setValue={setName}
        hasError={!!errors.name}
        msgError={errors.name}
      />
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
      <InputEmail
        initialEmail={email}
        onGetEmail={setEmail}
        hasError={(hasError) => setErrors({ ...errors, email: hasError })}
        checkHasError={errorMessage}
      />
      <InputMask
        label="Celular:"
        mask="(99) 99999-9999"
        value={phone}
        setValue={setPhone}
        hasError={!!errors.phone}
        msgError={errors.phone}
      />
      <ProfilesMultiSelect
        initialProfiles={accessProfile}
        onGetAccessProfile={setAccessProfile}
        hasError={!!errors.accessProfile}
        messageError={errors.accessProfile}
      />
    </Container>
  )
}
