import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import InputText from '@/components/Form/InputText'
import CustomMultSelect, {
  MultiSelectOption,
} from '@/components/Form/MultSelect'
import React, { useEffect, useState } from 'react'
import MultSelectSpecialtys from '../Components/MultSelectSpecialtys'
import { staticStatus } from '../static/fieldsMultSelect'
import { BtnGroup, Container } from './styles'
import formatMultSelectValue from '@/helpers/formatMultSelectValue'
import { verifyTypedFields } from '../helpers/verifyTypedFields'
import InputMask from '@/components/Form/InputMask'
import { fieldsApi } from '../static/fieldsApi'
import clearSpecialCaracter from '@/helpers/clearSpecialCharacters'
import useQueryParams from './useQueryParams'
import validateCpf from '@/helpers/validateCpf'
import SelectIssuingAgency from '@/components/smarts/SelectIssuingAgency/SelectIssuingAgency'

interface FilterProps {
  setFilters: React.Dispatch<React.SetStateAction<any[]>>
}

const Filter: React.FC<FilterProps> = ({ setFilters }) => {
  const local = useQueryParams()

  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')

  const [specialist, setName] = useState(local.specialist || '')
  const [cpf, setCpf] = useState(local.cpf || '')
  const [status, setStatus] = useState<MultiSelectOption[]>(local.status || [])
  const [specialtys, setSpecialtys] = useState<MultiSelectOption[]>(
    local.specialtys || [],
  )
  const [issuingAgency, setIssuingAgency] = useState(local.issuingAgency || '')
  const [registerNumber, setRegisterNumber] = useState(
    local.registerNumber || '',
  )
  const [errors, setErrors] = useState({
    specialist: '',
    cpf: '',
    startTime: '',
    endTime: ''
  })
  const cpfFormated = clearSpecialCaracter(cpf)

  const arrayQuery = [
    { specialist: fieldsApi.NOME, value: specialist },
    { specialist: fieldsApi.CPF, value: cpfFormated },
    { specialist: fieldsApi.STATUS, value: formatMultSelectValue(status) },
    {
      specialist: fieldsApi.ESPECIALIDADES,
      value: formatMultSelectValue(specialtys),
    },
    {
      specialist: fieldsApi.ORGAO_EMISSOR,
      value: issuingAgency,
    },
    { specialist: fieldsApi.NUMERO_REGISTRO, value: registerNumber },
  ]

  useEffect(() => {
    setFilters(verifyTypedFields(arrayQuery))
  }, [])

  const clearFields = () => {
    setName('')
    setCpf('')
    setStatus([])
    setSpecialtys([])
    setIssuingAgency('')
    setRegisterNumber('')
    setFilters([])
    setErrors({ specialist: '', cpf: '' })
    window.localStorage.removeItem('@Rita/specialists-filter')
  }

  const hasErrors = () => {
    let newErrors = false
    setErrors({ specialist: '', cpf: '' })

    if ((cpfFormated.length < 11 || !validateCpf(cpfFormated)) && cpfFormated) {
      setErrors((errors) => ({
        ...errors,
        cpf: 'CPF inválido.',
      }))
      newErrors = true
    }

    if (specialist.length < 3 && specialist) {
      setErrors((errors) => ({ ...errors, specialist: 'Informe 3 letras ou mais' }))
      newErrors = true
    }
    return newErrors
  }

  const onFilter = () => {
    if (hasErrors()) {
      return
    }
    window.localStorage.setItem(
      '@Rita/specialists-filter',
      JSON.stringify({
        specialist,
        specialtys,
        issuingAgency,
        registerNumber,
        cpf,
        status,
      }),
    )
    setFilters(verifyTypedFields(arrayQuery))
  }

  return (
    <Container>
      <div>
        <InputText
          variation="secondary"
          label="Especialista:"
          value={specialist}
          setValue={setRegisterNumber}
          maxLength={40}
        />
        <InputText
          variation="secondary"
          label="Paciente:"
          value={specialist}
          setValue={setName}
          maxLength={200}
          hasError={!!errors.specialist}
          msgError={errors.specialist}
        />
      </div>
      <div>
      <InputMask
          mask="99:99"
          label="Hora Início:"
          value={startTime}
          setValue={setStartTime}
          specialist="startTime"
          hasError={!!errors.startTime}
          msgError={errors.startTime}
          variation="secondary"
          placeholder="00:00"
        />

        <InputMask
          mask="99:99"
          label="Hora Fim:"
          value={endTime}
          setValue={setEndTime}
          specialist="endTime"
          hasError={!!errors.endTime}
          msgError={errors.endTime}
          variation="secondary"
          placeholder="00:00"
        />
      </div>

      <BtnGroup>
        <OutlineButton small variation="red" onClick={() => clearFields()}>
          Limpar Filtro
        </OutlineButton>
        <ButtonPrimary medium onClick={onFilter}>
          Filtrar Resultados
        </ButtonPrimary>
      </BtnGroup>
    </Container>
  )
}

export default Filter
