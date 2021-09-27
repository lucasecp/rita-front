import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { RadioGroup } from '@material-ui/core'

import RegisterLayout from '@/components/Layout/RegisterLayout'
import InputText from '@/components/Form/InputText'
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import RadioButton from '@/styles/components/RadioButton'

import { Content } from './styles'
import InsertToken from '../messages/InsertToken'
import DataDontMatch from '../messages/error/DataDontMatch'
import Denied from '../messages/error/Danied'
import isEmail from '@/helpers/isEmail'
import apiPatient from '@/services/apiPatient'
import InputMask from '@/components/Form/InputMask'
import { useLoading } from '@/context/useLoading'
import { useModal } from '@/context/useModal'

function PreRegister() {
  const history = useHistory()
  const location = useLocation()
  const { showMessage } = useModal()

  const userData = location.state

  if (!userData) {
    history.push('/')
    return null
  }

  const [choice, setChoice] = useState('')

  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const { Loading } = useLoading()

  let isDataMatch
  let isLastTry
  let isBlocked

  useEffect(() => {
    if (userData.phone && userData.email) {
      return
    }

    if (userData.phone) {
      return setChoice('phone')
    }

    if (userData.email) {
      return setChoice('email')
    }
  }, [])

  const onChoiceChange = (event) => {
    setChoice(event.target.value)
  }

  const redirectToRegister = () => {
    history.push('/cadastro/paciente')
  }

  const onForwardData = async () => {
    isDataMatch = true
    isLastTry = false
    isBlocked = false

    Loading.turnOn()

    if (choice === 'email') {
      if (!isEmail(email)) {
        isDataMatch = false
      }
    }

    if (choice === 'phone') {
      if (!(phone.length === 15)) {
        isDataMatch = false
      }
    }

    try {
      await apiPatient.post(
        '/paciente/token',
        choice === 'email'
          ? {
              cpf: userData.cpf,
              email,
            }
          : {
              cpf: userData.cpf,
              celular: phone,
            }
      )
    } catch ({ response }) {
      const messageFromApi = response?.data.message
      const statusFromApi = response?.status

      if (statusFromApi === 400) {
        if (messageFromApi === 'Dados inválido') {
          isDataMatch = false
        }

        if (
          messageFromApi ===
          'Ultima tentativa antes de ser bloqueado definitivamente'
        ) {
          isLastTry = true
        }

        if (messageFromApi === 'Usuario Bloqueado') {
          isBlocked = true
        }
      }
    } finally {
      Loading.turnOff()
    }

    if (!isDataMatch) {
      return showMessage(DataDontMatch, userData)
    }

    if (isBlocked) {
      return showMessage(Denied)
    }

    const propsToInComumSend = {
      isLastTry,
      cpf: userData.cpf,
    }

    return showMessage(
      InsertToken,
      choice === 'email'
        ? { ...propsToInComumSend, email }
        : { ...propsToInComumSend, phone },
      true
    )
  }

  return (
    <>
      <RegisterLayout>
        <Content>
          <h6>
            Para continuarmos, precisamos confirmar alguns dados. <br />
            Escolha uma das opções abaixo:
          </h6>
          <RadioGroup
            aria-label="choice"
            name="choice"
            value={choice}
            onChange={onChoiceChange}
          >
            {userData.phone && (
              <section>
                <RadioButton
                  value="phone"
                  label={`Celular: ${userData.phone}`}
                  checked={choice === 'phone'}
                />
                {choice === 'phone' && (
                  <InputMask
                    mask="(99) 99999-9999"
                    placeholder="(00) 00000-0000"
                    value={phone}
                    setValue={setPhone}
                  />
                )}
              </section>
            )}
            {userData.email && (
              <section>
                <RadioButton
                  value="email"
                  label={`E-mail: ${userData.email}`}
                  checked={choice === 'email'}
                />
                {choice === 'email' && (
                  <InputText
                    placeholder="nomesobrenome@email.com"
                    value={email}
                    setValue={setEmail}
                  />
                )}
              </section>
            )}
          </RadioGroup>
          <footer>
            <OutlineButton onClick={redirectToRegister}>
              Não reconheço esses dados
            </OutlineButton>
            {choice && (
              <ButtonPrimary
                disabled={
                  (choice === 'phone' && !phone) ||
                  (choice === 'email' && !email)
                }
                onClick={onForwardData}
              >
                Encaminhar
              </ButtonPrimary>
            )}
          </footer>
        </Content>
      </RegisterLayout>
    </>
  )
}

export default PreRegister
