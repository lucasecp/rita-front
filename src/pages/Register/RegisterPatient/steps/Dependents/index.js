import OutlineButton from '@/components/Button/Outline'
import React, { useEffect, useState } from 'react'
import { Container } from '../style'
import Form from './messages/Form'
import { Content } from './style'
import trash from '@/assets/icons/trash.svg'
import edit from '@/assets/icons/edit.svg'
import { useModal } from '@/context/useModal'

const Dependents = ({dataClientSabin,setData}) => {
  const [allDeps, setAllDeps] = useState([]);
  const {showMessage} = useModal()


  useEffect(() => {
    const {dependentes} = dataClientSabin
    setAllDeps(dependentes || [])
   }, [dataClientSabin])

  useEffect(() => {
    setData(data=> {return{...data, dependentes: [...allDeps]}})
   }, [allDeps])
  const handleUpdate = (infoDep) =>{
    showMessage(Form,{editDep:infoDep,allDeps,setAllDeps})
  }
  const handleDelete = (cpf) =>{
    const valueUpdated = allDeps.filter((dep)=> dep.cpf.replace(/[^a-zA-Z0-9]/g,'') !== cpf.replace(/[^a-zA-Z0-9]/g,''))
    setAllDeps(valueUpdated)
  }
  const handleAddDep = () =>{
    showMessage(Form,{allDeps,setAllDeps})
  }
  return (
    <Container>
      <Content>
        <h2>Dependentes</h2>
        <ul>
          {allDeps.map((dep,index) =>
          <li key={index}>
            <ul>
              <li>Nome: <span>{dep.nome}</span></li>
              <li>CPF: <span>{dep.cpf}</span></li>
            </ul>
            <div>
              <button onClick={() => handleUpdate(dep)}>
                <img src={edit} />
                Editar
              </button>
              <button onClick={() =>handleDelete(dep.cpf)}>
                <img src={trash} />
                Remover
              </button>
            </div>
          </li>
          )}
        </ul>
        <OutlineButton disabled={allDeps.length === 5} variation="blue" onClick={handleAddDep}>
          Adicionar Dependentes
        </OutlineButton>
      </Content>
    </Container>
  )
}

export default Dependents
