import { ScheduleI, ScheduleApiI } from '../types'
import { mapDays, mapDaysToApi } from './mapDays'
import { mapSpecialtys, mapSpecialtysToApi } from './mapSpecialtys'

export const fromApi = (data: ScheduleApiI[]): ScheduleI[] => {

  return data.map((schedule: any) => ({
    idClinic: schedule.clinica.idClinica,
    idSchedule: schedule.id,
    idDoctor: schedule.idMedico,
    day: mapDays(schedule.diaSemana),
    start: schedule.horaInicio.slice(0, 5),
    end: schedule.horaFim.slice(0, 5),
    specialtys: mapSpecialtys(schedule.especialidades),
    clinicName: schedule.clinica.nome
  }))
}

export const toApi = (data: ScheduleI) => {
  return {
    idClinica: data.idClinic,
    diaSemana: mapDaysToApi(data.day),
    horaInicio: data.start,
    horaFim: data.end,
    especialidades: mapSpecialtysToApi(data.specialtys)
  }
}

