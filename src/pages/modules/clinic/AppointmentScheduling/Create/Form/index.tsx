import React, { useState, useEffect } from 'react'
import InputText from '@/components/Form/InputText'
import InputMask from '@/components/Form/InputMask'
import { Container } from './styles'
import { SelectSpecialists } from './components/Selectspecialist'
import { SelectSpecialty } from './components/SelectSpecialty'
import { SelectTime } from './components/SelectTime'
import OutlineButton from '@/components/Button/Outline/index'
import ButtonPrimary from '@/components/Button/Primary'
import { InputCpf } from './components/InputCpf/index'
import { ErrorsI } from './types'
import { isFuture, isToday, isValid, parse } from 'date-fns'
import { scrollOntoFieldError } from '@/helpers/scrollOntoFieldError'
import { useModal } from '@/hooks/useModal'
import Confirm from './messages/Confirm'
import Cancel from './messages/Cancel'

const Form: React.FC = () => {
  const [specialist, setSpecialist] = useState<string | number>('')

  const [specialty, setSpecialty] = useState<string | number>('')

  const [specialtyName, setSpecialtyName] = useState('')

  const [specialistName, setSpecialistName] = useState('')

  const [patientName, setPatientName] = useState('')

  const [cpf, setCpf] = useState('')

  const [date, setDate] = useState('')

  const [time, setTime] = useState('')

  const [errors, setErrors] = useState<ErrorsI>({} as ErrorsI)

  const [idPatient, setIdPatient] = useState<number>()

  const [clickOnSave, setClickOnSave] = useState(0)

  const { showMessage } = useModal()

  const validateDate = () => {
    const dateformated = parse(date, 'dd/MM/yyyy', new Date())

    const valid = isValid(dateformated)

    const dateIsFuture = isFuture(dateformated)

    const dateIsToday = isToday(dateformated)

    if ((!dateIsFuture && !dateIsToday) || !valid) {
      return setErrors((prevErrors) => ({
        ...prevErrors,
        date: 'Data inválida',
      }))
    }
    setErrors((prevErrors) => ({ ...prevErrors, date: '' }))
  }

  const hasErrorOnFields = (fields: any) => {
    let error = false
    const diferentError = Object.values(errors).some((error) => error)
    if (diferentError) {
      return true
    }

    for (const field in fields) {
      if (!fields[field] || !fields[field].length) {
        setErrors((errors) => ({ ...errors, [field]: 'Campo obrigatório' }))
        error = true
      }
    }
    return error
  }

  const onScheduling = async () => {
    setClickOnSave(Math.random() * (10 - 3) + 3)

    if (hasErrorOnFields({ specialist, specialty, cpf, date, time })) {
      return
    }
    setErrors({} as ErrorsI)

    const data = {
      specialty: Number(specialty),
      cpf,
      date,
      time,
      title: '',
      origin: '',
      idPatient,
      patientName,
    }
    showMessage(Confirm, {
      data: { ...data, specialtyName, specialistName },
      idSpecialist: specialist,
    })
  }

  useEffect(() => {
    if (clickOnSave !== 0) {
      scrollOntoFieldError(errors)
    }
  }, [clickOnSave])

  return (
    <Container>
      <h2>Dados da Consulta</h2>
      <div>
        <section>
          <InputCpf
            cpf={cpf}
            setCpf={setCpf}
            setPatientName={setPatientName}
            setErrors={setErrors}
            error={errors.cpf}
            setIdPatient={setIdPatient}
            name="cpf"
          />
          <InputText label="Nome do Paciente:" value={patientName} disabled />
          <SelectSpecialists
            specialist={specialist}
            setSpecialist={setSpecialist}
            setSpecialistName={setSpecialistName}
            hasError={!!errors.specialist}
            msgError={errors.specialist}
            name="specialist"
          />
          <SelectSpecialty
            idDoctor={specialist}
            setSpecialty={setSpecialty}
            specialty={specialty}
            hasError={!!errors.specialty}
            msgError={errors.specialty}
            setSpecialtyName={setSpecialtyName}
            name="specialty"
          />
        </section>
        <div>
          <InputMask
            mask="99/99/9999"
            label="Data:"
            value={date}
            setValue={setDate}
            onKeyUp={validateDate}
            hasError={!!errors.date}
            msgError={errors.date}
            name="date"
          />
          <SelectTime
            idDoctor={435}
            setTime={setTime}
            time={time}
            date={date}
            hasError={!!errors.time}
            msgError={errors.time}
            name="time"
          />
        </div>
      </div>
      <footer>
        <OutlineButton onClick={() => showMessage(Cancel)}>
          Voltar
        </OutlineButton>
        <ButtonPrimary onClick={onScheduling}>Agendar</ButtonPrimary>
      </footer>
    </Container>
  )
}

export default Form
