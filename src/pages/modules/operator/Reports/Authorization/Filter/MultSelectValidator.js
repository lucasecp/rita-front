import React, { useEffect, useState } from 'react'
import { useLoading } from '@/hooks/useLoading'
import apiUser from '@/services/apiUser'
import formatFistLastName from '@/helpers/formatFistLastName'
import CustomMultSelect from '@/components/Form/MultSelect'

const MultSelectValidator = ({setValidators,validators}) => {
  const { Loading } = useLoading()
  const [valueApi, setValueApi] = useState([]);

  useEffect(() => {
    const getValidators = async () => {
      try {
        Loading.turnOn()
        const { data } = await apiUser.get('/validador')
        setValueApi(data)
      } catch ({ response }) {
      } finally {
        Loading.turnOff()
      }
    }
    getValidators()
  }, [])

  const formatValidators = () => {
   return valueApi.map((validator) => {
      return { name: formatFistLastName(validator.nome), id: validator.idUsuario }
    })
  }


  return (
    <CustomMultSelect
      label="Validador:"
      options={[{ name: 'Todos', id: 'All'},...formatValidators()]}
      setValue={setValidators}
      value={validators}
    />
  )
}


export default MultSelectValidator
