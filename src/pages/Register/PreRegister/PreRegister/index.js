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
import { useLoading } from '@/hooks/useLoading'
import { useModal } from '@/hooks/useModal'
import ContactUs from '../messages/error/ContactUs'
import { REGISTER_PATIENT } from '@/routes/constants/namedRoutes/routes'

const MESSAGEAPI = {
  LAST_TRY: 'Ultima tentativa antes de ser bloqueado definitivamente',
  DENIED: 'Usuario Bloqueado',
  INVALID_DATA: 'Dados inválido',
}
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
    document.title = 'Rita Saúde | Registrar'
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
    if (userData?.status === 'N') return showMessage(ContactUs)
    history.push(REGISTER_PATIENT, { userData: { cpf: userData.cpf } })
  }

  const onForwardData = async () => {
    isDataMatch = true
    isLastTry = false
    isBlocked = false

    if (choice === 'email') {
      if (!isEmail(email)) {
        isDataMatch = false
      }
    }

    if (choice === 'phone') {
      if (!(phone.trim().length === 15)) {
        isDataMatch = false
      }
    }

    try {
      Loading.turnOn()
      const { data } = await apiPatient.post(
        '/paciente/token',
        choice === 'email'
          ? {
              cpf: userData.cpf,
              email: email.trim(),
            }
          : {
              cpf: userData.cpf,
              celular: phone.trim(),
            },
      )
      const ultimaTentativa = data?.ultimaTentativa
      isLastTry = ultimaTentativa
    } catch ({ response }) {
      const messageFromApi = response?.data.message
      const statusFromApi = response?.status

      if (statusFromApi === 400) {
        if (
          messageFromApi === MESSAGEAPI.INVALID_DATA ||
          (messageFromApi !== MESSAGEAPI.DENIED &&
            messageFromApi !== MESSAGEAPI.LAST_TRY)
        ) {
          isDataMatch = false
        }
        if (messageFromApi === MESSAGEAPI.LAST_TRY) {
          isLastTry = true
        }

        if (messageFromApi === MESSAGEAPI.DENIED) {
          isBlocked = true
        }
      }
    } finally {
      Loading.turnOff()
    }

    if (isBlocked) {
      return showMessage(Denied)
    }
    if (!isDataMatch) {
      return showMessage(DataDontMatch, userData)
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
      true,
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
