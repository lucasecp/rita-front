import {
  PatientData,
  Dependent,
  PatientAddress,
  PatientStatusLimit,
  ToApiUpdatePatient,
} from '../types/index'

export const getDataMapped = (
  patientData: PatientData,
  patientDependents: Dependent[] | undefined,
  patientAddress: PatientAddress,
  patientStatus: PatientStatusLimit,
): ToApiUpdatePatient => {
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

export const getDependentMapped = (
  dependentData: PatientData,
  dependentAddress: PatientAddress,
  dependentStatus: PatientStatusLimit,
): ToApiUpdatePatient => {
  const dependentMapped = {
    idPaciente: dependentData.id,
    nome: dependentData.name,
    cpf: dependentData.cpf,
    sexo: dependentData.gender,
    dataNascimento: dependentData.birthDate,
    telefone: dependentData.phone,
    email: dependentData.email,
    status: dependentStatus.status,
    limiteTentativas: dependentStatus.limitTry,
  }

  const addressMapped = {
    cep: dependentAddress.cep,
    logradouro: dependentAddress.address,
    numero: dependentAddress.number,
    complemento: dependentAddress.complement,
    bairro: dependentAddress.district,
    cidade: dependentAddress.city,
    uf: dependentAddress.uf,
  }

  return {
    ...dependentMapped,
    endereco: addressMapped,
    dependentes: [],
  }
}
