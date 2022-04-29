import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import InputText from '@/components/Form/InputText'
import CustomMultSelect, {
  MultiSelectOption,
} from '@/components/Form/MultSelect'
import React, { useEffect, useState } from 'react'
import MultSelectCity from '../Components/MultSelectCity'
import MultSelectSpecialtys from '../Components/MultSelectSpecialtys'
import MultSelectUf from '../Components/MultSelectUf'
import { staticStatus } from '../static/fieldsMultSelect'
import { BtnGroup, Container } from './styles'
import formatMultSelectValue from '@/helpers/formatMultSelectValue'
import { verifyTypedFields } from '../helpers/verifyTypedFields'
import InputMask from '@/components/Form/InputMask'
import { fieldsApi } from '../static/fieldsApi'
import clearSpecialCaracter from '@/helpers/clearSpecialCharacters'
import useQueryParams from './useQueryParams'

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
    { name: fieldsApi.UF, value: formatMultSelectValue(uf) },
    { name: fieldsApi.CIDADES, value: formatMultSelectValue(city) },
  ]

  useEffect(() => {
    setFilters(verifyTypedFields(arrayQuery))
  }, [])

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
        <InputText
          variation="secondary"
          label="Nome Fantasia:"
          value={name}
          setValue={setName}
          maxLength={100}
          hasError={!!errors.name}
          msgError={errors.name}
        />

        <InputMask
          variation="secondary"
          label="CNPJ:"
          value={cnpj}
          setValue={setCnpj}
          mask="99.999.999/9999-99"
          hasError={!!errors.cnpj}
          msgError={errors.cnpj}
        />

        <CustomMultSelect
          label="Status:"
          options={staticStatus}
          value={status}
          setValue={setStatus}
        />

        <MultSelectSpecialtys
          specialtys={specialtys}
          setSpecialtys={setSpecialtys}
        />

        <InputText
          variation="secondary"
          label="Especialista:"
          value={specialist}
          setValue={setSpecialist}
          maxLength={100}
          onlyLetter
          hasError={!!errors.specialist}
          msgError={errors.specialist}
        />

        <MultSelectUf uf={uf} setUf={setUf} />

        <MultSelectCity city={city} setCity={setCity} uf={uf} />

        <InputText
          variation="secondary"
          label="Bairro:"
          value={district}
          setValue={setDistrict}
          maxLength={100}
          hasError={!!errors.district}
          msgError={errors.district}
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
