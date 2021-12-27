import React, { useEffect, useState } from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import InputMask from '@/components/Form/InputMask'
import RegisterLayout from '@/components/Layout/RegisterLayout'
import validateCpf from '@/helpers/validateCpf'
import cardSabinImg from '@/assets/img/card-sabin.png'
import { Content } from './styles'

import axios from '@/services/apiPatient'
import { status } from '../services'
import InvalidCpf from '../messages/error/InvalidCpf'
import CpfEmpty from '../messages/error/CpfEmpty'
import NotFound from '../messages/error/NotFound'
import AlreadyExists from '../messages/warning/AlreadyExists'
import Analyzing from '../messages/warning/Analyzing'
import Divergence from '../messages/warning/Divergence'
import Denied from '../messages/warning/Denied'
import ImportData from '../messages/warning/ImportData'
import { useModal } from '@/hooks/useModal'
import { useLoading } from '@/hooks/useLoading'
import Inactive from '../messages/warning/Inactive'
import StatusD from '../messages/warning/StatusD'

function RegisterCardSabin() {
  const [cpf, setCpf] = useState('')
  const { showMessage } = useModal()
  const { Loading } = useLoading()
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
        `/paciente/status?cpf=${cpf}`,
      )
      if (responseApi.status === status.INACTIVE) {
        return showMessage(Inactive)
      }
      if (responseApi.status === status.DEPENDENT) {
        return showMessage(StatusD)
      }

      if (responseApi.status === status.HAVE_DATA_TO_IMPORT) {
        return showMessage(ImportData, {
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
          status: responseApi.status,
        })
      }
      if (responseApi.status === status.DENIED_SECOND_TIME) {
        return showMessage(Denied)
      }
    } catch ({ response }) {
      const apiStatus = response.status
      if (apiStatus === status.NOT_COSTUMER_CARD_SABIN) {
        return showMessage(NotFound, { cpf }, true)
      }
    } finally {
      Loading.turnOff()
    }
  }

  useEffect(() => {
    document.title = 'Rita Saúde | Cadastro com Cartão Sabin'
  }, [])

  return (
    <>
      <RegisterLayout>
        <Content>
          <img src={cardSabinImg} />
          <section>
            <InputMask
              label="Digite Seu CPF:"
              mask="999.999.999-99"
              placeholder="000.000.000-00"
              value={cpf}
              setValue={setCpf}
            />
            <ButtonPrimary onClick={handleConfirm}>Confirmar</ButtonPrimary>
          </section>
        </Content>
      </RegisterLayout>
    </>
  )
}

export default RegisterCardSabin
