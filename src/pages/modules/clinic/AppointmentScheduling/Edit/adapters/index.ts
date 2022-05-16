import { parse } from 'date-fns'
import { DataToApiI, DataFromApiI } from '../types'

export const toApi = (data: DataToApiI): DataFromApiI => {
  return {
    titulo: data.title || `consulta-${data.patientName}`,
    dataInicio: parse(data.date, 'dd/MM/yyyy', new Date()).toISOString(),
    dataFim: parse(data.date, 'dd/MM/yyyy', new Date()).toISOString(),
    horaInicio: data.time.split('-')[0].trim(),
    horaFim: data.time.split('-')[1].trim(),
    origem: data.origin || 'Rita',
    idEspecialidade: data.specialty,
    idPaciente: data.idPatient,
  }
}

export const fromApi = (data: DataFromApiI): DataToApiI => {
  return {
    title: data.titulo || `consulta-${data.paciente}`,
    date: data.dataInicio,
    time: data.horaInicio.slice(0, 5) + ' - ' + data.horaFim.slice(0, 5),
    origin: data.origem || 'Rita',
    specialty: data.idEspecialidade,
    idPatient: data.idPaciente,
    cpf: data.cpf,
    specialist: data.idMedico,
  }
}
