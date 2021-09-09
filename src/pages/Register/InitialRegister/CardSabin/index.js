import React, { useState } from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import InputMask from '@/components/Form/InputMask'
import RegisterLayout from '@/components/Layout/RegisterLayout'
import Modal from '@/components/Modal'
import validateCpf from '@/helpers/validateCpf'
import cardSabinImg from '@/assets/img/card-sabin.png'
import { Content } from './styles'
import CpfEmpty from '../messages/error/CpfEmpty'

import { status, response } from '../service'
import InvalidCpf from '../messages/error/InvalidCpf'
import NotFound from '../messages/error/NotFound'
import AlreadyExists from '../messages/warning/AlreadyExists'
import Analyzing from '../messages/warning/Analyzing'
import Divergence from '../messages/warning/Divergence'
import Denied from '../messages/warning/Denied'
import ImportData from '../messages/warning/Authorization'

function RegisterCardSabin() {
  const [cpf, setCpf] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [message, setMessage] = useState(null)

  const showMessage = (MessageComponent) => {
    setShowModal(true)
    setMessage(<MessageComponent onShowModal={setShowModal} />)
  }

  const handleConfirm = async () => {
    if (cpf.length === 0) {
      return showMessage(CpfEmpty)
    }

    if (!validateCpf(cpf)) {
      return showMessage(InvalidCpf)
    }

    // const response = await api.get('/rota');
    // const responseStatus = response.data.status;
    // Substituir response.status por responseStatus

    if (response.status === status.NOT_COSTUMER_CARD_SABIN) {
      return showMessage(NotFound)
    }

    if (response.status === status.HAVE_DATA_TO_IMPORT) {
      return showMessage(ImportData)
    }

    if (response.status === status.APPROVED) {
      return showMessage(AlreadyExists)
    }

    if (response.status === status.PENDING) {
      return showMessage(Analyzing)
    }

    if (response.status === status.DENIED_FIRST_TIME) {
      return showMessage(Divergence)
    }

    if (response.status === status.DENIED_SECOND_TIME) {
      return showMessage(Denied)
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
              placeholder="000.000.000-00"
              value={cpf}
              setValue={setCpf}
              name="cpf"
            />
            <ButtonPrimary onClick={handleConfirm}>Confirmar</ButtonPrimary>
          </section>
        </Content>
      </RegisterLayout>
      <Modal show={showModal}>{message}</Modal>
    </>
  )
}

export default RegisterCardSabin
