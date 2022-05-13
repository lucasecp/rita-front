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

export const CpfHolder: React.FC = () => {
  const { showMessage } = useModal()

  const { cpfHolder } = usePhysicalPersonRegister()

  const handleConfirm = async () => {
    if (cpfHolder.get.length === 0) {
      return showMessage(CpfEmpty)
    }

    if (!validateCpf(cpfHolder.get)) {
      return showMessage(InvalidCpf)
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
              value={cpfHolder.get}
              setValue={cpfHolder.set}
              name="cpf"
            />
            <ButtonPrimary onClick={handleConfirm}>Confirmar</ButtonPrimary>
          </div>
        </Content>
      </RegisterLayout>
    </>
  )
}
