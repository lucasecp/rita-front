import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText/index'
import { InputEmail } from '@/components/smarts/InputEmail'
import { scrollOntoFieldError } from '@/helpers/scrollOntoFieldError'
import { validateCPF } from '@/helpers/validateFields/validateCPF'
import { validatePhone } from '@/helpers/validateFields/validatePhone'
import { useMessage } from '@/hooks/useMessage'
import React, { useEffect, useState } from 'react'
import FooterNextStep from '../../../components/FooterNextStep'
import { genericValidate } from '../../../helpers/validatorFields'
import { useRegisterClinic } from '../../../hooks'
import { useValidator } from '../../../hooks/useValidator'
import { Container } from '../styles'

const TechnicalManager: React.FC = () => {
  const { step, nextStep, errors, setErrors, setTechnician } =
    useRegisterClinic()

  const { hasErrors } = useValidator()

  const [cpfTechnician, setCpfTechnician] = useState('')

  const [nameTechnician, setNameTechnician] = useState('')

  const [phoneTechnician, setPhoneTechnician] = useState('')

  const [emailTechnician, setEmailTechnician] = useState('')

  const [toggleClick, setToggleClick] = useState(0)

  const [errorMessage, sendErrorMessage] = useMessage()

  const onNextStep = () => {
    if (
      hasErrors({
        cpfTechnician,
        nameTechnician,
        phoneTechnician,
      })
    ) {
      sendErrorMessage()

      return setToggleClick(Math.random() * (10 - 3) + 3)
    }
    nextStep()
  }
  useEffect(() => {
    setTechnician({
      cpfTechnician,
      nameTechnician,
      phoneTechnician,
      emailTechnician,
    })
  }, [cpfTechnician, nameTechnician, phoneTechnician, emailTechnician])

  useEffect(() => {
    if (toggleClick !== 0) {
      scrollOntoFieldError(errors)
    }
  }, [toggleClick])

  return (
    <Container hidden={step !== 3}>
      <h2>Dados do Responsável Técnico</h2>
      <div>
        <InputMask
          mask="999.999.999-99"
          label="CPF*:"
          value={cpfTechnician}
          setValue={setCpfTechnician}
          cep="cpfTechnician"
          hasError={!!errors.cpfTechnician}
          msgError={errors.cpfTechnician}
          onBlur={() =>
            setErrors({
              ...errors,
              cpfTechnician: validateCPF(cpfTechnician),
            })
          }
          onKeyUp={() =>
            setErrors({
              ...errors,
              cpfTechnician: validateCPF(cpfTechnician),
            })
          }
        />

        <InputText
          label="Nome Completo*:"
          value={nameTechnician}
          setValue={setNameTechnician}
          hasError={!!errors?.nameTechnician}
          msgError={errors?.nameTechnician}
          maxLength={100}
          onBlur={() =>
            setErrors({
              ...errors,
              nameTechnician: genericValidate(nameTechnician, 'Nome Completo'),
            })
          }
          onKeyUp={() =>
            setErrors({
              ...errors,
              nameTechnician: genericValidate(nameTechnician, 'Nome Completo'),
            })
          }
          name="nameTechnician"
        />

        <InputEmail
          initialEmail={emailTechnician}
          onGetEmail={setEmailTechnician}
          hasError={(hasError) =>
            toggleClick !== 0 &&
            setErrors({ ...errors, emailTechnician: hasError })
          }
          checkHasError={errorMessage}
          onKeyUp={sendErrorMessage}
          onBlur={sendErrorMessage}
        />

        <InputMask
          mask="(99) 99999-9999"
          label="Celular*:"
          value={phoneTechnician}
          setValue={setPhoneTechnician}
          cep="phoneTechnician"
          hasError={!!errors.phoneTechnician}
          msgError={errors.phoneTechnician}
          onBlur={() =>
            setErrors({
              ...errors,
              phoneTechnician: validatePhone(phoneTechnician),
            })
          }
          onKeyUp={() =>
            setErrors({
              ...errors,
              phoneTechnician: validatePhone(phoneTechnician),
            })
          }
        />
      </div>

      <FooterNextStep onClickNextStep={onNextStep} />
    </Container>
  )
}

export default TechnicalManager
