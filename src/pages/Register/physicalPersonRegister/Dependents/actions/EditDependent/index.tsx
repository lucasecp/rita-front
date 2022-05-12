import { useEffect, useState } from 'react'

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

import formatBirthdate from '@/helpers/formatDate'

import { UpgradePlanAge } from '../../messages/UpgradePlanAge'

import apiPatient from '@/services/apiPatient'
import clearCpf from '@/helpers/clearSpecialCharacters'

import { DependentData } from '../../types'

import { Container } from './styles'

interface EditDependentProps {
  id: number
  dependentData: DependentData
  dependents: DependentData[]
  onGetDependents: React.Dispatch<React.SetStateAction<DependentData[]>>
  holderCpf: string
  planAllowMajorAge: boolean
}

export const EditDependent: React.FC<EditDependentProps> = ({
  id,
  dependentData,
  dependents,
  onGetDependents,
  holderCpf,
  planAllowMajorAge,
}) => {
  const { closeModal, showMessage } = useModal()
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

  const getDependentData = () => {
    setName(dependentData.name || '')
    setEmail(dependentData.email || '')
    setGender(dependentData.gender || '')
    setBirthDate(formatBirthdate(dependentData.birthDate) || '')
    setPhone(dependentData.phone || '')
    setCpf(dependentData.cpf || '')
  }

  useEffect(() => {
    getDependentData()
  }, [dependentData])

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

  const onCancelEditDependent = () => {
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

  const onUpdateDependent = async () => {
    if (await cpfAlreadyExistsApi()) {
      return setErrors({
        ...errors,
        cpf: 'Este CPF já está cadastrado na plataforma Rita, por favor verifique os dados e preencha novamente.',
      })
    }

    const dataBaseForm = {
      name,
      email,
      gender,
      birthDate,
      phone,
      cpf,
    }

    const dependentUpdated = dependents.map((dependent, index) => {
      if (index === id) {
        dependent = dataBaseForm
      }

      return dependent
    })

    onGetDependents(dependentUpdated)
    closeModal()
  }

  const validateDependentBirthdate = () => {
    const error = validateDepBirthDate(birthDate, !planAllowMajorAge)

    if (error === 'Seu plano só aceita dependentes menores de idade') {
      showMessage(UpgradePlanAge)
      return
    }

    setErrors({
      ...errors,
      birthDate: validateDepBirthDate(birthDate, !planAllowMajorAge),
    })
  }

  return (
    <Container>
      <h2 data-test="dependentEditTitle">Dependente</h2>

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
          data-test="dependentNameField"
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
          data-test="dependentCpfField"
        />
        <InputMask
          label="Data de Nascimento*:"
          mask="99/99/9999"
          value={birthDate}
          setValue={setBirthDate}
          hasError={!!errors.birthDate}
          onBlur={validateDependentBirthdate}
          onKeyUp={validateDependentBirthdate}
          msgError={errors.birthDate}
          data-test="dependentBirthdateField"
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
          data-test="dependentGenderField"
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
          data-test="dependentPhoneField"
        />
        <InputEmail
          initialEmail={email}
          onGetEmail={setEmail}
          hasError={(hasError) => setErrors({ ...errors, email: hasError })}
          checkHasError={errorMessage}
          onKeyUp={sendErrorMessage}
          onBlur={sendErrorMessage}
          data-test="dependentEmailField"
        />
      </form>
      <footer>
        <div>
          <OutlineButton
            variation="red"
            onClick={onCancelEditDependent}
            data-test="dependentCancelEditButton"
          >
            Cancelar
          </OutlineButton>
        </div>
        <div>
          <ButtonPrimary
            disabled={!isValidData()}
            onClick={onUpdateDependent}
            data-test="dependentUpdateButton"
          >
            Atualizar
          </ButtonPrimary>
        </div>
      </footer>
    </Container>
  )
}
