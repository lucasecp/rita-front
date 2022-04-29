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

  const [name, setName] = useState(local.name || '')

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
    name: '',
    cpf: '',
  })
  const cpfFormated = clearSpecialCaracter(cpf)

  const arrayQuery = [
    { name: fieldsApi.NOME, value: name },
    { name: fieldsApi.CPF, value: cpfFormated },
    { name: fieldsApi.STATUS, value: formatMultSelectValue(status) },
    {
      name: fieldsApi.ESPECIALIDADES,
      value: formatMultSelectValue(specialtys),
    },
    {
      name: fieldsApi.ORGAO_EMISSOR,
      value: issuingAgency,
    },
    { name: fieldsApi.NUMERO_REGISTRO, value: registerNumber },
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
    setErrors({ name: '', cpf: '' })
    window.localStorage.removeItem('@Rita/specialists-filter')
  }

  const hasErrors = () => {
    let newErrors = false
    setErrors({ name: '', cpf: '' })

    if ((cpfFormated.length < 11 || !validateCpf(cpfFormated)) && cpfFormated) {
      setErrors((errors) => ({
        ...errors,
        cpf: 'CPF inválido.',
      }))
      newErrors = true
    }

    if (name.length < 3 && name) {
      setErrors((errors) => ({ ...errors, name: 'Informe 3 letras ou mais' }))
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
        name,
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
        <MultSelectSpecialtys
          specialtys={specialtys}
          setSpecialtys={setSpecialtys}
        />

        <SelectIssuingAgency
          issuingAgency={issuingAgency}
          setIssuingAgency={setIssuingAgency}
          variation="secondary"
        />

        <InputText
          variation="secondary"
          label="Registro Profissional:"
          value={registerNumber}
          setValue={setRegisterNumber}
          maxLength={40}
        />
        <InputText
          variation="secondary"
          label="Nome:"
          value={name}
          setValue={setName}
          maxLength={200}
          hasError={!!errors.name}
          msgError={errors.name}
        />

        <InputMask
          variation="secondary"
          label="CPF:"
          value={cpf}
          setValue={setCpf}
          mask="999.999.999-99"
          hasError={!!errors.cpf}
          msgError={errors.cpf}
        />

        <CustomMultSelect
          label="Status:"
          options={staticStatus}
          value={status}
          setValue={setStatus}
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
