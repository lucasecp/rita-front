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

const AdministrativeManager: React.FC = () => {
  const { step, registerClinic, errors, setErrors, setAdministrator } =
    useRegisterClinic()

  const { hasErrors } = useValidator()

  const [cpfAdministrator, setCpfAdministrator] = useState('')

  const [nameAdministrator, setNameAdministrator] = useState('')

  const [phoneAdministrator, setPhoneAdministrator] = useState('')

  const [emailAdministrator, setEmailTechnician] = useState('')

  const [toggleClick, setToggleClick] = useState(0)

  const [errorMessage, sendErrorMessage] = useMessage()

  const onNextStep = () => {
    if (
      hasErrors({
        cpfAdministrator,
        nameAdministrator,
        phoneAdministrator,
      })
    ) {
      sendErrorMessage()

      return setToggleClick(Math.random() * (10 - 3) + 3)
    }
    registerClinic()
  }

  useEffect(() => {
    setAdministrator({
      cpfAdministrator,
      nameAdministrator,
      phoneAdministrator,
      emailAdministrator,
    })
  }, [
    cpfAdministrator,
    nameAdministrator,
    phoneAdministrator,
    emailAdministrator,
  ])

  useEffect(() => {
    if (toggleClick !== 0) {
      scrollOntoFieldError(errors)
    }
  }, [toggleClick])

  return (
    <Container hidden={step !== 4}>
      <h2>Dados do Responsável Administrativo</h2>
      <div>
        <InputMask
          mask="999.999.999-99"
          label="CPF*:"
          value={cpfAdministrator}
          setValue={setCpfAdministrator}
          cep="cpfAdministrator"
          hasError={!!errors.cpfAdministrator}
          msgError={errors.cpfAdministrator}
          onBlur={() =>
            setErrors({
              ...errors,
              cpfAdministrator: validateCPF(cpfAdministrator),
            })
          }
          onKeyUp={() =>
            setErrors({
              ...errors,
              cpfAdministrator: validateCPF(cpfAdministrator),
            })
          }
        />

        <InputText
          label="Nome Completo*:"
          value={nameAdministrator}
          setValue={setNameAdministrator}
          hasError={!!errors?.nameAdministrator}
          msgError={errors?.nameAdministrator}
          maxLength={100}
          onBlur={() =>
            setErrors({
              ...errors,
              nameAdministrator: genericValidate(
                nameAdministrator,
                'Nome Completo',
              ),
            })
          }
          onKeyUp={() =>
            setErrors({
              ...errors,
              nameAdministrator: genericValidate(
                nameAdministrator,
                'Nome Completo',
              ),
            })
          }
          name="nameAdministrator"
        />

        <InputEmail
          initialEmail={emailAdministrator}
          onGetEmail={setEmailTechnician}
          hasError={(hasError) =>
            toggleClick !== 0 &&
            setErrors({ ...errors, emailAdministrator: hasError })
          }
          checkHasError={errorMessage}
          onKeyUp={sendErrorMessage}
          onBlur={sendErrorMessage}
        />

        <InputMask
          mask="(99) 99999-9999"
          label="Celular*:"
          value={phoneAdministrator}
          setValue={setPhoneAdministrator}
          cep="phoneAdministrator"
          hasError={!!errors.phoneAdministrator}
          msgError={errors.phoneAdministrator}
          onBlur={() =>
            setErrors({
              ...errors,
              phoneAdministrator: validatePhone(phoneAdministrator),
            })
          }
          onKeyUp={() =>
            setErrors({
              ...errors,
              phoneAdministrator: validatePhone(phoneAdministrator),
            })
          }
        />
      </div>
      <FooterNextStep onClickNextStep={onNextStep} />
    </Container>
  )
}

export default AdministrativeManager
