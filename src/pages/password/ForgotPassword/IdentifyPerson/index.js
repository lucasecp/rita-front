import React, { useEffect, useState } from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import InputMask from '@/components/Form/InputMask'
import RegisterLayout from '@/components/Layout/RegisterLayout'
import validateCpf from '@/helpers/validateCpf'
import { useHistory,useLocation } from 'react-router-dom'

import CpfEmpty from './messages/error/CpfEmpty'

import { BtnGroup, Content } from './style'

import InvalidCpf from './messages/error/InvalidCpf'
import NotFound from './messages/error/NotFound'
import apiUser from '@/services/apiUser'
import { useModal } from '@/hooks/useModal'
import { useLoading } from '@/hooks/useLoading'
import OutlineButton from '@/components/Button/Outline'
import ExpiredSessionDefinePassword from './messages/error/ExpiredToken'
import { FORGOT_PASSWORD_CONFIRM_DATA, LOGIN } from '@/routes/constants/namedRoutes/routes'

function IdentifyPerson() {
  const [cpf, setCpf] = useState('')
  const { Loading } = useLoading()
  const history = useHistory()
  const {state} = useLocation()
  const { showMessage } = useModal()

  useEffect(() => {
    document.title = 'Rita Saúde | Recuperar Senha'
    if(!state && !state?.error) return
    if(state.error === 'EXPIRED_TOKEN') showMessage(ExpiredSessionDefinePassword)
  }, []);

  const handleConfirm = async () => {
    if (cpf.length === 0) {
      return showMessage(CpfEmpty)
    }

    if (!validateCpf(cpf)) {
      return showMessage(InvalidCpf)
    }

    try {
      Loading.turnOn()
      const { data } = await apiUser.get(`/status?cpf=${cpf}`)
      return history.push(FORGOT_PASSWORD_CONFIRM_DATA, {
        cpf,
        email: data.email,
        phone: data.telefone,
      })

    } catch ({ response }) {
      if (response.status === 404) {
        return showMessage(NotFound)
      }
    } finally {
      Loading.turnOff()
    }
  }

  return (
    <RegisterLayout>
      <Content>
        <h6>Para continuarmos, precisamos confirmar alguns dados. Informe seu CPF:</h6>
        <div>
          <InputMask
            mask="999.999.999-99"
            placeholder="000.000.000-00"
            value={cpf}
            setValue={setCpf}
            name="cpf"
          />
          <BtnGroup>
            <OutlineButton onClick={() => history.push(LOGIN)}>
              Voltar
            </OutlineButton>
            <ButtonPrimary onClick={handleConfirm}>Confirmar</ButtonPrimary>
          </BtnGroup>
          </div>
        </Content>
      </RegisterLayout>
  )
}

export default IdentifyPerson
