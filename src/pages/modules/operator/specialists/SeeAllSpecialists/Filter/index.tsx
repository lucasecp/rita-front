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
import clearSpecialCaracter from '@/helpers/clear/SpecialCaracteres'
import useQueryParams from './useQueryParams'
import SelectIssuingAgency from '../Components/SelectIssuingAgencyf'

interface FilterProps {
  setFilters: React.Dispatch<React.SetStateAction<any[]>>
}

const Filter: React.FC<FilterProps> = ({ setFilters }) => {
  const local = useQueryParams()

  const [name, setName] = useState(local.name || '')

  const [cnpj, setCnpj] = useState(local.cnpj || '')
  const [status, setStatus] = useState<MultiSelectOption[]>(local.status || [])
  const [specialtys, setSpecialtys] = useState<MultiSelectOption[]>(
    local.specialtys || [],
  )
  const [specialist, setSpecialist] = useState(local.specialists || '')
  const [district, setDistrict] = useState(local.district || '')
  const [uf, setUf] = useState<MultiSelectOption[]>(local.uf || [])
  const [city, setCity] = useState<MultiSelectOption[]>(local.citys || [])
  const [errors, setErrors] = useState({
    name: '',
    specialist: '',
    district: '',
    cnpj: '',
  })
  const cnpjFormated = clearSpecialCaracter(cnpj)

  useEffect(() => {
    setFilters(verifyTypedFields(arrayQuery))
  }, [])

  const arrayQuery = [
    { name: fieldsApi.NOME_FANTASIA, value: name },
    { name: fieldsApi.CNPJ, value: cnpjFormated },
    { name: fieldsApi.STATUS, value: formatMultSelectValue(status) },
    {
      name: fieldsApi.ESPECIALIDADES,
      value: formatMultSelectValue(specialtys),
    },
    {
      name: fieldsApi.ESPECIALISTAS,
      value: specialist,
    },
    { name: fieldsApi.BAIRRO, value: district },
  ]

  const clearFields = () => {
    setName('')
    setCnpj('')
    setStatus([])
    setSpecialtys([])
    setSpecialist('')
    setDistrict('')
    setUf([])
    setCity([])
    setFilters([])
    setErrors({ name: '', specialist: '', district: '', cnpj: '' })
    window.localStorage.removeItem('@Rita/clinic-filter')
  }

  const hasErrors = () => {
    let newErrors = false
    setErrors({ name: '', specialist: '', district: '', cnpj: '' })

    if (specialist.length < 3 && specialist) {
      setErrors((errors) => ({
        ...errors,
        specialist: 'Informe 3 letras ou mais',
      }))
      newErrors = true
    }
    if (cnpjFormated.length < 3 && cnpjFormated) {
      setErrors((errors) => ({
        ...errors,
        cnpj: 'Informe 3 dígitos ou mais',
      }))
      newErrors = true
    }
    if (district.length < 3 && district) {
      setErrors((errors) => ({
        ...errors,
        district: 'Informe 3 letras ou mais',
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
      '@Rita/clinic-filter',
      JSON.stringify({
        name,
        uf,
        specialtys,
        specialist,
        district,
        city,
        cnpj,
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

        <SelectIssuingAgency  />


        <InputText
          variation="secondary"
          label="Número do Registro:"
          // value={name}
          // setValue={setName}
          maxLength={40}
        />
        <InputText
          variation="secondary"
          label="Nome:"
          // value={name}
          // setValue={setName}
          maxLength={200}
        />

        <InputMask
          variation="secondary"
          label="CPF:"
          // value={cnpj}
          // setValue={setCnpj}
          mask="999.999.999-99"
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
