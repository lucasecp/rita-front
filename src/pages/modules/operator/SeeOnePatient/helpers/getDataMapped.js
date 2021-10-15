export function getDataMapped(patientData, patientDependents, patientAddress) {
  const patientMapped = {
    idPaciente: patientData.id,
    nome: patientData.name,
    cpf: patientData.cpf,
    sexo: patientData.gender,
    dataNascimento: patientData.birthDate,
    telefone: patientData.phone,
    email: patientData.email,
  }

  const dependentsMapped = patientDependents.map((dependent) => ({
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
    logradouro: patientAddress.addressPatient,
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
