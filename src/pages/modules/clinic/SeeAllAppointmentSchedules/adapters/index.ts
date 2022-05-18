import { DataScheduler } from '../types'

export const fromApi = (dataSchedulers: any[]): DataScheduler[] => {
  return dataSchedulers.map((item) => ({
    id: item.id,
    startDate: item.dataInicio,
    endDate: item.dataFim,
    startTime: item.horaInicio,
    endTime: item.horaFim,
    status: item.status,
    price: item.preco,
    specialtys: {
      idSpecialtys: item.especialidade.idEspecialidade,
      description: item.especialidade.descricao
    },
    patient: {
      idPatient: item.paciente.idPaciente,
      name: item.paciente.nome
    },
    specialist: {
      idSpecialist: item.medico.idMedico,
      name: item.medico.nome
    }
  }))
}
