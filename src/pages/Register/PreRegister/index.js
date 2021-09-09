import React, { useEffect, useState } from 'react'
import { RadioGroup } from '@material-ui/core'

import RegisterLayout from '@/components/Layout/RegisterLayout'
import Modal from '@/components/Modal'
import InputText from '@/components/Form/InputText'
import InputMask from '@/components/Form/InputMask'
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import RadioButton from '@/styles/components/RadioButton'

import { Content } from './styles'

function PreRegister() {
  const [showModal, setShowModal] = useState(false)
  const [message, setMessage] = useState(null)
  const [choice, setChoice] = useState('')

  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const data = {
    phone: '(**) *****-**23',
    email: '*******uza23@gmail.com',
  }

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

  function onChoiceChange(event) {
    setChoice(event.target.value)
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
                    mask="(##) #####-####"
                    placeHolder="(00) 00000-0000"
                    value={phone}
                    setValue={setPhone}
                    name="phone"
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
                    placeHolder="nomesobrenome@email.com"
                    value={email}
                    setValue={setEmail}
                  />
                )}
              </section>
            )}
          </RadioGroup>
          <footer>
            {choice && <ButtonPrimary>Encaminhar</ButtonPrimary>}
            <OutlineButton>Não reconheço esses dados</OutlineButton>
          </footer>
        </Content>
      </RegisterLayout>
      <Modal show={showModal}>{message}</Modal>
    </>
  )
}

export default PreRegister
