import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import InputMask from '@/components/Form/InputMask'
import RegisterLayout from '@/components/Layout/RegisterLayout'
import RadioButton from '@/styles/components/RadioButton'
import { RadioGroup } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Content } from './styles'

function ConfDados() {
  const [showModal] = useState(false)
  const [message, setMessage] = useState(null)
  const [choice, setChoice] = useState('')

  const [phone, setPhone] = useState('')

  const data = {
    phone: '(**) *****-**23',
  }

  useEffect(() => {
    if (data.phone) {
      return setChoice('phone')
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
          </RadioGroup>
          <footer>
            {choice && <OutlineButton>Não reconheço esses dados</OutlineButton>}
            <ButtonPrimary>Encaminhar</ButtonPrimary>
          </footer>
        </Content>
      </RegisterLayout>
    </>
  )
}

export default ConfDados
