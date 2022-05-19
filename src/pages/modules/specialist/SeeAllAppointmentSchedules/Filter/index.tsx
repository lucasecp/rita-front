import React, { useEffect, useState } from 'react'
/** Components */
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import InputMask from '@/components/Form/InputMask'
import InputAutoCompleteSpecialist from '../Components/InputAutoCompleteSpecialist'
import InputAutoCompletePatient from '../Components/InputAutoCompletePatient'
/** Styles */
import { BtnGroup, Container } from './styles'
/** Helpers */
import { verifyTypedFields } from '../helpers/verifyTypedFields'
import clearSpecialCharacters from '@/helpers/clearSpecialCharacters'
import { fieldsApi } from '../static/fieldsApi'
import { parse, isValid, format } from 'date-fns'
import InputText from '@/components/Form/InputText'

interface FilterProps {
  setFilters: React.Dispatch<React.SetStateAction<any[]>>
}

const Filter: React.FC<FilterProps> = ({ setFilters }) => {
  const [clinic, setClinic] = useState('')
  const [patient, setPatient] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [errors, setErrors] = useState({
    clinic: '',
    startTime: '',
    endTime: '',
    patient: '',
    startDate: '',
    endDate: '',
  })

  let arrayQuery = [
    { name: fieldsApi.DATA_INICIAL, value: startDate },
    { name: fieldsApi.DATA_FINAL, value: endDate },
    { name: fieldsApi.HORARIO_INICIO, value: startTime },
    { name: fieldsApi.HORARIO_FIM, value: endTime },
    { name: fieldsApi.CLINICA, value: clinic },
    { name: fieldsApi.PACIENTE, value: patient },
  ]

  const removeLocalStorages = () => {
    window.localStorage.removeItem(
      '@Rita/InputAutoCompleteSpecialist/IdSpecialist',
    )
    window.localStorage.removeItem('@Rita/InputAutoCompletePatient/IdPatient')
    window.localStorage.removeItem('@Rita/InputAutoCompletePatient/patients')
  }

  useEffect(() => {
    removeLocalStorages()
    setFilters(verifyTypedFields(arrayQuery))
  }, [])

  const clearFields = () => {
    removeLocalStorages()
    setClinic('')
    setPatient('')
    setStartDate('')
    setEndDate('')
    setStartTime('')
    setEndTime('')
    setFilters([])
    setErrors({
      clinic: '',
      startTime: '',
      endTime: '',
      patient: '',
      startDate: '',
      endDate: '',
    })
  }

  const _setErrors = () => {
    setErrors({
      clinic: '',
      startTime: '',
      endTime: '',
      patient: '',
      startDate: '',
      endDate: '',
    })
  }
  const hasErrors = () => {
    let newErrors = false
    setErrors({ ...errors, patient: '', clinic: '' })

    if (patient.length < 3 && patient) {
      setErrors((errors) => ({
        ...errors,
        patient: 'Informe 3 caracteres ou mais.',
      }))
      newErrors = true
    }

    if (clinic.length < 3 && clinic) {
      setErrors((errors) => ({
        ...errors,
        clinic: 'Informe 3 caracteres ou mais',
      }))
      newErrors = true
    }
    return newErrors
  }

  const onFilter = () => {
    if (hasErrors()) {
      return
    }
    if (startDate !== '') {
      /** Para evitar catch Invalid Date */
      const parseDate = parse(startDate, 'dd/MM/yyyy', new Date())
      const dateFormated = format(parseDate, 'yyyy-MM-dd')
      arrayQuery = arrayQuery.map((item) => {
        if (item.name === fieldsApi.DATA_INICIAL) {
          item.value = dateFormated
          return item
        } else {
          return item
        }
      })
    }
    if (endDate !== '') {
      /** Para evitar catch Invalid Date */
      const parseDate = parse(endDate, 'dd/MM/yyyy', new Date())
      const dateFormated = format(parseDate, 'yyyy-MM-dd')
      arrayQuery = arrayQuery.map((item) => {
        if (item.name === fieldsApi.DATA_FINAL) {
          item.value = dateFormated
          return item
        } else {
          return item
        }
      })
    }

    setFilters(verifyTypedFields(arrayQuery))
    _setErrors()
  }

  const onBlurDateValidate = (field: string) => {
    const fieldDate = {
      startDate: startDate,
      endDate: endDate,
    }
    const DateWithOutCharacters = clearSpecialCharacters(fieldDate[field])
    if (DateWithOutCharacters !== '') {
      const dateFormated = parse(fieldDate[field], 'dd/MM/yyyy', new Date())
      const result = isValid(dateFormated)
      if (!result) {
        setErrors({ ...errors, [field]: 'Data inválida!' })
      } else {
        setErrors({ ...errors, [field]: '' })
      }
    } else {
      setErrors({ ...errors, [field]: '' })
    }
  }

  return (
    <Container>
      <div>
        <InputText
          label="Clínica:"
          setValue={setClinic}
          value={clinic}
          variation="secondary"
          hasError={!!errors.clinic}
          msgError={errors.clinic}
        />
        <InputText
          label="Paciente:"
          setValue={setPatient}
          value={patient}
          variation="secondary"
          hasError={!!errors.patient}
          msgError={errors.patient}
        />
      </div>
      <div>
        <section>
          <InputMask
            mask="99/99/9999"
            label="Data Inicial:"
            value={startDate}
            setValue={setStartDate}
            hasError={!!errors.startDate}
            msgError={errors.startDate}
            variation="secondary"
            placeholder="00/00/0000"
            onBlur={() => onBlurDateValidate('startDate')}
          />
          <InputMask
            mask="99/99/9999"
            label="Data Final:"
            value={endDate}
            setValue={setEndDate}
            hasError={!!errors.endDate}
            msgError={errors.endDate}
            variation="secondary"
            placeholder="00/00/0000"
            onBlur={() => onBlurDateValidate('endDate')}
          />
          <InputMask
            mask="99:99"
            label="Hora Início:"
            value={startTime}
            setValue={setStartTime}
            clinic="startTime"
            variation="secondary"
            placeholder="00:00"
          />

          <InputMask
            mask="99:99"
            label="Hora Fim:"
            value={endTime}
            setValue={setEndTime}
            clinic="endTime"
            variation="secondary"
            placeholder="00:00"
          />
        </section>
        <BtnGroup>
          <OutlineButton small variation="red" onClick={() => clearFields()}>
            Limpar Filtro
          </OutlineButton>
          <ButtonPrimary small onClick={onFilter}>
            Filtrar Resultados
          </ButtonPrimary>
        </BtnGroup>
      </div>
    </Container>
  )
}

export default Filter
