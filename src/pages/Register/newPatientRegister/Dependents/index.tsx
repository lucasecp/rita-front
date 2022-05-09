import { useState } from 'react'

import { RegisterLayout } from '@/components/Layout/RegisterLayout'
import ButtonPrimary from '@/components/Button/Primary'
import OutlineButton from '@/components/Button/Outline'
import ButtonLink from '@/components/Button/Link'

import { AddDependent } from './actions/AddDependent'
import { EditDependent } from './actions/EditDependent'
import { UpgradePlan } from './messages/UpgradePlan'

import { useModal } from '@/hooks/useModal'

import trashIcon from '@/assets/icons/trash.svg'
import editIcon from '@/assets/icons/edit.svg'

import { DependentData } from './types'

import { Container } from './styles'

export const Dependents: React.FC = () => {
  const { showMessage } = useModal()
  const [dependents, setDependents] = useState<DependentData[]>([])

  const limitDependentsPlan = 2
  const planAllowMajorAge = false

  const onAddDependent = () => {
    if (limitDependentsPlan <= dependents.length) {
      showMessage(UpgradePlan, {
        hasCoverage: false,
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
          <ButtonPrimary onClick={() => {}}>Concluir cadastro</ButtonPrimary>
        </footer>
      </Container>
    </RegisterLayout>
  )
}
