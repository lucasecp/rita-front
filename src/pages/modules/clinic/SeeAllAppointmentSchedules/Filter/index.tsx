import React, { useEffect, useState } from 'react'
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import InputText from '@/components/Form/InputText'
import CustomMultSelect, {
  MultiSelectOption,
} from '@/components/Form/MultSelect'
import MultSelectSpecialtys from '../Components/MultSelectSpecialtys'
import { BtnGroup, Container } from './styles'
import { verifyTypedFields } from '../helpers/verifyTypedFields'
import InputMask from '@/components/Form/InputMask'
import { fieldsApi } from '../static/fieldsApi'
import useQueryParams from './useQueryParams'
/** Helpers */
import { parse, isValid, format } from 'date-fns'

interface FilterProps {
  setFilters: React.Dispatch<React.SetStateAction<any[]>>
}

const Filter: React.FC<FilterProps> = ({ setFilters }) => {
  const local = useQueryParams()

  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [specialist, setSpecialist] = useState(local.specialist || '')
  const [patient, setPatient] = useState(local.patient || '')
  const [date, setDate] = useState(local.date || '')
  const [errors, setErrors] = useState({
    specialist: '',
    startTime: '',
    endTime: '',
    patient: '',
    date: ''
  })

  let arrayQuery = [
    { name: fieldsApi.DATA, value: date },
    { name: fieldsApi.HORARIO_INICIO, value: startTime },
    { name: fieldsApi.HORARIO_FIM, value: endTime },
  ]

  useEffect(() => {
    setFilters(verifyTypedFields(arrayQuery))
  }, [])

  const clearFields = () => {
    setSpecialist('')
    setPatient('')
    setDate('')
    setStartTime('')
    setEndTime('')
    setFilters([])
    _setErrors()
  }

  const _setErrors = () => {
    setErrors({ specialist: '', startTime: '', endTime: '', patient: '', date: '' })
  }

  const hasErrors = () => {
    let newErrors = false

    if (specialist.length < 3) {
      setErrors((errors) => ({ ...errors, specialist: 'Informe 3 letras ou mais' }))
      newErrors = true
    }else {
      setErrors((errors) => ({ ...errors, specialist: '' }))
    }
    if (patient.length < 3) {
      setErrors((errors) => ({ ...errors, patient: 'Informe 3 letras ou mais' }))
      newErrors = true
    }else {
      setErrors((errors) => ({ ...errors, patient: '' }))
    }
    if (date === '') {
      setErrors((errors) => ({ ...errors, date: 'Campo obrigatório.' }))
      newErrors = true
    }else {
      setErrors((errors) => ({ ...errors, date: '' }))
    }
    if (startTime == '') {
      setErrors((errors) => ({ ...errors, startTime: 'Campo obrigatório.' }))
      newErrors = true
    }else{
      setErrors((errors) => ({ ...errors, startTime: '' }))
    }
    if (endTime === '') {
      setErrors((errors) => ({ ...errors, endTime: 'Campo obrigatório.' }))
      newErrors = true
    }else{
      setErrors((errors) => ({ ...errors, endTime: '' }))
    }
    return newErrors
  }

  const onFilter = () => {
    if (hasErrors()) {
      return
    }
    _setErrors()
    let parseDate = parse(date, 'dd/MM/yyyy', new Date())
    const dateFormated = format(parseDate, 'yyyy-MM-dd')
    arrayQuery = arrayQuery.map(item => {
      if(item.name === fieldsApi.DATA){
        item.value = dateFormated
        return item
      }else {
        return item
      }
    })
    setFilters(verifyTypedFields(arrayQuery))
  }

  const onBlurDateValidate = () => {
    hasErrors()
    const dateFormated = parse(date, 'dd/MM/yyyy', new Date())
    const result = isValid(dateFormated)
    if(!result){
      setErrors({...errors, date: 'Data inválida!' })
    }else {
      setErrors({...errors, date: '' })
    }
  }

  return (
    <Container>
      <div>
        <InputText
          variation="secondary"
          label="Especialista:"
          value={specialist}
          setValue={setSpecialist}
          maxLength={100}
          asError={!!errors.specialist}
          msgError={errors.specialist}
          onBlur={hasErrors}
        />
        <InputText
          variation="secondary"
          label="Paciente:"
          value={patient}
          setValue={setPatient}
          maxLength={100}
          hasError={!!errors.patient}
          msgError={errors.patient}
          onBlur={hasErrors}
        />
      </div>
      <div>
        <section>
          <InputMask
            mask="99/99/9999"
            label="Data:"
            value={date}
            setValue={setDate}
            specialist="startTime"
            hasError={!!errors.date}
            msgError={errors.date}
            variation="secondary"
            placeholder="00/00/0000"
            onBlur={onBlurDateValidate}
          />
          <InputMask
            mask="99:99"
            label="Hora Início:"
            value={startTime}
            setValue={setStartTime}
            specialist="startTime"
            hasError={!!errors.startTime}
            msgError={errors.startTime}
            variation="secondary"
            placeholder="00:00"
            onBlur={hasErrors}
          />

          <InputMask
            mask="99:99"
            label="Hora Fim:"
            value={endTime}
            setValue={setEndTime}
            specialist="endTime"
            hasError={!!errors.endTime}
            msgError={errors.endTime}
            variation="secondary"
            placeholder="00:00"
            onBlur={hasErrors}
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
