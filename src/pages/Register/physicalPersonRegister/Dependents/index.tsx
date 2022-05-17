import { useEffect, useState } from 'react'

import { RegisterLayout } from '@/components/Layout/RegisterLayout'
import ButtonPrimary from '@/components/Button/Primary'
import OutlineButton from '@/components/Button/Outline'
import ButtonLink from '@/components/Button/Link'

import { AddDependent } from './actions/AddDependent'
import { EditDependent } from './actions/EditDependent'
import { UpgradePlanQuantity } from './messages/UpgradePlanQuantity'

import { useHistory } from 'react-router-dom'
import { useModal } from '@/hooks/useModal'
import { useLoading } from '@/hooks/useLoading'
import { usePhysicalPersonRegister } from '../shared/hooks'

import apiAdmin from '@/services/apiAdmin'

import trashIcon from '@/assets/icons/trash.svg'
import editIcon from '@/assets/icons/edit.svg'

import { PHYSICAL_PERSON_REGISTER_DOCUMENTS } from '@/routes/constants/namedRoutes/routes'

import { DependentState } from '../shared/hooks/types'
import { ExitAndSteps } from '../shared/components/ExitAndSteps'

import { Container } from './styles'

export const Dependents: React.FC = () => {
  const { region, dependents, selectedPlan, cpf, finishRegister } =
    usePhysicalPersonRegister()
  const history = useHistory()
  const { showMessage } = useModal()
  const { Loading } = useLoading()
  const [allDependents, setAllDependents] = useState<DependentState[]>(
    dependents.get || [],
  )

  const limitDependentsPlan = selectedPlan.get.maximumDependentsQuantity
  const planAllowMajorAge = selectedPlan.get.allowedMajorAge

  useEffect(() => {
    dependents.set(allDependents)
  }, [allDependents])

  const verifyIfHasConverage = async (): Promise<boolean> => {
    let hasCoverage: boolean

    try {
      Loading.turnOn()
      const response = await apiAdmin.get('/plano/itens-vendaveis', {
        params: {
          municipio: region.get.city,
          uf: region.get.uf,
          minimoDependente: limitDependentsPlan + 1,
        },
      })

      if (response.data.length > 0) {
        hasCoverage = true
      } else {
        hasCoverage = false
      }
    } catch {
    } finally {
      Loading.turnOff()
    }

    return hasCoverage
  }

  const onAddDependent = async () => {
    if (limitDependentsPlan <= allDependents.length) {
      const hasCoverage = await verifyIfHasConverage()

      showMessage(UpgradePlanQuantity, {
        hasCoverage,
        limitDependentsPlan,
      })
    } else {
      showMessage(AddDependent, {
        dependents: allDependents,
        onGetDependents: setAllDependents,
        holderCpf: cpf.get,
        planAllowMajorAge,
      })
    }
  }

  const onEditDependent = (id: number, dependent: DependentState) => {
    showMessage(EditDependent, {
      id,
      dependentData: dependent,
      dependents: allDependents,
      onGetDependents: setAllDependents,
      holderCpf: cpf.get,
      planAllowMajorAge,
    })
  }

  const onRemoveDependent = (id: number) => {
    const dependentsFiltered = allDependents.filter((_, index) => id !== index)

    setAllDependents(dependentsFiltered)
  }

  const onPreviousStep = () => {
    history.push(PHYSICAL_PERSON_REGISTER_DOCUMENTS)
  }

  const onNextStep = () => {
    finishRegister()
  }

  return (
    <RegisterLayout>
      <Container>
        <ExitAndSteps currentStep={4} />
        <div>
          <h2 data-test="depedentsTitle">Dependentes</h2>
          <ul>
            {allDependents.map((dependent, index) => (
              <li key={index}>
                <ul>
                  <li data-test={`depedentName-${index}`}>
                    Nome: <span>{dependent.name}</span>
                  </li>
                  <li data-test={`depedentCPF-${index}`}>
                    CPF: <span>{dependent.cpf}</span>
                  </li>
                </ul>
                <div>
                  <button
                    onClick={() => onEditDependent(index, dependent)}
                    data-test={`dependentEditButton-${index}`}
                  >
                    <img src={editIcon} />
                    Editar
                  </button>
                  <button
                    onClick={() => onRemoveDependent(index)}
                    data-test={`dependentDeleteButton-${index}`}
                  >
                    <img src={trashIcon} />
                    Remover
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <OutlineButton
            disabled={allDependents.length === 5}
            variation="blue"
            onClick={onAddDependent}
            data-test="dependentAddButton"
          >
            Adicionar Dependentes
          </OutlineButton>
        </div>
        <footer>
          <ButtonLink onClick={onPreviousStep} data-test="previousStepButton">
            Etapa Anterior
          </ButtonLink>
          <ButtonPrimary onClick={onNextStep} data-test="nextStepButton">
            Próxima Etapa
          </ButtonPrimary>
        </footer>
      </Container>
    </RegisterLayout>
  )
}
