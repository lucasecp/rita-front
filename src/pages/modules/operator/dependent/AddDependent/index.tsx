import React, { useEffect, useState } from 'react'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import Header from './Header'
import apiPatient from '@/services/apiPatient'
import { fromApi } from './adapters'
import { Content } from './styles'
import { useCpfValidate } from './useCpfValidate'
import { useLoading } from '@/hooks/useLoading'
import clearSpecialCaracter from '@/helpers/clear/SpecialCaracteres'
import ButtonPrimary from '@/components/Button/Primary'
import OutlineButton from '@/components/Button/Outline'
import { DataDependentI } from './types/index'
import HolderInfo from './Header/HolderInfo'

const AddDependent: React.FC = () => {
  const [cpf, setCpf] = useState('')
  const [errors, setErrors] = useState('')
  const [dependents, setDependents] = useState<DataDependentI>({
    dependents: [],
    holder: {},
  })
  const { validatorCpf } = useCpfValidate()
  const { Loading } = useLoading()
  const [step, setStep] = useState(1)

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
      setStep(2)
    } catch (error) {
    } finally {
      Loading.turnOff()
    }
  }

  useEffect(() => {
    if (step === 3) {
      getDependents()
    }
  }, [step])

  return (
    <DefaultLayout title="Dependentes - Adicionar Dependentes">
      <Content>
        <Header setCpf={setCpf} cpf={cpf}   />

        <HolderInfo data={dependents.holder}  />

    
        <footer>
          <ButtonPrimary onClick={getDependents}>
            Filtrar Resultados
          </ButtonPrimary>

          <OutlineButton onClick={() => setStep(1)} >
            Cancelar
          </OutlineButton>

          <ButtonPrimary
          
          >
            Associar Dependentes
          </ButtonPrimary>
        </footer>
      </Content>
    </DefaultLayout>
  )
}

export default AddDependent
