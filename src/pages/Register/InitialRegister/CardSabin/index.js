import React, { useState } from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import InputMask from '@/components/Form/InputMask'
import RegisterLayout from '@/components/Layout/RegisterLayout'
import Modal from '@/components/Modal'
import validateCpf from '@/helpers/validateCpf'
import cardSabinImg from '@/assets/img/card-sabin.png'
import { Content } from './styles'

import axios from '@/services/api'
import { status } from '../service'
import InvalidCpf from '../messages/error/InvalidCpf'
import CpfEmpty from '../messages/error/CpfEmpty'
import NotFound from '../messages/error/NotFound'
import AlreadyExists from '../messages/warning/AlreadyExists'
import Analyzing from '../messages/warning/Analyzing'
import Divergence from '../messages/warning/Divergence'
import Denied from '../messages/warning/Denied'
import ImportData from '../messages/warning/Authorization'
import Loading from '@/components/Loading'

function RegisterCardSabin() {
  const [cpf, setCpf] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [message, setMessage] = useState(null)
  const [showLoading, setLoading] = useState(false)

  const showMessage = (MessageComponent,props) => {
    setShowModal(true)
    setMessage(<MessageComponent {...props} onShowModal={setShowModal} />)
  }

  const handleConfirm = async () => {
    if (cpf.length === 0) {
      return showMessage(CpfEmpty)
    }

    if (!validateCpf(cpf)) {
      return showMessage(InvalidCpf)
    }
    try{
      setLoading(true)
      const {data: responseApi} = await axios.get(`/paciente/status?cpf=${cpf}`);

      if (responseApi.status === status.HAVE_DATA_TO_IMPORT) {
        return showMessage(ImportData, responseApi)
      }
      if (responseApi.status === status.APPROVED) {
        return showMessage(AlreadyExists)
      }
      if (responseApi.status === status.PENDING) {
        return showMessage(Analyzing)
      }
      if (responseApi.status === status.DENIED_FIRST_TIME) {
        return showMessage(Divergence)
      }
      if (responseApi.status === status.DENIED_SECOND_TIME) {
        return showMessage(Denied)
      }
    }
    catch({response}){
      const apiStatus = response.status
      if (apiStatus === status.NOT_COSTUMER_CARD_SABIN) {
        return showMessage(NotFound)
      }
    }
    finally{
      setLoading(false)
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
      <Loading active={showLoading}/>
    </>
  )
}

export default RegisterCardSabin
