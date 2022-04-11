import ButtonPrimary from '@/components/Button/Primary'
import InputMask from '@/components/Form/InputMask'
import { MultiSelectOption } from '@/components/Form/MultSelect'
import { MultSelectSpecialty } from '../../MultSelectSpecialty'
import React, { useState } from 'react'
import { DaysI, ErrorsI } from '../../types'
import DaysButtons from './DaysButtons'

import { Container } from './styles'
import { useScheduleSpecialist } from '../../hooks'
import { useValidator } from './useValidator'
import { toApi } from '../../adapters/index'
import axios from 'axios'
import apiAdmin from '@/services/apiAdmin'
import { useLoading } from '@/hooks/useLoading'
import { useModal } from '@/hooks/useModal'

const CreateSchedule: React.FC = ({}) => {
  const [startTime, setStartTime] = useState('')

  const [endTime, setEndTime] = useState('')

  const [errors, setErrors] = useState<ErrorsI>({} as ErrorsI)

  const [specialtys, setSpecialtys] = useState<MultiSelectOption[]>([])

  const [days, setDays] = useState<DaysI>({} as DaysI)

  const {  currentDataClinicAndDoctor, setGetSchedules } =
    useScheduleSpecialist()

  const { hasError } = useValidator(setErrors)

  const { Loading } = useLoading()

  const { showSimple } = useModal()

  const onCreateSchedule = async () => {
    if (hasError({ startTime, endTime, specialtys, days })) {
      return
    }

    const daysChoosen = []

    for (const i in days) {
      if (!days[i]) {
        continue
      }
      daysChoosen.push(i)
    }

    try {
      Loading.turnOn()
      await axios.all(
        daysChoosen.map((data) =>
          apiAdmin.post(
            `/clinica/medico/217/agenda`,
            toApi({
              start: startTime,
              end: endTime,
              specialtys,
              day: data,
              idClinic: currentDataClinicAndDoctor.idClinic,
              idDoctor: currentDataClinicAndDoctor.idDoctor,
            }),
          ),
        ),
      )
      setGetSchedules()
    } catch (error) {
      showSimple.error(
        'Erro ao adicionar evento, verifique os dados e tente novamente.',
      )
    } finally {
      Loading.turnOff()
    }
  }

  return (
    <Container>
      <InputMask
        mask="99:99"
        label="Hora Início:"
        value={startTime}
        setValue={setStartTime}
        name="startTime"
        hasError={!!errors.startTime}
        msgError={errors.startTime}
        variation="secondary"
      />

      <InputMask
        mask="99:99"
        label="Hora Fim:"
        value={endTime}
        setValue={setEndTime}
        name="endTime"
        hasError={!!errors.endTime}
        msgError={errors.endTime}
        variation="secondary"
      />

      <MultSelectSpecialty
        specialtys={specialtys}
        setSpecialtys={setSpecialtys}
        errors={errors}
        label="Especialidades:"
        idDoctor={currentDataClinicAndDoctor.idDoctor}
        idClinic={currentDataClinicAndDoctor.idClinic}
      />

      <DaysButtons days={days} setDays={setDays} error={errors.days} />
      <ButtonPrimary small onClick={onCreateSchedule}>
        Criar evento
      </ButtonPrimary>
    </Container>
  )
}

export default CreateSchedule
