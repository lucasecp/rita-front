import React, { useEffect, useState } from 'react'

import InputText from '@/components/Form/InputText'
import InputMask from '@/components/Form/InputMask'
import { InputEmail } from '@/components/smarts/InputEmail'

import { Select } from '@/components/Form/Select'
import ProfilesMultiSelect from './components/ProfilesMultiSelect'
import { MultiSelectOption } from '@/components/Form/MultSelect'

import { validateFullName } from '@/helpers/validateFields/validateFullName'
import { validatePhone } from '@/helpers/validateFields/validatePhone'
import { validateCPF } from '@/helpers/validateFields/validateCPF'
import { validateAccessProfile } from './helpers/validateAccessProfile'

import { useMessage } from '@/hooks/useMessage'
import { useLoading } from '@/hooks/useLoading'
import { useHistory } from 'react-router-dom'

import { userToApi } from './adapters/toApi'
import apiUser from '@/services/apiUser'

import { FILTER_USERS } from '@/routes/constants/namedRoutes/routes'

import { toast } from '@/styles/components/toastify'
import { Container } from './styles'

interface ErrorsState {
  name: string
  cpf: string
  email: boolean
  phone: string
  accessProfile: string
}

interface UserDataProps {
  onGetAnyFieldsHasChanged: React.Dispatch<React.SetStateAction<boolean>>
  saveUser: number
}

export const UserData: React.FC<UserDataProps> = ({
  onGetAnyFieldsHasChanged,
  saveUser,
}) => {
  const { Loading } = useLoading()
  const history = useHistory()

  const [name, setName] = useState('')
  const [status, setStatus] = useState('active')
  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [accessProfile, setAccessProfile] = useState<MultiSelectOption[]>([])

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
        cpf: validateCPF(cpf),
        name: validateFullName(name, 5),
        phone: validatePhone(phone, true),
        accessProfile: validateAccessProfile(accessProfile),
      }

      setErrors(errorsTemporary)

      const hasErrors = Object.values(errorsTemporary).some((value) => value)

      if (hasErrors) return

      const createNewUser = async () => {
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

          await apiUser.post('/usuario', userMapped)

          toast.success('Cadastro Realizado com Sucesso')

          history.push(FILTER_USERS)
        } catch (error) {
          toast.error('Erro ao criar usuário')
        } finally {
          Loading.turnOff()
        }
      }

      createNewUser()
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
        maxLength={100}
      />
      <div className="two-fields-in-row">
        <InputMask
          label="CPF:"
          mask="999.999.999-99"
          value={cpf}
          setValue={setCpf}
          hasError={!!errors.cpf}
          msgError={errors.cpf}
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
      </div>
      <div className="two-fields-in-row">
        <InputEmail
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
      </div>
      <ProfilesMultiSelect
        initialProfiles={accessProfile}
        onGetAccessProfile={setAccessProfile}
        hasError={!!errors.accessProfile}
        messageError={errors.accessProfile}
      />
    </Container>
  )
}
