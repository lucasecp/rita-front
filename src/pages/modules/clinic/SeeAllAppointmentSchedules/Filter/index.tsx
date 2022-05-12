import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import InputText from '@/components/Form/InputText'
import CustomMultSelect, {
  MultiSelectOption,
} from '@/components/Form/MultSelect'
import React, { useEffect, useState } from 'react'
import MultSelectSpecialtys from '../Components/MultSelectSpecialtys'
import { staticStatus } from '../static/fieldsMultSelect'
import { BtnGroup, Container } from './styles'
import formatMultSelectValue from '@/helpers/formatMultSelectValue'
import { verifyTypedFields } from '../helpers/verifyTypedFields'
import InputMask from '@/components/Form/InputMask'
import { fieldsApi } from '../static/fieldsApi'
import clearSpecialCaracter from '@/helpers/clearSpecialCharacters'
import useQueryParams from './useQueryParams'
import validateCpf from '@/helpers/validateCpf'
import SelectIssuingAgency from '@/components/smarts/SelectIssuingAgency/SelectIssuingAgency'

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
  })

  const arrayQuery = [
    { specialist: fieldsApi.ESPECIALISTA, value: specialist },
    { specialist: fieldsApi.ESPECIALISTA, value: patient },
    { specialist: fieldsApi.DATA, value: date },
    { specialist: fieldsApi.HORARIO_INICIO, value: startTime },
    { specialist: fieldsApi.HORARIO_FIM, value: endTime },
  ]

  useEffect(() => {
    setFilters(verifyTypedFields(arrayQuery))
  }, [])

  const clearFields = () => {
    setSpecialist('')
    setFilters([])
    setErrors({ specialist: '', startTime: '', endTime: '', patient: '' })
    window.localStorage.removeItem('@Rita/specialists-filter')
  }

  const hasErrors = () => {
    let newErrors = false
    setErrors({ specialist: '', startTime: '', endTime: '', patient: '' })

    if (specialist.length < 3 && specialist) {
      setErrors((errors) => ({ ...errors, specialist: 'Informe 3 letras ou mais' }))
      newErrors = true
    }
    return newErrors
  }

  const onFilter = () => {
    if (hasErrors()) {
      return
    }
    window.localStorage.setItem(
      '@Rita/specialists-filter',
      JSON.stringify({
        specialist
      }),
    )
    setFilters(verifyTypedFields(arrayQuery))
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
      </div>

      <BtnGroup>
        <OutlineButton small variation="red" onClick={() => clearFields()}>
          Limpar Filtro
        </OutlineButton>
        <ButtonPrimary medium onClick={onFilter}>
          Filtrar Resultados
        </ButtonPrimary>
      </BtnGroup>
    </Container>
  )
}

export default Filter
