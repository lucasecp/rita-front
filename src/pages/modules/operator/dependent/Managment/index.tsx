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
import ButtonPrimary from '@/components/Button/Primary'
import OutlineButton from '@/components/Button/Outline'
import { DataDependentI } from './types/index'
import HolderInfo from './Header/HolderInfo'
import { useHistory, useLocation } from 'react-router-dom'
import { OPERATOR_ADD_DEPENDENT } from '@/routes/constants/namedRoutes/routes'

const Managment: React.FC = () => {
  const [cpf, setCpf] = useState('')
  const [errors, setErrors] = useState('')
  const [dependents, setDependents] = useState<DataDependentI>({
    dependents: [],
    holder: {},
  })
  const { validatorCpf } = useCpfValidate()
  const { Loading } = useLoading()
  const [step, setStep] = useState(1)
  const history = useHistory()
  const location = useLocation()
  const cpfFromOtherPage = location.state?.cpf

  const getDependents = async () => {
    try {
      Loading.turnOn()
      const { data } = await apiPatient.get(
        `/paciente/cpf?cpf=${clearSpecialCaracter(cpfFromOtherPage || cpf)}`,
      )
      setDependents(fromApi(data))
      setStep(2)
    } catch (error) {
    } finally {
      Loading.turnOff()
    }
  }

  const onAddDependent = async () => {
    const error = await validatorCpf(cpf)

    if (error) {
      return setErrors(error)
    }
    setErrors('')
    getDependents()
  }

  useEffect(() => {
    document.title = 'Rita Saúde | Informações da Clínica'
    if (cpfFromOtherPage) {
      setStep(2)
      getDependents()
    }
  }, [cpfFromOtherPage])

  useEffect(() => {
    if (step === 3) {
      getDependents()
    }
  }, [step])

  return (
    <DefaultLayout title="Gestão de Dependentes">
      <HolderInfo data={dependents.holder} hidden={step !== 2} />
      <Content>
        <Header setCpf={setCpf} cpf={cpf} errors={errors} hidden={step !== 1} />

        <Results
          setStep={setStep}
          dependents={dependents}
          hidden={step !== 2}
        />

        <footer>
          <ButtonPrimary onClick={onAddDependent} hidden={step !== 1}>
            Filtrar Resultados
          </ButtonPrimary>

          <OutlineButton onClick={() => setStep(1)} hidden={step !== 2}>
            Voltar
          </OutlineButton>

          <ButtonPrimary
            hidden={step !== 2}
            onClick={() =>
              history.push(OPERATOR_ADD_DEPENDENT, {
                holder: dependents.holder,
              })
            }
          >
            Adicionar Dependentes
          </ButtonPrimary>
        </footer>
      </Content>
    </DefaultLayout>
  )
}

export default Managment
