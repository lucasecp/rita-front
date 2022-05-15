import React, { useEffect, useState } from 'react'
/** Components */
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import InputText from '@/components/Form/InputText'
import InputMask from '@/components/Form/InputMask'
import InputAutoCompleteSpecialist from '../Components/InputAutoCompleteSpecialist'
/** Styles */
import { BtnGroup, Container } from './styles'
/** Helpers */
import { verifyTypedFields } from '../helpers/verifyTypedFields'
import { fieldsApi } from '../static/fieldsApi'
import { parse, isValid, format } from 'date-fns'

interface FilterProps {
  setFilters: React.Dispatch<React.SetStateAction<any[]>>
}

const Filter: React.FC<FilterProps> = ({ setFilters }) => {
  //const local = useQueryParams()

  const [researchDoctor, setResearchDoctor] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [patient, setPatient] = useState('')
  const [date, setDate] = useState('')
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
    { name: fieldsApi.ESPECIALISTA, value: '' },
  ]

  useEffect(() => {
    window.localStorage.removeItem('@Rita/InputAutoCompleteSpecialist/IdSpecialist')
    setFilters(verifyTypedFields(arrayQuery))
  }, [])

  const clearFields = () => {
    setResearchDoctor('')
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

  // const hasErrors = () => {
  //   let newErrors = false

  //   if (researchDoctor.length < 3) {
  //     setErrors((errors) => ({ ...errors, specialist: 'Campo obrigatório.' }))
  //     newErrors = true
  //   } else {
  //     setErrors((errors) => ({ ...errors, specialist: '' }))
  //   }
  //   if (patient.length < 3) {
  //     setErrors((errors) => ({ ...errors, patient: 'Informe 3 letras ou mais' }))
  //     newErrors = true
  //   } else {
  //     setErrors((errors) => ({ ...errors, patient: '' }))
  //   }
  //   if (date === '') {
  //     setErrors((errors) => ({ ...errors, date: 'Campo obrigatório.' }))
  //     newErrors = true
  //   } else {
  //     setErrors((errors) => ({ ...errors, date: '' }))
  //   }
  //   if (startTime == '') {
  //     setErrors((errors) => ({ ...errors, startTime: 'Campo obrigatório.' }))
  //     newErrors = true
  //   } else {
  //     setErrors((errors) => ({ ...errors, startTime: '' }))
  //   }
  //   if (endTime === '') {
  //     setErrors((errors) => ({ ...errors, endTime: 'Campo obrigatório.' }))
  //     newErrors = true
  //   } else {
  //     setErrors((errors) => ({ ...errors, endTime: '' }))
  //   }
  //   return newErrors
  // }

  const onFilter = () => {
    // if (hasErrors()) {
    //   return
    // }
    // _setErrors()
    if (date !== '') { /** Para evitar catch Invalid Date */
      let parseDate = parse(date, 'dd/MM/yyyy', new Date())
      const dateFormated = format(parseDate, 'yyyy-MM-dd')
      arrayQuery = arrayQuery.map(item => {
        if (item.name === fieldsApi.DATA) {
          item.value = dateFormated
          return item
        } else {
          return item
        }
      })
    }

    const idSpecialist = window.localStorage.getItem('@Rita/InputAutoCompleteSpecialist/IdSpecialist')

    setFilters(verifyTypedFields(arrayQuery))
  }

  const onBlurDateValidate = () => {
    // hasErrors()
    const dateFormated = parse(date, 'dd/MM/yyyy', new Date())
    const result = isValid(dateFormated)
    if (!result) {
      setErrors({ ...errors, date: 'Data inválida!' })
    } else {
      setErrors({ ...errors, date: '' })
    }
  }

  return (
    <Container>
      <div>
        <InputAutoCompleteSpecialist
          setValue={setResearchDoctor}
          value={researchDoctor}
          errors={errors}
        />
        <InputText
          variation="secondary"
          label="Paciente:"
          value={patient}
          setValue={setPatient}
          maxLength={100}
          hasError={!!errors.patient}
          msgError={errors.patient}
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
