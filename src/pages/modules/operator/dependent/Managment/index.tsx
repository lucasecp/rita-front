import React, { useEffect, useState } from 'react'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import Header from './Header'
import apiPatient from '@/services/apiPatient'
import { fromApi } from './adapters'
import Results from './Results'
import { Content } from './styles'
import { useCpfValidate } from './useCpfValidate'
import { useLoading } from '@/hooks/useLoading'
import clearSpecialCaracter from '@/helpers/clear/SpecialCaracteres'

const Managment: React.FC = () => {
  const [cpf, setCpf] = useState('')
  const [errors, setErrors] = useState('')
  const [dependents, setDependents] = useState<any[]>([])
  const { validatorCpf } = useCpfValidate()
  const { Loading } = useLoading()
  const [steps, setSteps] = useState(1);

  useEffect(() => {
    document.title = 'Rita Saúde | Informações da Clínica'
  }, [])

  const getDependents = async () => {
    const error = await validatorCpf(cpf)
    
    if (error) {
      return setErrors(error)
    }

    try {
      Loading.turnOn()
      const { data } = await apiPatient.get(
        `/paciente/?cpf=${clearSpecialCaracter(cpf)}`,
      )
      setDependents(fromApi(data.dependentes))
    } catch (error) {
    } finally {
      Loading.turnOff()
    }
  }

  return (
    <DefaultLayout title="Dependentes">
      <Content>
        <Header
          setCpf={setCpf}
          cpf={cpf}
          errors={errors}
          setErrors={setErrors}
        />
        <Results dependents={dependents} />
        <footer></footer>
      </Content>
    </DefaultLayout>
  )
}

export default Managment
