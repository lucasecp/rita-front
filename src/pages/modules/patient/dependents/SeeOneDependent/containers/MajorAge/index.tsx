import React, { useEffect, useState } from 'react'
import { fromApi } from './adapters'
import { useLoading } from '@/hooks/useLoading'
import apiPatient from '@/services/apiPatient'
import { useHistory } from 'react-router-dom'
import {
  PATIENT_DEPENDENTS,
  PATIENT_EDIT_DEPENDENT,
} from '@/routes/constants/namedRoutes/routes'
import { Container, ButtonGroup } from './styles'
import ButtonLink from '@/components/Button/Link'
import OutlineButton from '@/components/Button/Outline'
import { DependentAddress } from './components/DependentAddress'
import { DependentData } from './components/DependentData'
import { DependentDocuments } from './components/DependentDocuments'
import { DependentSituation } from './components/DependentSituation'
import { useModal } from '@/hooks/useModal'
import { PendingWarning } from './messages/PendingWarning'
// import { BlockingWarning } from './messages/BlockingWarning'

import { DependentResponseApi, DependentDataType } from './types'

interface MajorAgeProps {
  dependentData: {
    id: number
    birthdate: string
    cpf: string
  }
}

export const MajorAge: React.FC<MajorAgeProps> = ({ dependentData }) => {
  const { Loading } = useLoading()
  const { showMessage } = useModal()
  const history = useHistory()

  const dependentId = dependentData.id

  const [dependent, setDependent] = useState({} as DependentDataType)

  useEffect(() => {
    if (!dependentId) {
      return history.push(PATIENT_DEPENDENTS)
    }

    document.title = 'Rita Saúde | Dependentes'

    const getDependent = async () => {
      try {
        Loading.turnOn()
        const response = await apiPatient.get<DependentResponseApi>(
          `/paciente/dependente?id=${dependentId}`,
        )

        const dependentFromApi = fromApi(response.data)

        setDependent(dependentFromApi)
      } catch {
      } finally {
        Loading.turnOff()
      }
    }
    getDependent()
  }, [])

  const onBackToListDependents = () => {
    history.push(PATIENT_DEPENDENTS)
  }

  const onEditPatient = () => {
    if (dependent.personalDatas.status === 'PENDING') {
      return showMessage(PendingWarning)
    }
    // if (dependent.personalDatas.status === 'BLOCKED') {
    //   return showMessage(BlockingWarning)
    // }

    history.push(PATIENT_EDIT_DEPENDENT, {
      dependent,
      dependentId,
    })
  }

  return (
    <Container>
      <DependentData personalDatas={dependent.personalDatas} />
      <DependentAddress address={dependent.address} />
      <DependentDocuments
        incomeValue={dependent.personalDatas?.income}
        dependentId={dependentId}
      />
      <DependentSituation situation={dependent.situation} />

      <ButtonGroup>
        <ButtonLink onClick={onBackToListDependents}>Voltar</ButtonLink>
        <OutlineButton onClick={onEditPatient}>Editar</OutlineButton>
      </ButtonGroup>
    </Container>
  )
}
