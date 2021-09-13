import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { RadioGroup } from '@material-ui/core'

import RegisterLayout from '@/components/Layout/RegisterLayout'
import Modal from '@/components/Modal'
import InputText from '@/components/Form/InputText'
import InputMask from '@/components/Form/InputMask'
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import RadioButton from '@/styles/components/RadioButton'

import { Content } from './styles'
import InsertToken from '../messages/InsertToken'
import DataDontMatch from '../messages/error/DataDontMatch'
import Denied from '../messages/error/Danied'
import isEmail from '@/helpers/isEmail'
import isPhone from '@/helpers/isPhone'
import { isEmpty } from '@/helpers/isEmpty'
import api from '@/services/api'
import Loading from '@/components/Loading/RitaLoading'

function PreRegister() {
  const history = useHistory()
  const location = useLocation()

  const userData = location.state

  if (!userData) {
    history.push('/')
    return null
  }

  const [showModal, setShowModal] = useState(false)
  const [message, setMessage] = useState(null)
  const [choice, setChoice] = useState('')

  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const [isLoading, setIsLoading] = useState(false)

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

  const showMessage = (MessageComponent, props) => {
    setShowModal(true)
    setMessage(<MessageComponent {...props} onShowModal={setShowModal} />)
  }

  const onChoiceChange = (event) => {
    setChoice(event.target.value)
  }

  const redirectToRegister = () => {
    history.push('/cadastro')
  }

  const onForwardData = async () => {
    isDataMatch = true
    isLastTry = false
    isBlocked = false

    setIsLoading(true)

    if (choice === 'email') {
      if (!isEmail(email)) {
        return showMessage(DataDontMatch)
      }
    }

    if (choice === 'phone') {
      // if (!isPhone(phone)) {
      //   return showMessage(DataDontMatch)
      // }

      if (!(phone.length === 14)) {
        return showMessage(DataDontMatch)
      }
    }

    try {
      const response = await api.post(
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

      if (response.data.ultimaTentativa) {
        isLastTry = true
      }
    } catch ({ response }) {
      console.log(response)
      if (response.status === 400) {
        if (response.data.message === 'Usuario Bloqueado') {
          isBlocked = true
        } else {
          isDataMatch = false
        }
      }
    } finally {
      setIsLoading(false)
    }

    if (!isDataMatch) {
      return showMessage(DataDontMatch)
    }

    if (isBlocked) {
      return showMessage(Denied)
    }

    const propsToInComumSend = {
      isLastTry,
      cpf: userData.cpf,
      onLoading: setIsLoading,
    }

    return showMessage(
      InsertToken,
      choice === 'email'
        ? { ...propsToInComumSend, email }
        : { ...propsToInComumSend, phone }
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
                    mask="(##)#####-####"
                    placeholder="(00) 00000-0000"
                    value={phone}
                    setValue={setPhone}
                    name="phone"
                    isPhone
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
      <Modal show={showModal} onCloseModal={setShowModal}>
        {message}
      </Modal>
      <Loading active={isLoading} />
    </>
  )
}

export default PreRegister
