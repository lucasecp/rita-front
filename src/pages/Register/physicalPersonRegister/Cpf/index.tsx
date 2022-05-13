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
import { useHistory } from 'react-router'
import { PHYSICAL_PERSON_REGISTER_REGISTRATION_DATA } from '@/routes/constants/namedRoutes/routes'

export const Cpf: React.FC = () => {
  const history = useHistory()
  const { showMessage } = useModal()

  const { cpf } = usePhysicalPersonRegister()

  const handleConfirm = async () => {
    if (cpf.get.length === 0) {
      return showMessage(CpfEmpty)
    }

    if (!validateCpf(cpf.get)) {
      return showMessage(InvalidCpf)
    }

    history.push(PHYSICAL_PERSON_REGISTER_REGISTRATION_DATA)
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
