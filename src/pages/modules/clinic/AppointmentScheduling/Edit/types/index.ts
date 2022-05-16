export interface ErrorsI {
  specialist: string
  specialty: string
  cpf: string
  date: string
  time: string
  [x: string]: any
}

export interface DataToApiI {
  specialty: number
  cpf: string
  date: string
  time: string
  origin: string
  title: string
  idPatient: number
  patientName?: string
  specialist?: number
}
export interface DataFromApiI {
  titulo: string
  dataInicio: string
  dataFim: string
  horaInicio: string
  horaFim: string
  origem: string
  idEspecialidade: number
  idPaciente: number
  cpf?: string
  paciente?: string
  idMedico?: number
}
