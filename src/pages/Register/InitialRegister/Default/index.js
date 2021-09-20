import React, { useState } from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import InputMask from '@/components/Form/InputMask'
import RegisterLayout from '@/components/Layout/RegisterLayout'
import Modal from '@/components/Modal'
import validateCpf from '@/helpers/validateCpf'
import { useHistory } from 'react-router-dom'

import CpfEmpty from '../messages/error/CpfEmpty'

import { Content } from './styles'

import InvalidCpf from '../messages/error/InvalidCpf'
import Analyzing from '../messages/warning/Analyzing'
import Divergence from '../messages/warning/Divergence'
import Denied from '../messages/warning/Denied'
import Found from '../messages/warning/Found'
import { status } from '../service'
import Loading from '@/components/Loading/RitaLoading'
import axios from '@/services/api'
import AlreadyExists from '../messages/warning/AlreadyExists'

function DefaultRegister() {
  const [cpf, setCpf] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [message, setMessage] = useState(null)
  const [showLoading, setLoading] = useState(false)

  const history = useHistory()

  const showMessage = (MessageComponent, props) => {
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
    try {
      setLoading(true)
      const { data: responseApi } = await axios.get(
        `/paciente/status?cpf=${cpf}`
      )

      if (responseApi.status === status.HAVE_DATA_TO_IMPORT) {
        return showMessage(Found, {
          cpf,
          email: responseApi.email,
          phone: responseApi.telefone,
        })
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
    } catch ({ response }) {
      const apiStatus = response.status
      if (apiStatus === status.NOT_COSTUMER_CARD_SABIN) {
        return history.push('/cadastro/paciente/',{userData:{cpf}})
      }
    } finally {
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
              mask="999.999.999-99"
              placeholder="000.000.000-00"
              value={cpf}
              setValue={setCpf}
              name="cpf"
            />
            <ButtonPrimary onClick={handleConfirm}>Confirmar</ButtonPrimary>
          </div>
        </Content>
      </RegisterLayout>
      <Modal show={showModal}>{message}</Modal>
      <Loading active={showLoading} />
    </>
  )
}

export default DefaultRegister
