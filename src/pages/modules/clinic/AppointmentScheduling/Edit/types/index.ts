export interface ErrorsI {
  specialist: string
  specialty: string
  cpf: string
  date: string
  time: string
  [x: string]: any
}

export interface DataI {
  idSchedule?: number
  specialty?: number
  cpf?: string
  date: string
  time: string
  origin: string
  title: string
  idPatient: number
  patientName?: string
  specialist?: number
}

export interface DataToApiI {
  titulo: string
  dataInicio: string
  dataFim: string
  horaInicio: string
  horaFim: string
  origem: string
  idEspecialidade: number
  idPaciente: number
}

export interface DataFromApiI {
  idMedico?: number
  idAgenda: number
  status: string
  titulo: string
  origem: string
  paciente: {
    idPaciente: number
    nomePaciente: string
    cpf: string
  }
  especialidade: {
    idEspecialidade: number
    nomeEspecialidade: string
  }
  especialista: {
    idMedico: number
    nomeMedico: string
  }
  horaInicio: string
  horaFim: string
  dataInicio: string
  dataFim: string
  preco: number
}
