import React, { useState } from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import InputMask from '@/components/Form/InputMask'
import RegisterLayout from '@/components/Layout/RegisterLayout'
import validateCpf from '@/helpers/validateCpf'
import { useHistory } from 'react-router-dom'

import CpfEmpty from '../messages/error/CpfEmpty'

import { Content } from './styles'

import InvalidCpf from '../messages/error/InvalidCpf'
import Analyzing from '../messages/warning/Analyzing'
import Divergence from '../messages/warning/Divergence'
import Denied from '../messages/warning/Denied'
import Inactive from '../messages/warning/Inactive'
import Found from '../messages/warning/Found'
import { status } from '../service'
import axios from '@/services/apiPatient'
import AlreadyExists from '../messages/warning/AlreadyExists'
import { useModal } from '@/hooks/useModal'
import { useLoading } from '@/hooks/useLoading'
import { RESGISTE_PATIENT } from '@/routes/constants/namedRoutes/routes'
import StatusD from '../messages/warning/StatusD'

function DefaultRegister() {
  const [cpf, setCpf] = useState('')
  const { Loading } = useLoading()
  const history = useHistory()

  const { showMessage } = useModal()

  const handleConfirm = async () => {
    if (cpf.length === 0) {
      return showMessage(CpfEmpty)
    }

    if (!validateCpf(cpf)) {
      return showMessage(InvalidCpf)
    }
    try {
      Loading.turnOn()
      const { data: responseApi } = await axios.get(
        `/paciente/status?cpf=${cpf}`
      )

      if (responseApi.status === status.INACTIVE) {
        return showMessage(Inactive)
      }
      if (responseApi.status === status.DEPENDENT) {
        return showMessage(StatusD)
      }
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
        return showMessage(Divergence, {
          cpf,
          email: responseApi.email,
          phone: responseApi.telefone,
          status: responseApi.status
        })
      }
      if (responseApi.status === status.DENIED_SECOND_TIME) {
        return showMessage(Denied)
      }
    } catch ({ response }) {
      const apiStatus = response.status
      if (apiStatus === status.NOT_COSTUMER_CARD_SABIN) {
        return history.push(RESGISTE_PATIENT, { userData: { cpf } })
      }
    } finally {
      Loading.turnOff()
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
    </>
  )
}

export default DefaultRegister
