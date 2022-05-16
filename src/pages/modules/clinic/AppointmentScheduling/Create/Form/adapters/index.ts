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
