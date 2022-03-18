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

const ProfissionalInformation: React.FC = () => {
  const [name, setName] = useState('')
  const [profissionalName, setProfissionalName] = useState('')
  const [cpf, setCpf] = useState('')
  const [receiveService, setReceiveService] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [specialtys, setSpecialtys] = useState([])
  const [clinics, setClinics] = useState([])

  const [errorMessage] = useMessage()
  const { step, nextStep, setProfissionalInfo, errors, setErrors } =
    useRegisterSpecialist()
  const { hasErrors } = useValidator()

  const onNextStep = () => {
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
      return scrollOntoFieldError(errors)
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

  console.log(setProfissionalInfo)

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
              cpf: genericValidate(cpf, 'nome'),
            })
          }
          onKeyUp={() =>
            setErrors({
              ...errors,
              cpf: genericValidate(cpf, 'nome'),
            })
          }
        />
        <Select
          label="Receber Agendamentos:"
          value={receiveService}
          setValue={setReceiveService}
          name="receiveService"
          options={[
            { label: 'Sim', value: 'yes' },
            { label: 'Não', value: 'no' },
          ]}
          labelDefaultOption="Selecione"
        />

        <InputEmail
          initialEmail={email}
          onGetEmail={setEmail}
          hasError={(hasError) => setErrors({ ...errors, email: hasError })}
          checkHasError={errorMessage}
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
              phone: genericValidate(phone, 'nome'),
            })
          }
          onKeyUp={() =>
            setErrors({
              ...errors,
              phone: genericValidate(phone, 'nome'),
            })
          }
        />

        <MultSelectSpecialty
          specialtysProps={specialtys}
          setSpecialtysProps={setSpecialtys}
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
