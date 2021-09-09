import React, { useState } from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import InputMask from '@/components/Form/InputMask'
import RegisterLayout from '@/components/Layout/RegisterLayout'
import Modal from '@/components/Modal'
import validateCpf from '@/helpers/validateCpf'

import CpfEmpty from '../Messages/error/CpfEmpty'

import { Content } from './styles'

import InvalidCpf from '../Messages/error/InvalidCpf'
import Analyzing from '../Messages/warning/Analyzing'
import Divergence from '../Messages/warning/Divergence'
import Denied from '../Messages/warning/Denied'
import Found from '../Messages/warning/Found'
import { status } from '../service'
import Loading from '@/components/Loading'
import axios from '@/services/api'
import { useHistory } from 'react-router-dom'
import AlreadyExists from '../Messages/warning/AlreadyExists'


function DefaultRegister() {
  const [cpf, setCpf] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [message, setMessage] = useState(null)
  const [showLoading, setLoading] = useState(false)
  const history = useHistory()

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
        return showMessage(Found, {cpf})
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
        return history.push('/')
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
          <h6>Para iniciarmos o processo, por favor informe o seu CPF:</h6>
          <div>
            <InputMask
              mask="###.###.###-##"
              placeHolder="000.000.000-00"
              value={cpf}
              setValue={setCpf}
              name="cpf"
            />
            <ButtonPrimary onClick={handleConfirm}>Confirmar</ButtonPrimary>
          </div>
        </Content>
      </RegisterLayout>
      <Modal show={showModal}>{message}</Modal>
      <Loading active={showLoading}/>
    </>
  )
}

export default DefaultRegister
