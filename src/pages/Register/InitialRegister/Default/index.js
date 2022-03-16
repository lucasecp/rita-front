import React, { useEffect, useState } from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import InputMask from '@/components/Form/InputMask'
import { RegisterLayout } from '@/components/Layout/RegisterLayout'
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
import { status } from '../services'
import apiPatient from '@/services/apiPatient'
import AlreadyExists from '../messages/warning/AlreadyExists'
import { useModal } from '@/hooks/useModal'
import { useLoading } from '@/hooks/useLoading'
import { REGISTER_PATIENT } from '@/routes/constants/namedRoutes/routes'
import StatusD from '../messages/warning/StatusD'

function DefaultRegister() {
  const { Loading } = useLoading()
  const history = useHistory()
  const { showMessage } = useModal()

  const [cpf, setCpf] = useState('')

  useEffect(() => {
    document.title = 'Rita Saúde | Cadastro'
  }, [])

  const handleConfirm = async () => {
    if (cpf.length === 0) {
      return showMessage(CpfEmpty)
    }

    if (!validateCpf(cpf)) {
      return showMessage(InvalidCpf)
    }

    let company
    try {
      Loading.turnOn()
      const { data: responseApi } = await apiPatient.get(
        `/paciente/status?cpf=${cpf}`,
      )

      company = responseApi.empresa[0]

      if (responseApi.status === status.INACTIVE) {
        return showMessage(Inactive)
      }
      if (responseApi.status === status.DEPENDENT) {
        return showMessage(StatusD)
      }
      if (responseApi.status === status.HAVE_DATA_TO_IMPORT) {
        return showMessage(Found, {
          company,
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
          company,
          cpf,
          email: responseApi.email,
          phone: responseApi.telefone,
          status: responseApi.status,
        })
      }
      if (responseApi.status === status.DENIED_SECOND_TIME) {
        return showMessage(Denied)
      }
    } catch ({ response }) {
      const apiStatus = response.status
      // company = response.data.empresa[0]

      if (apiStatus === status.NOT_COSTUMER_CARD_SABIN) {
        return history.push(REGISTER_PATIENT, { userData: { cpf } })
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
              placeholder="___.___.___-__"
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
