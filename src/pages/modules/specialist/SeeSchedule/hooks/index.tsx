import React, { createContext, useContext, useState } from 'react'

import {
  ScheduleSpecialistContextDataI,
  ScheduleI,
  CurrentDataClinicAndDoctorI,
  ClinicsI,
} from '../types'

import { useToggle } from '@/hooks/useToggle'

const ScheduleSpecialistContext = createContext<ScheduleSpecialistContextDataI>(
  {} as ScheduleSpecialistContextDataI,
)

const ScheduleSpecialistProvider: React.FC = ({ children }) => {
  const [clinics, setClinics] = useState<ClinicsI[]>([])
  const [schedule, setSchedule] = useState<ScheduleI[]>([])
  const [specialistName, setSpecialistName] = useState<string>()
  const [currentDataClinicAndDoctor, setCurrentDataClinicAndDoctor] =
    useState<CurrentDataClinicAndDoctorI>({} as CurrentDataClinicAndDoctorI)
  const [getSchedules, setGetSchedules] = useToggle()

  return (
    <ScheduleSpecialistContext.Provider
      value={{
        schedule,
        clinics,
        specialistName,
        getSchedules,
        currentDataClinicAndDoctor,
        setSpecialistName,
        setClinics,
        setSchedule,
        setGetSchedules,
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
