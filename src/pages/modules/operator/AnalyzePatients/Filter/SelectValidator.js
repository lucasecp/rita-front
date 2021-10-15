import React, { useEffect, useState } from 'react'
import SelectComponent from '@/components/Form/Select'
import { useLoading } from '@/context/useLoading'
import apiUser from '@/services/apiUser'
import formatFistLastName from '@/helpers/formatFistLastName'

const SelectValidator = ({setValidator,validator}) => {
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
      return { label: formatFistLastName(validator.nome), value: validator.idUsuario }
    })
  }


  return (
    <SelectComponent
      variation="secondary"
      labelDefaultOption="Todos"
      label="Validador:"
      setValue={setValidator}
      value={validator}
      options={formatObjectApi()}
    />
  )
}

SelectValidator.propTypes = {}

export default SelectValidator
