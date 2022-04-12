import { ScheduleI, ScheduleApiI } from '../types'
import { mapDays, mapDaysToApi } from './mapDays'
import { mapSpecialtys, mapSpecialtysToApi } from './mapSpecialtys'
// mapSpecialtys(schedule.especialidades)

export const fromApi = (data: ScheduleApiI[], currentClinic: number): ScheduleI[] => {

  return data.map((schedule: any) => ({
    idClinic: schedule.idClinica,
    idSchedule: schedule.id,
    idDoctor: schedule.idMedico,
    day: mapDays(schedule.diaSemana),
    start: schedule.horaInicio.slice(0, 5),
    end: schedule.horaFim.slice(0, 5),
    specialtys: mapSpecialtys(schedule.especialidades),
    clinicName:
      currentClinic === schedule.clinica.idClinica
        ? schedule.clinica.nome
        : 'Ocupado',
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

// ;[
//   {
//     id: 19,
//     idClinica: 59,
//     diaSemana: 2,
//     horaInicio: '08:00:00',
//     horaFim: '12:00:00',
//     especialidades: [],
//   },
// ]
