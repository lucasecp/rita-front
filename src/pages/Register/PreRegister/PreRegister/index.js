import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
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
import LastTry from '../messages/warning/LastTry'
import Denied from '../messages/error/Danied'
import isEmail from '@/helpers/isEmail'
import isPhone from '@/helpers/isPhone'

function PreRegister() {
  const [showModal, setShowModal] = useState(false)
  const [message, setMessage] = useState(null)
  const [choice, setChoice] = useState('')

  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const history = useHistory()

  const data = {
    phone: '(**) *****-**23',
    email: '*******uza23@gmail.com',
  }

  const isDataMatch = true
  const isLastTry = false
  const isBlocked = false

  useEffect(() => {
    if (data.phone && data.email) {
      return
    }

    if (data.phone) {
      return setChoice('phone')
    }

    if (data.email) {
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
    if (choice === 'email') {
      if (!isEmail(email)) {
        return showMessage(DataDontMatch)
      }

      // isDataMatch = await api.get('email');
    }

    if (choice === 'phone') {
      // if (!isPhone(phone)) {
      //   return showMessage(DataDontMatch)
      // }

      if (!(phone.length === 14)) {
        return showMessage(DataDontMatch)
      }

      // isDataMatch = await api.get('phone');
    }

    if (!isDataMatch) {
      return showMessage(DataDontMatch)
    }

    if (isLastTry) {
      return showMessage(LastTry)
    }

    if (isBlocked) {
      return showMessage(Denied)
    }

    return showMessage(InsertToken, choice === 'email' ? { email } : { phone })
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
            {data.phone && (
              <section>
                <RadioButton
                  value="phone"
                  label={`Celular: ${data.phone}`}
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
            {data.email && (
              <section>
                <RadioButton
                  value="email"
                  label={`E-mail: ${data.email}`}
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
            {choice && (
              <OutlineButton onClick={redirectToRegister}>
                Não reconheço esses dados
              </OutlineButton>
            )}
            <ButtonPrimary
              disabled={
                (choice === 'phone' && !phone) || (choice === 'email' && !email)
              }
              onClick={onForwardData}
            >
              Encaminhar
            </ButtonPrimary>
          </footer>
        </Content>
      </RegisterLayout>
      <Modal show={showModal} onCloseModal={setShowModal}>
        {message}
      </Modal>
    </>
  )
}

export default PreRegister
