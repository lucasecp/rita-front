import { Container } from './styles'
import React, { useState, useEffect } from 'react'
import InputMask from '@/components/Form/InputMask'
import DependentInfo from './DependentInfo'
import ButtonPrimary from '@/components/Button/Primary'
import OutlineButton from '@/components/Button/Outline'
import { useModal } from '@/hooks/useModal'
import BelongingOtherHolder from '../messages/BelongingOtherHolder'
import { useCpfValidate } from '../hooks/useCpfValidate'
import clearSpecialCaracter from '@/helpers/clear/SpecialCaracteres'
import { useLoading } from '@/hooks/useLoading'
import apiPatient from '@/services/apiPatient'
import { fromApi } from '../adapters/index'
import { DependentI, HolderI } from '../types/index'
import AlreadyIsAHolder from '../messages/AlreadyIsAHolder'
import { useConnectDependent } from '../hooks/useConnectDependent'
import { useHistory } from 'react-router-dom'
import { OPERATOR_DEPENDENT_MANAGMENT } from '@/routes/constants/namedRoutes/routes'

const Form: React.FC<{ holder: HolderI }> = ({ holder }) => {
  const [cpf, setCpf] = useState('')
  const [error, setError] = useState('')
  const [dependent, setDependent] = useState<DependentI>({})
  const { showMessage } = useModal()
  const { validatorCpf } = useCpfValidate()
  const { connectDependent } = useConnectDependent()
  const { Loading } = useLoading()
  const history = useHistory()

  const cpfCleaned = clearSpecialCaracter(cpf)

  useEffect(() => {
    const getDependentInfo = async () => {
      try {
        Loading.turnOn()
        const { data } = await apiPatient.get(`/paciente/cpf?cpf=${cpf}`)
        setDependent(fromApi(data))
      } catch (error: any) {
        if (error?.response?.status === 404) {
          setDependent({})
          setError('CPF não localizado.')
        }
      } finally {
        Loading.turnOff()
      }
    }

    if (cpfCleaned.length === 11 && !error) {
      getDependentInfo()
    }
  }, [cpf, error])

  const onSubmit = async () => {
    if (dependent.isAHolder) {
      return showMessage(AlreadyIsAHolder)
    }
    if (dependent.holder?.name) {
      return showMessage(BelongingOtherHolder, {
        holder,
        dependent,
      })
    }
    connectDependent({ id: holder.id, cpf: holder.cpf }, dependent.id)
  }

  return (
    <Container>
      <h2>Dados do Dependente</h2>
      <InputMask
        mask="999.999.999-99"
        label="CPF do Dependente:"
        value={cpf}
        setValue={setCpf}
        hasError={!!error}
        msgError={error}
        onKeyUp={() => setError(validatorCpf(cpf))}
      />
      <DependentInfo data={dependent} />

      <footer>
        <OutlineButton
          onClick={() => history.push(OPERATOR_DEPENDENT_MANAGMENT)}
        >
          Cancelar
        </OutlineButton>

        <ButtonPrimary onClick={onSubmit} disabled={!!error || !cpfCleaned}>
          Associar Dependente
        </ButtonPrimary>
      </footer>
    </Container>
  )
}

export default Form
