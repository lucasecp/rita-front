import { PatientData, Dependent, PatientAddress, PatientStatus } from '../index'

// interface getDataMappedResponse {
//   patientMapped: {
//     idPaciente: number
//     nome: string
//     cpf: string
//     sexo: string
//     dataNascimento: string
//     telefone: string
//     email: string
//   }
//   endereco: {
//     cep: string
//     logradouro: string
//     numero: string
//     complemento: string
//     bairro: string
//     cidade: string
//     uf: string
//   }
//   dependentes: {
//     idPaciente: number
//     nome: string
//     cpf: string
//     sexo: string
//     dataNascimento: string
//     telefone: string
//     email: string
//   }[]
// }

export const getDataMapped = (
  patientData: PatientData,
  patientDependents: Dependent[] | undefined,
  patientAddress: PatientAddress,
  patientStatus: PatientStatus,
): any => {
  const patientMapped = {
    idPaciente: patientData.id,
    nome: patientData.name,
    cpf: patientData.cpf,
    sexo: patientData.gender,
    dataNascimento: patientData.birthDate,
    telefone: patientData.phone,
    email: patientData.email,
    status: patientStatus.status,
    limiteTentativas: patientStatus.limitTry,
  }

  const dependentsMapped = patientDependents?.map((dependent) => ({
    idPaciente: dependent.id,
    nome: dependent.name,
    cpf: dependent.cpf,
    sexo: dependent.gender,
    dataNascimento: dependent.birthDate,
    telefone: dependent.phone,
    email: dependent.email,
  }))

  const addressMapped = {
    cep: patientAddress.cep,
    logradouro: patientAddress.address,
    numero: patientAddress.number,
    complemento: patientAddress.complement,
    bairro: patientAddress.district,
    cidade: patientAddress.city,
    uf: patientAddress.uf,
  }

  return {
    ...patientMapped,
    endereco: addressMapped,
    dependentes: dependentsMapped,
  }
}
