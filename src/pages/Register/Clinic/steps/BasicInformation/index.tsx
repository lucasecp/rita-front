import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText/index'
import { MultiSelectOption } from '@/components/Form/MultSelect'
import { InputEmail } from '@/components/smarts/InputEmail'
import { MultSelectSpecialty } from '@/components/smarts/MultSelectSpecialty'
import { scrollOntoFieldError } from '@/helpers/scrollOntoFieldError'
import { validateCNPJfield } from '@/helpers/validateFields/validateCNPJ'
import { validateTwoPhoneTypes } from '@/helpers/validateFields/validateTwoPhoneTypes'
import { useMessage } from '@/hooks/useMessage'
import React, { useEffect, useState } from 'react'
import FooterNextStep from '../../components/FooterNextStep'
import Photo from '../../components/Photo'
import { genericValidate } from '../../helpers/validatorFields'
import { useRegisterClinic } from '../../hooks'
import { useValidator } from '../../hooks/useValidator'
import { Container } from './styles'

const BasicInformation: React.FC = () => {
  const { step, nextStep, errors, setErrors, setbasicInformation } =
    useRegisterClinic()

  const { hasErrors } = useValidator()

  const [cnpj, setCnpj] = useState('')

  const [nameClinic, setNameClinic] = useState('')

  const [socialReason, setSocialReason] = useState('')

  const [phoneClinic, setPhoneClinic] = useState('')

  const [emailClinic, setEmailClinic] = useState('')

  const [specialtys, setSpecialtys] = useState<MultiSelectOption[]>([])

  const [toggleClick, setToggleClick] = useState(0)

  const [errorMessage, sendErrorMessage] = useMessage()

  const onNextStep = () => {
    if (
      hasErrors({
        cnpj,
        nameClinic,
        phoneClinic,
        specialtys,
        socialReason,
      })
    ) {
      sendErrorMessage()
      return setToggleClick(Math.random() * (10 - 3) + 3)
    }
    nextStep()
  }
  useEffect(() => {
    setbasicInformation({
      cnpj,
      nameClinic,
      socialReason,
      phoneClinic,
      emailClinic,
    })
  }, [cnpj, nameClinic, phoneClinic, emailClinic])

  useEffect(() => {
    if (toggleClick !== 0) {
      scrollOntoFieldError(errors)
    }
  }, [toggleClick])
  console.log(errors)

  return (
    <Container hidden={step !== 1}>
      <Photo />
      <h2>Dados do Clínica</h2>
      <div>
        <InputMask
          mask="99.999.999/9999-99"
          label="CNPJ*:"
          value={cnpj}
          setValue={setCnpj}
          cep="cnpj"
          hasError={!!errors.cnpj}
          msgError={errors.cnpj}
          onBlur={() =>
            setErrors({
              ...errors,
              cnpj: validateCNPJfield(cnpj),
            })
          }
          onKeyUp={() =>
            setErrors({
              ...errors,
              cnpj: validateCNPJfield(cnpj),
            })
          }
        />

        <InputText
          label="Nome Fantasia:"
          value={nameClinic}
          setValue={setNameClinic}
          hasError={!!errors?.nameClinic}
          msgError={errors?.nameClinic}
          maxLength={100}
          onBlur={() =>
            setErrors({
              ...errors,
              nameClinic: genericValidate(nameClinic, 'Nome fantasia'),
            })
          }
          onKeyUp={() =>
            setErrors({
              ...errors,
              nameClinic: genericValidate(nameClinic, 'Nome fantasia'),
            })
          }
          name="nameClinic"
        />

        <InputText
          label="Razão Social:"
          value={socialReason}
          setValue={setSocialReason}
          hasError={!!errors?.socialReason}
          msgError={errors?.socialReason}
          maxLength={100}
          onBlur={() =>
            setErrors({
              ...errors,
              socialReason: genericValidate(socialReason, 'Razão social'),
            })
          }
          onKeyUp={() =>
            setErrors({
              ...errors,
              socialReason: genericValidate(socialReason, 'Razão social'),
            })
          }
          onlyLetter
          name="socialReason"
        />

        <InputMask
          mask="(99) 99999-9999"
          label="Telefone/Celular para agendamento*:"
          value={phoneClinic}
          setValue={setPhoneClinic}
          cep="phoneClinic"
          hasError={!!errors.phoneClinic}
          msgError={errors.phoneClinic}
          onBlur={() =>
            setErrors({
              ...errors,
              phoneClinic: validateTwoPhoneTypes(phoneClinic),
            })
          }
          onKeyUp={() =>
            setErrors({
              ...errors,
              phoneClinic: validateTwoPhoneTypes(phoneClinic),
            })
          }
        />
        <InputEmail
          initialEmail={emailClinic}
          onGetEmail={setEmailClinic}
          hasError={(hasError) =>
            toggleClick !== 0 && setErrors({ ...errors, emailClinic: hasError })
          }
          checkHasError={errorMessage}
          onKeyUp={sendErrorMessage}
          onBlur={sendErrorMessage}
        />

        <MultSelectSpecialty
          specialtys={specialtys}
          setSpecialtys={setSpecialtys}
          errors={errors}
          variation="secondary"
          label="Especialidades"
          color="green"
        />
      </div>
      <FooterNextStep onClickNextStep={onNextStep} />
    </Container>
  )
}

export default BasicInformation
