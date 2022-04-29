import React, { useState } from 'react'

import logo from '@/assets/logo/logo-animated-without-background.gif'
import InputText from '@/components/Form/InputText'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { Container, InputFields, TitleAndLogo } from './styles'
import InputMask from '@/components/Form/InputMask'

import { useLoading } from '@/hooks/useLoading'
import { useModal } from '@/hooks/useModal'
import { ThankUser } from './messages/ThankUser'
import apiPatient from '@/services/apiPatient'
import { RegionState } from '../..'
import { validatePhone } from '@/helpers/validateFields/validatePhone'
import { InputEmail } from '@/components/smarts/InputEmail'
import { useMessage } from '@/hooks/useMessage'
import { validateFullName } from '@/helpers/validateFields/validateFullName'

interface AddUserOnWaitListProps {
  region: RegionState
}

interface ErrorsState {
  name: string
  email: boolean
  phone: string
}

export const AddUserOnWaitList: React.FC<AddUserOnWaitListProps> = ({
  region,
}) => {
  const { Loading } = useLoading()
  const { closeModal, showMessage } = useModal()

  const [name, setName] = useState('')

  const [email, setEmail] = useState('')
  const [errorMessage, sendErrorMessage] = useMessage()

  const [phone, setPhone] = useState('')

  const [errors, setErrors] = useState({} as ErrorsState)

  const onSendWaitList = async () => {
    sendErrorMessage()

    const errorsTemporary = {
      ...errors,
      name: validateFullName(name),
      phone: validatePhone(phone),
    }

    setErrors(errorsTemporary)

    const hasError = Object.values(errorsTemporary).some((error) => !!error)

    if (hasError) {
      return
    }

    try {
      Loading.turnOn()

      await apiPatient.post('paciente/lista-espera', {
        id: '0',
        name,
        email,
        phone,
        uf: region.uf,
        cidade: region.city,
      })

      showMessage(ThankUser)
    } catch (error) {
      console.log(error)
    } finally {
      Loading.turnOff()
    }
  }

  return (
    <Container>
      <TitleAndLogo>
        <img src={logo} />
        <h1>Rita Saúde</h1>
      </TitleAndLogo>
      <h2>
        No momento não possuímos planos para a sua região. <br />
        Por favor, deixe o seu contato.
      </h2>
      <InputFields>
        <InputText
          label="Nome Completo:"
          value={name}
          setValue={setName}
          hasError={!!errors.name}
          msgError={errors.name}
        />
        <InputEmail
          onGetEmail={setEmail}
          hasError={(hasError) => setErrors({ ...errors, email: hasError })}
          checkHasError={errorMessage}
        />
        <InputMask
          label="Telefone/Celular*:"
          mask="(99) 99999-9999"
          value={phone}
          setValue={setPhone}
          hasError={!!errors.phone}
          msgError={errors.phone}
        />
      </InputFields>

      <footer>
        <OutlineButton onClick={closeModal}>Cancelar</OutlineButton>
        <ButtonPrimary onClick={onSendWaitList}>Enviar</ButtonPrimary>
      </footer>
    </Container>
  )
}
