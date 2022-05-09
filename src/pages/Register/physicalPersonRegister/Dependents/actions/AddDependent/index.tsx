import { useState } from 'react'

import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import { InputEmail } from '@/components/smarts/InputEmail'
import { Select } from '@/components/Form/Select'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { useModal } from '@/hooks/useModal'
import { useMessage } from '@/hooks/useMessage'
import { useLoading } from '@/hooks/useLoading'

import { validateFullName } from '@/helpers/validateFields/validateFullName'
import { validateGender } from '@/helpers/validateFields/validateGender'
import { validatePhone } from '@/helpers/validateFields/validatePhone'
import { validateDepCpf } from '../helpers/validateDepCPF'
import { validateDepBirthDate } from '../helpers/validateDepBirthDate'

import apiPatient from '@/services/apiPatient'
import clearCpf from '@/helpers/clearSpecialCharacters'

import { DependentData } from '../../types'

import { Container } from './styles'

interface AddDependentProps {
  dependents: DependentData[]
  onGetDependents: React.Dispatch<React.SetStateAction<DependentData[]>>
  holderCpf: string
  planAllowMajorAge: boolean
}

export const AddDependent: React.FC<AddDependentProps> = ({
  dependents,
  onGetDependents,
  holderCpf,
  planAllowMajorAge,
}) => {
  const { closeModal } = useModal()
  const [errorMessage, sendErrorMessage] = useMessage()
  const { Loading } = useLoading()

  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [gender, setGender] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const [errors, setErrors] = useState({
    name: '',
    cpf: '',
    birthDate: '',
    gender: '',
    phone: '',
    email: false,
  })

  const isValidData = () =>
    name &&
    email &&
    cpf &&
    birthDate &&
    gender &&
    phone &&
    !Object.values(errors).filter((err) => err).length

  const cpfAlreadyExistsApi = async () => {
    try {
      Loading.turnOn()

      await apiPatient.get(`/paciente/status?cpf=${clearCpf(cpf)}`)
      return true
    } catch ({ response }) {
      if (response.status === 404) return false
    } finally {
      Loading.turnOff()
    }
  }

  const onCancelAddDependent = () => {
    setErrors({
      name: '',
      cpf: '',
      birthDate: '',
      gender: '',
      phone: '',
      email: false,
    })
    closeModal()
  }

  const onSaveNewDependent = async () => {
    if (await cpfAlreadyExistsApi()) {
      return setErrors({
        ...errors,
        cpf: 'Este CPF já está cadastrado na plataforma Rita, por favor verifique os dados e preencha novamente.',
      })
    }

    const newDependent = {
      name,
      email,
      gender,
      birthDate,
      phone,
      cpf,
    }

    onGetDependents((data) => [...data, newDependent])
    closeModal()
  }

  return (
    <Container>
      <h2>Dependente</h2>

      <form>
        <InputText
          label="Nome Completo*:"
          value={name}
          setValue={setName}
          hasError={!!errors.name}
          onBlur={() => setErrors({ ...errors, name: validateFullName(name) })}
          onKeyUp={() => setErrors({ ...errors, name: validateFullName(name) })}
          msgError={errors.name}
          maxLength={100}
          onlyLetter
        />
        <InputMask
          label="CPF*:"
          mask="999.999.999-99"
          value={cpf}
          setValue={setCpf}
          hasError={!!errors.cpf}
          onBlur={() =>
            setErrors({
              ...errors,
              cpf: validateDepCpf(cpf, dependents, holderCpf),
            })
          }
          onKeyUp={() =>
            setErrors({
              ...errors,
              cpf: validateDepCpf(cpf, dependents, holderCpf),
            })
          }
          msgError={errors.cpf}
        />
        <InputMask
          label="Data de Nascimento*:"
          mask="99/99/9999"
          value={birthDate}
          setValue={setBirthDate}
          hasError={!!errors.birthDate}
          onBlur={() =>
            setErrors({
              ...errors,
              birthDate: validateDepBirthDate(birthDate, !planAllowMajorAge),
            })
          }
          onKeyUp={() =>
            setErrors({
              ...errors,
              birthDate: validateDepBirthDate(birthDate, !planAllowMajorAge),
            })
          }
          msgError={errors.birthDate}
        />
        <Select
          label="Gênero*:"
          labelDefaultOption="Selecione"
          options={[
            { label: 'Masculino', value: 'M' },
            { label: 'Feminino', value: 'F' },
            { label: 'Outros', value: 'O' },
          ]}
          setValue={setGender}
          hasError={!!errors.gender}
          onBlur={() =>
            setErrors({ ...errors, gender: validateGender(gender) })
          }
          value={gender}
          onChange={(e) => {
            setGender(e.target.value)
            setErrors({ ...errors, gender: validateGender(e.target.value) })
          }}
          msgError={errors.gender}
        />
        <InputMask
          label="Celular*:"
          mask="(99) 99999-9999"
          value={phone}
          setValue={setPhone}
          hasError={!!errors.phone}
          onBlur={() => setErrors({ ...errors, phone: validatePhone(phone) })}
          onKeyUp={() => setErrors({ ...errors, phone: validatePhone(phone) })}
          msgError={errors.phone}
        />
        <InputEmail
          initialEmail={email}
          onGetEmail={setEmail}
          hasError={(hasError) => setErrors({ ...errors, email: hasError })}
          checkHasError={errorMessage}
          onKeyUp={sendErrorMessage}
          onBlur={sendErrorMessage}
        />
      </form>
      <footer>
        <div>
          <OutlineButton variation="red" onClick={onCancelAddDependent}>
            Cancelar
          </OutlineButton>
        </div>
        <div>
          <ButtonPrimary disabled={!isValidData()} onClick={onSaveNewDependent}>
            Salvar
          </ButtonPrimary>
        </div>
      </footer>
    </Container>
  )
}
