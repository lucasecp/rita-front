import React, { createContext, useContext, useState } from 'react'

import { useLoading } from '@/hooks/useLoading'
import { useModal } from '@/hooks/useModal'

import apiPatient from '@/services/apiPatient'
import { RegisterSuccess } from './messages/RegisterSuccess/index'
import {
  ScheduleSpecialistContextDataI,
  ScheduleI,
  CurrentDataClinicAndDoctorI,
} from '../types/'

import apiAdmin from '@/services/apiAdmin'

import { AxiosError, AxiosResponse } from 'axios'
import { useToggle } from '@/hooks/useToggle'

const ScheduleSpecialistContext = createContext<ScheduleSpecialistContextDataI>(
  {} as ScheduleSpecialistContextDataI,
)

const ScheduleSpecialistProvider: React.FC = ({ children }) => {
  const [schedule, setSchedule] = useState<ScheduleI[]>([])

  const [currentDataClinicAndDoctor, setCurrentDataClinicAndDoctor] =
    useState<CurrentDataClinicAndDoctorI>({} as CurrentDataClinicAndDoctorI)

  const [getSchedules, setGetSchedules] = useToggle()

  return (
    <ScheduleSpecialistContext.Provider
      value={{
        schedule,
        setSchedule,
        setGetSchedules,
        getSchedules,
        currentDataClinicAndDoctor,
        setCurrentDataClinicAndDoctor,
      }}
    >
      {children}
    </ScheduleSpecialistContext.Provider>
  )
}

const useScheduleSpecialist = (): ScheduleSpecialistContextDataI => {
  const context = useContext(ScheduleSpecialistContext)

  return context
}

export { ScheduleSpecialistProvider, useScheduleSpecialist }
