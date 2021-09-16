import OutlineButton from '@/components/Button/Outline'
import Modal from '@/components/Modal'
import React, { useEffect, useState } from 'react'
import { Container } from '../style'
import Form from './messages/Form'
import { Content } from './style'
import trash from '@/assets/icons/trash.svg'
import edit from '@/assets/icons/edit.svg'
const Dependents = ({dataClientSabin,setData}) => {
  const [messages, setMessages] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [allDeps, setAllDeps] = useState([]);
  useEffect(() => {
    const {dependentes} = dataClientSabin
    setAllDeps(dependentes || [])
   }, [dataClientSabin])
  useEffect(() => {
    setData(data=> {return{...data, dependentes: [...allDeps]}})
   }, [allDeps])
  const showModalMessages = (Messages,editDep) => {
    setShowModal(true)
    setMessages(<Messages onCloseModal={setShowModal}
      editDep={editDep} allDeps={allDeps}
      setAllDeps={setAllDeps} />)
  }
  const handleUpdate = (infoDep) =>{
   showModalMessages(Form,infoDep)
  }
  const handleDelete = (cpf) =>{
    const valueUpdated = allDeps.filter((dep)=> dep.cpf !== cpf)
    setAllDeps(valueUpdated)
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
        <OutlineButton disabled={allDeps.length === 5} variation="blue" onClick={() => showModalMessages(Form)}>
          Adicionar Dependentes
        </OutlineButton>
      </Content>
      <Modal show={showModal}>{messages}</Modal>
    </Container>
  )
}

export default Dependents
