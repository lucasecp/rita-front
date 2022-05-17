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
import { ErrorsI, DataI } from '../types'
import { isFuture, isToday, isValid, parse } from 'date-fns'
import { scrollOntoFieldError } from '@/helpers/scrollOntoFieldError'
import { useModal } from '@/hooks/useModal'
import Cancel from './messages/Cancel'
import apiAdmin from '@/services/apiAdmin'
import { toApi } from '../adapters'
import { toast } from '@/styles/components/toastify'
import { useLoading } from '@/hooks/useLoading'
import { useAuth } from '@/hooks/login'
import { CLINIC_SEE_ALL_APPOINTMENT_SCHEDULES } from '@/routes/constants/namedRoutes/routes'
import { useHistory } from 'react-router'

interface FormProps {
  data: DataI
  setToggleNewRequest: React.Dispatch<React.SetStateAction<number>>
}

const Form: React.FC<FormProps> = ({ data, setToggleNewRequest }) => {
  const [specialist, setSpecialist] = useState<string | number>('')

  const [specialty, setSpecialty] = useState<string | number>('')

  const [patientName, setPatientName] = useState('')

  const [cpf, setCpf] = useState('')

  const [date, setDate] = useState('')

  const [time, setTime] = useState('')

  const [errors, setErrors] = useState<ErrorsI>({} as ErrorsI)

  const [idPatient, setIdPatient] = useState<number>()

  const [clickOnSave, setClickOnSave] = useState(0)

  const [isEditing, setIsEditing] = useState(false)

  const { showMessage } = useModal()

  const { Loading } = useLoading()

  const history = useHistory()

  const { user } = useAuth()

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
      if (!fields[field]) {
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

    try {
      Loading.turnOn()

      const dataMaped = toApi({
        specialty: Number(data.specialty),
        cpf,
        date,
        time,
        title: '',
        origin: '',
        idPatient,
        patientName,
      })

      await apiAdmin.put(
        `/clinica/${user.idClinica}/medico/${specialist}/agenda-pessoal/${data.idSchedule}`,
        dataMaped,
      )

      toast.success('Agendamento feito com sucesso')
    } catch (error) {
      toast.error(error.response.message || 'Erro ao agendar consulta')
    } finally {
      Loading.turnOff()
    }
  }

  useEffect(() => {
    if (clickOnSave !== 0) {
      scrollOntoFieldError(errors)
    }
  }, [clickOnSave])

  useEffect(() => {
    setCpf(data.cpf || '')
    setSpecialty(data.specialty || '')
    setDate(data.date || '')
    setTime(data.time || '')
    setSpecialist(data.specialist || '')
  }, [data])
  console.log(data)

  const fieldsHadChange = (fields: any): boolean => {
    let result = false
    for (const field in fields) {
      if (fields[field] !== data[field]) {
        result = true
        break
      }
    }
    return result
  }

  const onCancel = () => {
    if (fieldsHadChange({ specialist, specialty, cpf, date, time })) {
      return showMessage(Cancel, {
        setIsEditing,
        setToggleNewRequest,
        setErrors,
      })
    }
    setIsEditing(false)
    setToggleNewRequest(Math.random() * (10 - 3) + 3)
  }

  const onBack = () => {
    history.push(CLINIC_SEE_ALL_APPOINTMENT_SCHEDULES)
  }

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
            disabled={!isEditing}
          />
          <InputText label="Nome do Paciente:" value={patientName} disabled />
          <SelectSpecialists
            specialist={specialist}
            setSpecialist={setSpecialist}
            hasError={!!errors.specialist}
            msgError={errors.specialist}
            name="specialist"
            disabled={!isEditing}
          />
          <SelectSpecialty
            idDoctor={specialist}
            setSpecialty={setSpecialty}
            specialty={specialty}
            hasError={!!errors.specialty}
            msgError={errors.specialty}
            name="specialty"
            disabled={!isEditing}
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
            disabled={!isEditing}
          />
          <SelectTime
            idDoctor={435}
            setTime={setTime}
            time={time}
            date={date}
            hasError={!!errors.time}
            msgError={errors.time}
            name="time"
            disabled={!isEditing}
          />
        </div>
      </div>
      <footer>
        {isEditing ? (
          <>
            <OutlineButton onClick={onCancel}>Cancelar</OutlineButton>
            <ButtonPrimary onClick={onScheduling}>Salvar</ButtonPrimary>
          </>
        ) : (
          <>
            <OutlineButton onClick={onBack}>Voltar</OutlineButton>
            <ButtonPrimary onClick={() => setIsEditing(true)}>
              Editar
            </ButtonPrimary>
          </>
        )}
      </footer>
    </Container>
  )
}

export default Form
