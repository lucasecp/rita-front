import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import InputText from '@/components/Form/InputText'
import React, { useEffect, useState } from 'react'
import { BtnGroup, Container } from './styles'
import { verifyTypedFields } from '../helpers/verifyTypedFields'
import { fieldsApi } from '../static/fieldsApi'
import useQueryParams from './useQueryParams'
import { Select } from '@/components/Form/Select'


interface FilterProps {
  setFilters: React.Dispatch<React.SetStateAction<any[]>>
}

const Filter: React.FC<FilterProps> = ({ setFilters }) => {
  const local = useQueryParams()

  const [status, setStatus] = useState(local.status || '')
  const [issuingAgency, setIssuingAgency] = useState(local.issuingAgency || '')
  const [specialist, setSpecialist] = useState(local.specialist || '')
  const [errors, setErrors] = useState({
    type: '',
  })

  useEffect(() => {
    setFilters(verifyTypedFields(arrayQuery))
  }, [])

  const arrayQuery = [
    {
      name: fieldsApi.ORGAOEMISSOR,
      value: issuingAgency,
    },
    {
      name: fieldsApi.ESPECIALISTA,
      value: specialist,
    },
    {
      name: fieldsApi.STATUS,
      value: status,
    },
  ]

  const clearFields = () => {
    setIssuingAgency('')
    setSpecialist('')
    setStatus('')
    setFilters([])
    setErrors({ type: '' })
    window.localStorage.removeItem('@Rita/specialtys-types-filter')
  }

  const hasErrors = () => {
    let newErrors = false
    setErrors({ type: '' })

    if (issuingAgency.length < 3 && issuingAgency) {
      setErrors({ type: 'Informe 3 letras ou mais' })
      newErrors = true
    }
    return newErrors
  }

  const onFilter = () => {
    if (hasErrors()) {
      return
    }
    window.localStorage.setItem(
      '@Rita/specialtys-types-filter',
      JSON.stringify({
        issuingAgency,
        specialist,
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
          label="Órgão Emissor:"
          value={issuingAgency}
          setValue={setIssuingAgency}
          maxLength={20}
        />

        <InputText
          variation="secondary"
          label="Especialista:"
          value={specialist}
          setValue={setSpecialist}
          maxLength={20}
          // onlyLetter
          hasError={!!errors.type}
          msgError={errors.type}
        />
        <Select
          variation="secondary"
          labelDefaultOption="Selecione"
          label="Status:"
          value={status}
          setValue={setStatus}
          options={[
            { label: 'Ativo', value: 'A' },
            { label: 'Inativo', value: 'I'},
          ]}
          hasError={!!errors.type}
          msgError={errors.type}
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