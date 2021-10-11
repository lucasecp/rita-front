import React, { useEffect, useState } from 'react'
import SelectComponent from '@/components/Form/Select'
import { useLoading } from '@/context/useLoading'
import apiUser from '@/services/apiUser'

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
      return { label: formatName(validator.nome), value: validator.idUsuario }
    })
  }
  const formatName = (value) => {
    const names = String(value).split(' ')
    const newName = names[0] + ' ' + names[names.length - 1]
    return newName.toLowerCase().replace(/\b(\w)/g, x => x.toUpperCase())
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
