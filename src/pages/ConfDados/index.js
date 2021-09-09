import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import InputMask from '@/components/Form/InputMask'
import RegisterLayout from '@/components/Layout/RegisterLayout'
import RadioButton from '@/styles/components/RadioButton'
import { RadioGroup } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Content } from './styles'

function PreRegister() {
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
<<<<<<< HEAD
                </div>
              ))}
            </Form>

            <InputText mask="(##)#####-####" placeholder="(00) 00000-0000" />
            <Col
              lg={6}
              className="d-flex justify-content-lg-end justify-content-center align-items-center mt-4 mt-lg-0"
            >
              <ButtonPrimary xl={4} lg={6} className="mx-3">
                Encaminhar
              </ButtonPrimary>
            </Col>
            <Col
              lg={6}
              className="d-flex justify-content-lg-end justify-content-center align-items-center mt-2 mt-lg-0"
            >
              <OutlineButton>Não reconheço esses dados</OutlineButton>
            </Col>
          </div>
          <Footer />
=======
                )}
              </section>
            )}
          </RadioGroup>
          <footer>
            {choice && <ButtonPrimary>Encaminhar</ButtonPrimary>}
            <OutlineButton>Não reconheço esses dados</OutlineButton>
          </footer>
>>>>>>> 976d68dbb51ba0fc958f99e6af153f92a372ce9b
        </Content>
      </RegisterLayout>
    </>
  )
}

export default PreRegister
