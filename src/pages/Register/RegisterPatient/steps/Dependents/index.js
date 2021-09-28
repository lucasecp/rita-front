import OutlineButton from '@/components/Button/Outline'
import React, { useEffect, useState } from 'react'
import { Container } from '../style'
import Form from './messages/Form'
import { Content } from './style'
import trash from '@/assets/icons/trash.svg'
import edit from '@/assets/icons/edit.svg'
import { useModal } from '@/context/useModal'

const Dependents = ({ dataClientSabin, setData, newData }) => {
  const [allDeps, setAllDeps] = useState([])
  const { showMessage } = useModal()

  useEffect(() => {
    setAllDeps(newData.dependentes || dataClientSabin.dependentes || [])
  }, [])

  useEffect(() => {
    setData((data) => {
      return { ...data, dependentes: allDeps }
    })
  }, [allDeps])

  const handleUpdate = (infoDep, id) => {
    showMessage(Form, {
      editDep: infoDep,
      id,
      allDeps,
      setAllDeps,
      action: 'edit',
      clientCpf: '12619245761',
    })
  }
  const handleDelete = (id) => {
    const valueUpdated = allDeps.filter((dep, index) => index !== id)
    setAllDeps(valueUpdated)
  }
  const handleAddDep = () => {
    showMessage(Form, {
      editDep: {},
      allDeps,
      setAllDeps,
      action: 'create',
      clientCpf: '12619245761',
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
                  CPF: <span>{dep.cpf}</span>
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
          onClick={handleAddDep}
        >
          Adicionar Dependentes
        </OutlineButton>
      </Content>
    </Container>
  )
}

export default Dependents
