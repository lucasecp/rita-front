import { useState } from 'react'

import { RegisterLayout } from '@/components/Layout/RegisterLayout'
import ButtonPrimary from '@/components/Button/Primary'
import OutlineButton from '@/components/Button/Outline'
import ButtonLink from '@/components/Button/Link'

import { AddDependent } from './actions/AddDependent'
import { EditDependent } from './actions/EditDependent'
import { UpgradePlan } from './messages/UpgradePlan'

import { useModal } from '@/hooks/useModal'
import { useLoading } from '@/hooks/useLoading'
import apiAdmin from '@/services/apiAdmin'

import trashIcon from '@/assets/icons/trash.svg'
import editIcon from '@/assets/icons/edit.svg'

import { DependentData } from './types'

import { Container } from './styles'

export const Dependents: React.FC = () => {
  const { showMessage } = useModal()
  const { Loading } = useLoading()
  const [dependents, setDependents] = useState<DependentData[]>([])

  const limitDependentsPlan = 2
  const planAllowMajorAge = false

  const verifyIfHasConverage = async (): Promise<boolean> => {
    let hasCoverage: boolean

    try {
      Loading.turnOn()
      const response = await apiAdmin.get('/plano/itens-vendaveis', {
        params: {
          municipio: 'Rio de Janeiro',
          uf: 'RJ',
          minimoDependente: 1,
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
    if (limitDependentsPlan <= dependents.length) {
      const hasCoverage = await verifyIfHasConverage()

      showMessage(UpgradePlan, {
        hasCoverage,
        limitDependentsPlan,
      })
    } else {
      showMessage(AddDependent, {
        dependents,
        onGetDependents: setDependents,
        holderCpf: '102.477.339-62',
        planAllowMajorAge,
      })
    }
  }

  const onEditDependent = (id: number, dependent: DependentData) => {
    showMessage(EditDependent, {
      id,
      dependentData: dependent,
      dependents,
      onGetDependents: setDependents,
      holderCpf: '102.477.339-62',
      planAllowMajorAge,
    })
  }

  const onRemoveDependent = (id: number) => {
    const dependentsFiltered = dependents.filter((_, index) => id !== index)

    setDependents(dependentsFiltered)
  }

  return (
    <RegisterLayout>
      <Container>
        <div>
          <h2>Dependentes</h2>
          <ul>
            {dependents.map((dependent, index) => (
              <li key={index}>
                <ul>
                  <li>
                    Nome: <span>{dependent.name}</span>
                  </li>
                  <li>
                    CPF: <span>{dependent.cpf}</span>
                  </li>
                </ul>
                <div>
                  <button onClick={() => onEditDependent(index, dependent)}>
                    <img src={editIcon} />
                    Editar
                  </button>
                  <button onClick={() => onRemoveDependent(index)}>
                    <img src={trashIcon} />
                    Remover
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <OutlineButton
            disabled={dependents.length === 5}
            variation="blue"
            onClick={onAddDependent}
          >
            Adicionar Dependentes
          </OutlineButton>
        </div>
        <footer>
          <ButtonLink onClick={() => {}}>Etapa Anterior</ButtonLink>
          <ButtonPrimary onClick={() => {}}>Próxima Etapa</ButtonPrimary>
        </footer>
      </Container>
    </RegisterLayout>
  )
}
