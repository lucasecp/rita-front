import OutlineButton from '@/components/Button/Outline'
import Modal from '@/components/Modal'
import React, { useState } from 'react'
import { Container } from '../style'
import Form from './messages/Form'
import { Content } from './style'
import trash from '@/assets/icons/trash.svg'
import edit from '@/assets/icons/edit.svg'
const Dependents = () => {
  const [messages, setMessages] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const showModalMessages = (Messages) => {
    setShowModal(true)
    setMessages(<Messages onCloseModal={setShowModal} />)
  }
  return (
    <Container>
      <Content>
        <h2>Dependentes</h2>
        <ul>
          <li>
            <ul>
              <li>Nome: <span>Fulano</span></li>
              <li>CPF: <span>00000000000</span></li>
            </ul>
            <div>
              <button>
                <img src={edit} />
                Editar
              </button>
              <button>
                <img src={trash} />
                Remover
              </button>
            </div>
          </li>
        </ul>
        <OutlineButton variation="blue" onClick={() => showModalMessages(Form)}>
          Adicionar Dependentes
        </OutlineButton>
      </Content>
      <Modal show={showModal}>{messages}</Modal>
    </Container>
  )
}

export default Dependents
