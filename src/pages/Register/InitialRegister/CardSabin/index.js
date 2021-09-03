import React, { useState } from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import InputMask from '@/components/Form/InputMask'
import RegisterLayout from '@/components/Layout/RegisterLayout'
import Modal from '@/components/Modal'

import cardSabinImg from '@/assets/img/card-sabin.png'

import { Content } from './styles'

import CpfEmpty from '../Messages/warning/Found'

import validateCpf from '@/helpers/validateCpf'

function CardSabin() {
  const [cpf, setCpf] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [message, setMessage] = useState(null)

  const showMessage = (MessageComponent) => {
    setShowModal(true)
    setMessage(<MessageComponent onShowModal={setShowModal} />)
  }

  const handleConfirm = () => {
    if (cpf.length === 0) {
      return showMessage(CpfEmpty)
    }

    if (validateCpf(cpf)) {
      console.log('valido')
    }
  }

  return (
    <>
      <RegisterLayout>
        <Content>
          <img src={cardSabinImg} />
          <section>
            <InputMask
              label="Digite Seu CPF:"
              mask="###.###.###-##"
              placeHolder="123.456.789-10"
              value={cpf}
              setValue={setCpf}
            />
            <ButtonPrimary onClick={handleConfirm}>Confirmar</ButtonPrimary>
          </section>
        </Content>
      </RegisterLayout>
      <Modal show={showModal}>{message}</Modal>
    </>
  )
}

export default CardSabin
