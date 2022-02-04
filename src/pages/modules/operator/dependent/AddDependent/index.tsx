import React, { useEffect, useState } from 'react'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import Header from './Header'
import apiPatient from '@/services/apiPatient'
import { fromApi } from './adapters'
import { Content } from './styles'
import { useCpfValidate } from './useCpfValidate'
import { useLoading } from '@/hooks/useLoading'
import clearSpecialCaracter from '@/helpers/clear/SpecialCaracteres'
import { DataDependentI } from './types/index'
import Form from './Form';

const AddDependent: React.FC = () => {
  const [cpf, setCpf] = useState('')
  const [errors, setErrors] = useState('')
  const [dependents, setDependents] = useState<DataDependentI>({
    dependents: [],
    holder: {},
  })
  const { validatorCpf } = useCpfValidate()
  const { Loading } = useLoading()

  useEffect(() => {
    document.title = 'Rita Saúde | Informações da Clínica'
  }, [])

  const getDependents = async () => {
    const error = await validatorCpf(cpf)

    if (error) {
      return setErrors(error)
    }
    setErrors('')

    try {
      Loading.turnOn()
      const { data } = await apiPatient.get(
        `/paciente/cpf?cpf=${clearSpecialCaracter(cpf)}`,
      )
      setDependents(fromApi(data))
    } catch (error) {
    } finally {
      Loading.turnOff()
    }
  }
  

  return (
    <DefaultLayout title="Dependentes - Adicionar Dependentes">
      <Content>
        <Header />
        <Form/>
      </Content>
    </DefaultLayout>
  )
}

export default AddDependent
