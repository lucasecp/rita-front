import OutlineButton from '@/components/Button/Outline'
import React, { useEffect, useState } from 'react'
import { Container } from './styles'
import Form from './messages/Form'
import trash from '@/assets/icons/trash.svg'
import edit from '@/assets/icons/edit.svg'
import { useModal } from '@/hooks/useModal'
import { LimitDependent } from '@/pages/modules/patient/dependents/SeeAllDependents/components/AddDependentButton/messages/LimitDependent'
import ButtonLink from '@/components/Button/Link'
import ButtonPrimary from '@/components/Button/Primary'
import { useRegisterPatient } from '../../hooks'

export const Dependents = ({ isActive }) => {
  const { showMessage } = useModal()
  const {
    cpfHolder,
    isPatientLinkedCompany,
    initialRegisterData,
    limitOfDependents,
    setDependents,
    previousStep,
    onFinishRegister,
  } = useRegisterPatient()

  const [allDependents, setAllDependents] = useState([])

  useEffect(() => {
    setAllDependents(initialRegisterData?.dependents || [])
  }, [initialRegisterData])

  const handleUpdate = (infoDep, id) => {
    showMessage(Form, {
      editDep: infoDep,
      id,
      allDependents,
      setAllDependents,
      action: 'edit',
      clientCpf: cpfHolder,
      dataClientSabin: initialRegisterData,
    })
  }

  const handleDelete = (id) => {
    const valueUpdated = allDependents.filter((dep, index) => index !== id)

    setAllDependents(valueUpdated)
  }

  const onAddDependent = () => {
    if (isPatientLinkedCompany && allDependents.length >= limitOfDependents) {
      return showMessage(LimitDependent)
    }

    showMessage(Form, {
      editDep: {},
      allDependents,
      setAllDependents,
      action: 'create',
      clientCpf: cpfHolder,
      dataClientSabin: initialRegisterData,
    })
  }

  const onFinishRegisterInDependent = () => {
    setDependents(allDependents)

    onFinishRegister()
  }

  return (
    <Container active={isActive}>
      <div>
        <h2>Dependentes</h2>
        <ul>
          {allDependents.map((dependent, index) => (
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
                <button onClick={() => handleUpdate(dependent, index)}>
                  <img src={edit} />
                  Editar
                </button>
                <button onClick={() => handleDelete(index)}>
                  <img src={trash} />
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
        >
          Adicionar Dependentes
        </OutlineButton>
      </div>
      <footer>
        <ButtonLink onClick={previousStep}>Etapa Anterior</ButtonLink>
        <ButtonPrimary onClick={onFinishRegisterInDependent}>
          Concluir cadastro
        </ButtonPrimary>
      </footer>
    </Container>
  )
}
