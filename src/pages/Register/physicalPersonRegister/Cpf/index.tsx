import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import InputMask from '@/components/Form/InputMask'
import { RegisterLayout } from '@/components/Layout/RegisterLayout'
import validateCpf from '@/helpers/validateCpf'

import { CpfEmpty } from './messages/CpfEmpty'

import { Content } from './styles'

import { InvalidCpf } from './messages/InvalidCpf'
import { useModal } from '@/hooks/useModal'

import { usePhysicalPersonRegister } from '../shared/hooks'
import { useHistory } from 'react-router-dom'
import {
  PHYSICAL_PERSON_REGISTER_REGISTRATION_DATA,
  REGISTER_PATIENT,
} from '@/routes/constants/namedRoutes/routes'

import { Analyzing } from './messages/Analyzing'
import { Divergence } from './messages/Divergence'
import { Denied } from './messages/Denied'
import { Inactive } from './messages/Inactive'
import { Found } from './messages/Found'
import apiPatient from '@/services/apiPatient'
import { AlreadyExists } from './messages/AlreadyExists'
import { useLoading } from '@/hooks/useLoading'
import { StatusD } from './messages/StatusD'

export const status = {
  NOT_COSTUMER_CARD_SABIN: 404,
  HAVE_DATA_TO_IMPORT: 'CS',
  APPROVED: 'A',
  PENDING: 'P',
  DENIED_FIRST_TIME: 'N',
  DENIED_SECOND_TIME: 'NE',
  INACTIVE: 'I',
  DEPENDENT: 'D',
}

export const Cpf: React.FC = () => {
  const { cpf } = usePhysicalPersonRegister()

  const history = useHistory()
  const { Loading } = useLoading()
  const { showMessage } = useModal()

  const handleConfirm = async () => {
    if (cpf.get.length === 0) {
      return showMessage(CpfEmpty)
    }

    if (!validateCpf(cpf.get)) {
      return showMessage(InvalidCpf)
    }

    let company
    try {
      Loading.turnOn()
      const { data: responseApi } = await apiPatient.get(
        `/paciente/status?cpf=${cpf.get}`,
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
          cpf: cpf.get,
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
          cpf: cpf.get,
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

      if (apiStatus === status.NOT_COSTUMER_CARD_SABIN) {
        history.push(PHYSICAL_PERSON_REGISTER_REGISTRATION_DATA)

        return
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
              value={cpf.get}
              setValue={cpf.set}
              name="cpf"
            />
            <ButtonPrimary onClick={handleConfirm}>Confirmar</ButtonPrimary>
          </div>
        </Content>
      </RegisterLayout>
    </>
  )
}
