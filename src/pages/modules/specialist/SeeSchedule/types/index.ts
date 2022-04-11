import { MultiSelectOption } from '@/components/Form/MultSelect/index'

export interface ScheduleI {
  idClinic?: number
  day: DaysType
  start: string
  end: string
  specialtys: MultiSelectOption[]
  idSchedule?: string
  idDoctor?: number
  clinicName?: string
}

export interface CurrentDataClinicAndDoctorI {
  idClinic: number
  idDoctor: number
}

export type DaysType =
  | 'monday'
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thrusday'
  | 'friday'
  | 'sartuday'

export interface ScheduleApiI {
  id: number
  idMedico: number
  idClinica: number
  diaSemana: number
  horaInicio: string
  horaFim: string
  especialidades: any[]
}

export interface DaysI {
  [x: string]: boolean
}

export interface ErrorsI {
  specialtys: string
  clinics: string
  startTime: string
  endTime: string
  days: string
}

export interface ScheduleSpecialistContextDataI {
  schedule: ScheduleI[]
  setSchedule: React.Dispatch<React.SetStateAction<ScheduleI[]>>
  currentDataClinicAndDoctor: CurrentDataClinicAndDoctorI
  setCurrentDataClinicAndDoctor: React.Dispatch<
    React.SetStateAction<CurrentDataClinicAndDoctorI>
  >
  setGetSchedules: () => void
  getSchedules: boolean
}
