import React, { useState } from 'react'

import logo from '@/assets/logo/logo-animated-without-background.gif'
import InputText from '@/components/Form/InputText'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { Container, InputFields, Message, TitleAndLogo } from './styles'
import InputMask from '@/components/Form/InputMask'

import { INITIAL_PAGE } from '@/routes/constants/namedRoutes/routes'
import { useLoading } from '@/hooks/useLoading'
import { useHistory } from 'react-router'
import { useModal } from '@/hooks/useModal'
import apiAdmin from '@/services/apiAdmin'

interface ErrorsState {
  name: string
  email: boolean
  phone: string
}

export const AddUserOnWaitList: React.FC = () => {
  const { Loading } = useLoading()
  const history = useHistory()
  const { closeModal } = useModal()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const onConfirm = async () => {
    // if (!name.length) {
    //   setErrors({ ...errors, name: 'tefdste' })
    // } else {
    //   setErrors({ ...errors, name: '' })
    // }
    // if (!email.length) {
    //   setErrors({ ...errors, email: 'teste' })
    // } else {
    //   setErrors({ ...errors, email: '' })
    // }
    // if (!phone.length) {
    //   setErrors({ ...errors, phone: 'teste' })
    // } else {
    //   setErrors({ ...errors, phone: '' })
    // }

    // if (!errors.name.length || !errors.email.length || !errors.phone.length) {
    //   return
    // }

    try {
      Loading.turnOn()

      const { data } = await apiAdmin.get('/plano/regiao')

      history.push(INITIAL_PAGE)
      closeModal()
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
      <Message>
        <h2>
          No momento não possuímos planos para a sua região. <br />
          Por favor, deixe o seu contato.
        </h2>
      </Message>
      <InputFields>
        <InputText
          label="Nome Completo:"
          value={name}
          setValue={setName}
          hasError={!!errors.name}
          msgError={errors.name}
        />
        <InputText
          label="E-mail*:"
          value={email}
          setValue={setEmail}
          hasError={!!errors.email}
          msgError={errors.email}
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
        <ButtonPrimary onClick={onConfirm}>Enviar</ButtonPrimary>
      </footer>
    </Container>
  )
}
