import React, { useState } from 'react'

import logo from '@/assets/logo/logo-animated-without-background.gif'
import InputText from '@/components/Form/InputText'

import { Container, TitleAndLogo } from './styles'
import InputMask from '@/components/Form/InputMask'

interface ErrorsState {
  name: string
  email: boolean
  phone: string
}

export const AddUserOnWaitList: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const [errors, setErrors] = useState({} as ErrorsState)

  return (
    <Container>
      <TitleAndLogo>
        <img src={logo} />
        <h1>Rita Saúde</h1>
      </TitleAndLogo>
      <h2>
        No momento não possuímos planos para a sua região. Por favor, deixe o
        seu contato.
      </h2>
      <InputText label="Nome Completo:" value={name} setValue={setName} />
      <InputText label="E-mail*:" value={email} setValue={setEmail} />

      <InputMask
        label="Telefone/Celular*:"
        mask="(99) 99999-9999"
        value={phone}
        setValue={setPhone}
        hasError={!!errors.phone}
        msgError={errors.phone}
      />

      {/* <footer>
        <OutlineButton onClick={onCancelCreateUser}>Cancelar</OutlineButton>
        <ButtonPrimary onClick={sendSaveMessage}>Salvar</ButtonPrimary>
      </footer> */}
    </Container>
  )
}
