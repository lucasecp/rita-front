import React, { useState, useEffect } from 'react'
import { Container } from './styles'
import InputText from '@/components/Form/InputText/index'
import { Select } from '@/components/Form/Select/index'
import { UF } from '@/constants/ufs'
import FooterNextStep from '../../components/FooterNextStep'
import InputMask from '@/components/Form/InputMask'
import { MultSelectClinics } from '@/components/smarts/MultSelectClinics/index'
import { MultSelectSpecialty } from '@/components/smarts/MultSelectSpecialty/index'
import { InputEmail } from '@/components/smarts/InputEmail'
import { useMessage } from '@/hooks/useMessage'
import { useRegisterSpecialist } from '../../hooks'
import { genericValidate } from '../../helpers/validatorFields'
import { useValidator } from '../../hooks/useValidator'
import { scrollOntoFieldError } from '@/helpers/scrollOntoFieldError'
import { validatePhone } from '@/helpers/validateFields/validatePhone'
import { validateCPF } from '@/helpers/validateFields/validateCPF'
import { MultiSelectOption } from '../../../../../components/Form/MultSelect/index';

const ProfissionalInformation: React.FC = () => {
  const [name, setName] = useState('')
  const [profissionalName, setProfissionalName] = useState('')
  const [cpf, setCpf] = useState('')
  const [receiveService, setReceiveService] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [specialtys, setSpecialtys] = useState<MultiSelectOption[]>([])
  const [clinics, setClinics] = useState<MultiSelectOption[]>([])
  const [toggleClick, setToggleClick] = useState(0)

  const [errorMessage, sendErrorMessage] = useMessage()
  const { step, nextStep, setProfissionalInfo, errors, setErrors } =
    useRegisterSpecialist()
  const { hasErrors } = useValidator()

  const onNextStep = () => {
    sendErrorMessage()
    if (
      hasErrors({
        name,
        profissionalName,
        cpf,
        receiveService,
        email,
        phone,
        specialtys,
        clinics,
      })
    ) {
      return setToggleClick(Math.random() * (10 - 3) + 3)
    }
    nextStep()
  }

  useEffect(() => {
    setProfissionalInfo({
      name,
      profissionalName,
      cpf,
      receiveService,
      email,
      phone,
      specialtys,
      clinics,
    })
  }, [
    name,
    profissionalName,
    cpf,
    receiveService,
    email,
    phone,
    specialtys,
    clinics,
  ])

  useEffect(() => {
    if (toggleClick !== 0) {
      scrollOntoFieldError(errors)
    }
  }, [toggleClick])


  return (
    <Container hidden={step !== 2}>
      <h2>Dados do Especialista</h2>
      <div>
        <InputText
          label="Nome Completo:"
          value={name}
          setValue={setName}
          hasError={!!errors.name}
          msgError={errors.name}
          onBlur={() =>
            setErrors({
              ...errors,
              name: genericValidate(name, 'nome'),
            })
          }
          onKeyUp={() =>
            setErrors({
              ...errors,
              name: genericValidate(name, 'nome'),
            })
          }
          name="name"
        />

        <InputText
          label="Nome Profissional:"
          value={profissionalName}
          setValue={setProfissionalName}
          name="profissionalName"
          hasError={!!errors.profissionalName}
          msgError={errors.profissionalName}
          onBlur={() =>
            setErrors({
              ...errors,
              profissionalName: genericValidate(
                profissionalName,
                'nome profissional',
              ),
            })
          }
          onKeyUp={() =>
            setErrors({
              ...errors,
              profissionalName: genericValidate(
                profissionalName,
                'nome profissional',
              ),
            })
          }
        />

        <InputMask
          mask="999.999.999-99"
          label="CPF:"
          value={cpf}
          setValue={setCpf}
          name="cpf"
          hasError={!!errors.cpf}
          msgError={errors.cpf}
          onBlur={() =>
            setErrors({
              ...errors,
              cpf: validateCPF(cpf),
            })
          }
          onKeyUp={() =>
            setErrors({
              ...errors,
              cpf: validateCPF(cpf),
            })
          }
        />
        <Select
          label="Receber Agendamentos:"
          labelDefaultOption="Selecione"
          value={receiveService}
          setValue={setReceiveService}
          name="receiveService"
          options={[
            { label: 'Sim', value: 'yes' },
            { label: 'Não', value: 'no' },
          ]}
          hasError={!!errors.receiveService}
          msgError={errors.receiveService}
        />

        <InputEmail
          initialEmail={email}
          onGetEmail={setEmail}
          hasError={(hasError) =>
            toggleClick !== 0 && setErrors({ ...errors, email: hasError })
          }
          checkHasError={errorMessage}
          onKeyUp={sendErrorMessage}
          onBlur={sendErrorMessage}
        />

        <InputMask
          mask="(99) 99999-9999"
          label="Celular:"
          value={phone}
          setValue={setPhone}
          name="phone"
          hasError={!!errors.phone}
          msgError={errors.phone}
          onBlur={() =>
            setErrors({
              ...errors,
              phone: validatePhone(phone),
            })
          }
          onKeyUp={() =>
            setErrors({
              ...errors,
              phone: validatePhone(phone),
            })
          }
        />

        <MultSelectSpecialty
          specialtys={specialtys}
          setSpecialtys={setSpecialtys}
          errors={errors}
          setErrors={setErrors}
        />

        <MultSelectClinics
          clinic={clinics}
          setClinic={setClinics}
          errors={errors}
          setErrors={setErrors}
        />
      </div>
      <FooterNextStep onClickNextStep={onNextStep} />
    </Container>
  )
}

export default ProfissionalInformation
