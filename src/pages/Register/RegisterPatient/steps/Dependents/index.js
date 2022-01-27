import OutlineButton from '@/components/Button/Outline'
import React, { useEffect, useState } from 'react'
import { Container } from '../styles'
import Form from './messages/Form'
import { Content } from './styles'
import trash from '@/assets/icons/trash.svg'
import edit from '@/assets/icons/edit.svg'
import { useModal } from '@/hooks/useModal'
import { formatCpf } from '@/helpers/formatCpf'
import mapDeps from '../../helpers/formatDateCardSabin'
import { LimitDependent } from '@/pages/modules/patient/dependents/SeeAllDependents/components/AddDependentButton/messages/LimitDependent'

export const Dependents = ({ dataClientSabin, setData, newData }) => {
  const [allDeps, setAllDeps] = useState([])
  const { showMessage } = useModal()

  const limitOfDependents = 2
  const isPatientLinkedCompany = !!dataClientSabin.company

  console.log(dataClientSabin)

  useEffect(() => {
    setAllDeps(
      newData.dependentes || mapDeps(dataClientSabin.dependentes) || [],
    )
  }, [])

  useEffect(() => {
    setData((data) => ({ ...data, dependentes: allDeps }))
  }, [allDeps])

  const handleUpdate = (infoDep, id) => {
    showMessage(Form, {
      editDep: infoDep,
      id,
      allDeps,
      setAllDeps,
      action: 'edit',
      clientCpf: newData.cpf,
      dataClientSabin,
    })
  }

  const handleDelete = (id) => {
    const valueUpdated = allDeps.filter((dep, index) => index !== id)
    if (dataClientSabin?.dependentes) {
      dataClientSabin.dependentes.splice(id, 1)
    }
    setAllDeps(valueUpdated)
  }

  const onAddDependent = () => {
    if (isPatientLinkedCompany && allDeps.length >= limitOfDependents) {
      return showMessage(LimitDependent)
    }

    showMessage(Form, {
      editDep: {},
      allDeps,
      setAllDeps,
      action: 'create',
      clientCpf: newData.cpf,
      dataClientSabin,
    })
  }

  return (
    <Container>
      <Content>
        <h2>Dependentes</h2>
        <ul>
          {allDeps.map((dep, index) => (
            <li key={index}>
              <ul>
                <li>
                  Nome: <span>{dep.nome}</span>
                </li>
                <li>
                  CPF: <span>{formatCpf(dep.cpf)}</span>
                </li>
              </ul>
              <div>
                <button onClick={() => handleUpdate(dep, index)}>
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
          disabled={allDeps.length === 5}
          variation="blue"
          onClick={onAddDependent}
        >
          Adicionar Dependentes
        </OutlineButton>
      </Content>
    </Container>
  )
}
