import React, { useEffect, useState } from 'react'
import { Select } from '@/components/Form/Select'
import { useLoading } from '@/hooks/useLoading'
import apiUser from '@/services/apiUser'
import formatFirstLastName from '@/helpers/formatFirstLastName'

const SelectValidator = ({ setValidator, validator }) => {
  const [validators, setValidators] = useState([])
  const { Loading } = useLoading()

  useEffect(() => {
    const getValidators = async () => {
      try {
        Loading.turnOn()
        const { data } = await apiUser.get('/validador')
        setValidators(data)
      } catch ({ response }) {
      } finally {
        Loading.turnOff()
      }
    }
    getValidators()
  }, [])

  const formatObjectApi = () => {
    return validators.map((validator) => {
      return {
        label: formatFirstLastName(validator.nome),
        value: validator.idUsuario,
      }
    })
  }

  return (
    <Select
      variation="secondary"
      labelDefaultOption="Selecione"
      label="Validador:"
      setValue={setValidator}
      value={validator}
      options={[{ label: 'Todos', value: 'ALL' }, ...formatObjectApi()]}
    />
  )
}

SelectValidator.propTypes = {}

export default SelectValidator
