import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import InputText from '@/components/Form/InputText'
import React, { useEffect, useState } from 'react'
import { BtnGroup, Container } from './styles'
import { verifyTypedFields } from '../helpers/verifyTypedFields'
import { fieldsApi } from '../static/fieldsApi'
import useQueryParams from './useQueryParams'

interface FilterProps {
  setFilters: React.Dispatch<React.SetStateAction<any[]>>
}

const Filter: React.FC<FilterProps> = ({ setFilters }) => {
  const local = useQueryParams()

  const [type, setType] = useState(local.type || '')
  const [code, setCode] = useState(local.code || '')
  const [errors, setErrors] = useState({
    type: '',
  })

  useEffect(() => {
    setFilters(verifyTypedFields(arrayQuery))
  }, [])

  const arrayQuery = [
    {
      name: fieldsApi.CODIGO,
      value: code,
    },
    {
      name: fieldsApi.TIPO,
      value: type,
    },
  ]

  const clearFields = () => {
    setType('')
    setCode('')
    setFilters([])
    setErrors({ type: '' })
    window.localStorage.removeItem('@Rita/specialtys-types-filter')
  }

  const hasErrors = () => {
    let newErrors = false
    setErrors({ type: '' })

    if (type.length < 3 && type) {
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
        type,
        code,
      }),
    )
    setFilters(verifyTypedFields(arrayQuery))
  }

  return (
    <Container>
      <div>
        <InputText
          variation="secondary"
          label="Código:"
          value={code}
          setValue={setCode}
          maxLength={20}
        />

        <InputText
          variation="secondary"
          label="Tipo de Especialidade:"
          value={type}
          setValue={setType}
          maxLength={200}
          // onlyLetter
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
