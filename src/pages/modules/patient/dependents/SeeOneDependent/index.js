import React, { useEffect, useState } from 'react'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { fromApi } from './adapters'
import { useLoading } from '@/hooks/useLoading'
import apiPatient from '@/services/apiPatient'
import { useHistory, useLocation } from 'react-router-dom'
import {
  PATIENT_DEPENDENTS,
  PATIENT_EDIT_DEPENDENT,
} from '@/routes/constants/namedRoutes/routes'
import { Container, ButtonGroup } from './styles'
import ButtonLink from '@/components/Button/Link'
import OutlineButton from '@/components/Button/Outline'
import { DependentAddress } from './components/DependentAddress'
import { DependentData } from './components/DependentData'
import { Documents } from './components/Documents'
import { Situation } from './components/Situation'
import { useModal } from '@/hooks/useModal'
import { PendingWarning } from './messages/PendingWarning'
// import { BlockingWarning } from './messages/BlockingWarning'

const SeeDependents = () => {
  const [dependent, setDependent] = useState({})
  const { Loading } = useLoading()
  const location = useLocation()
  const id = location.state.idDependent
  const history = useHistory()
  const { showMessage } = useModal()

  const [dependentDocument, setDependentDocument] = useState('')
  const [dependentDocumentName, setDependentDocumentName] = useState('')

  useEffect(() => {
    if (!location.state) {
      return history.push(PATIENT_DEPENDENTS)
    }

    document.title = 'Rita Saúde | Dependentes'

    const getDependents = async () => {
      try {
        Loading.turnOn()
        const { data } = await apiPatient.get(
          `/paciente/dependente?id=${location.state.idDependent}`,
        )

        if (data.documentosCadastrados.length > 0) {
          setDependentDocumentName(
            data.documentosCadastrados[data.documentosCadastrados.length - 1]
              .nomeOriginal,
          )
        }

        setDependent(fromApi(data))
      } catch (error) {
        console.log(error)
      } finally {
        Loading.turnOff()
      }
    }
    getDependents()
  }, [])

  useEffect(() => {
    const getDependentIncomeDocument = async () => {
      try {
        const response = await apiPatient.get(
          `/paciente/${id}/documento?tipoDocumento=Renda`,
          { responseType: 'arraybuffer' },
        )
        setDependentDocument(response)
      } catch (error) {
        console.log(error)
      }
    }
    getDependentIncomeDocument()
  }, [])

  console.log(dependent?.personalDatas)

  const onEditPatient = () => {
    if (dependent.personalDatas.status === 'PENDING') {
      return showMessage(PendingWarning)
    }
    // if (dependent.personalDatas.status === 'BLOCKED') {
    //   return showMessage(BlockingWarning)
    // }

    history.push(PATIENT_EDIT_DEPENDENT, {
      dependent,
      id,
      dependentDocumentName,
    })
  }

  return (
    <DefaultLayout title="Visualizar informações de dependente">
      <Container>
        <DependentData personalDatas={dependent.personalDatas} />
        <DependentAddress address={dependent.address} />
        <Documents
          data={dependent.personalDatas}
          dependentDocument={dependentDocument}
          dependentDocumentName={dependentDocumentName}
        />
        <Situation data={dependent.personalDatas} />

        <ButtonGroup>
          <ButtonLink onClick={() => history.push(PATIENT_DEPENDENTS)}>
            Voltar
          </ButtonLink>
          <OutlineButton onClick={onEditPatient}>Editar</OutlineButton>
        </ButtonGroup>
      </Container>
    </DefaultLayout>
  )
}

export default SeeDependents
