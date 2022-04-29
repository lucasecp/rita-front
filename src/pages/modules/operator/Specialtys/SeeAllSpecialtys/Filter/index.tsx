import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import InputText from '@/components/Form/InputText'
import React, { useEffect, useState } from 'react'
import { BtnGroup, Container } from './styles'
import { verifyTypedFields } from '../../SeeAllSpecialtys/helpers/verifyTypedFields'
import { fieldsApi } from '../../SeeAllSpecialtys/static/fieldsApi'
import useQueryParams from './useQueryParams'
import { Select } from '@/components/Form/Select'

interface FilterProps {
  setFilters: React.Dispatch<React.SetStateAction<any[]>>
}

const Filter: React.FC<FilterProps> = ({ setFilters }) => {
  const local = useQueryParams()

  const [name, setName] = useState(local.name || '')
  const [code, setCode] = useState(local.code || '')
  const [subscriptionRequired, setSubscriptionRequired] = useState(
    local.subscriptionRequired || '',
  )
  const [errors, setErrors] = useState({
    name: '',
  })

  const arrayQuery = [
    { name: fieldsApi.DESCRICAO, value: name },
    {
      name: fieldsApi.CODIGO,
      value: code,
    },
    {
      name: fieldsApi.REQUER_INSCRICAO,
      value: subscriptionRequired,
    },
  ]

  useEffect(() => {
    setFilters(verifyTypedFields(arrayQuery))
  }, [])

  const clearFields = () => {
    setName('')
    setCode('')
    setSubscriptionRequired('')
    setFilters([])
    setErrors({ name: '' })
    window.localStorage.removeItem('@Rita/specialty-filter')
  }

  const hasErrors = () => {
    let newErrors = false
    setErrors({ name: '' })

    if (name.length < 3 && name) {
      setErrors((errors) => ({
        ...errors,
        name: 'Informe 3 caracteres ou mais',
      }))
      newErrors = true
    }
    return newErrors
  }

  const onFilter = () => {
    if (hasErrors()) {
      return
    }
    window.localStorage.setItem(
      '@Rita/specialty-filter',
      JSON.stringify({
        name,
        code,
        subscriptionRequired,
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
          label="Especialidade:"
          value={name}
          setValue={setName}
          maxLength={200}
          // onlyLetter
          hasError={!!errors.name}
          msgError={errors.name}
        />

        <Select
          variation="secondary"
          labelDefaultOption="Selecione"
          label="Requer Inscrição:"
          value={subscriptionRequired}
          setValue={setSubscriptionRequired}
          options={[
            { label: 'Sim', value: 1 },
            { label: 'Não', value: 0 },
          ]}
        />
        <BtnGroup>
          <OutlineButton small variation="red" onClick={() => clearFields()}>
            Limpar Filtro
          </OutlineButton>
          <ButtonPrimary medium onClick={onFilter}>
            Filtrar Resultados
          </ButtonPrimary>
        </BtnGroup>
      </div>
    </Container>
  )
}

export default Filter
