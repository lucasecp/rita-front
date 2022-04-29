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
  const [nome, setNome] = useState(local.nome || '')
  const [errors, setErrors] = useState({ nome: '' })

  useEffect(() => {
    setFilters(verifyTypedFields(arrayQuery))
  }, [])

  const arrayQuery = [
    { nome: fieldsApi.NOME, value: nome }
  ]

  const clearFields = () => {
    setNome('')
    setFilters([])
    setErrors({ nome: '' })
    window.localStorage.removeItem('@Rita/clinic-users-filter')
  }

  const hasErrors = () => {
    let newErrors = false
    setErrors({ nome: '' })
    if (nome.length < 3) {
      setErrors((errors) => ({ ...errors, nome: 'Informe 3 letras ou mais' }))
      newErrors = true
    }
    return newErrors
  }

  const onFilter = () => {
    if (hasErrors()) {
      return
    }
    window.localStorage.setItem('@Rita/clinic-users-filter', JSON.stringify({ nome }))
    setFilters(verifyTypedFields(arrayQuery))
  }

  return (
    <Container>
      <div>
        <InputText
          variation="secondary"
          label="Nome:"
          value={nome}
          setValue={setNome}
          maxLength={100}
          hasError={!!errors.nome}
          msgError={errors.nome}
        />
      <BtnGroup>
        <OutlineButton small onClick={() => clearFields()}>
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
