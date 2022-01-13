import { PatientAddress, PatientData, PatientDataHolder } from '../@types'

interface IFromApi {
  patientData: PatientData & PatientDataHolder
  patientDependents: PatientData[]
  patientAddress: PatientAddress
  dependent: PatientData
  incomeType: string
}

export const fromApi = (
  dataPatient: unknown,
  dataDependent: unknown,
): IFromApi => {
  console.log(dataPatient)
  console.log(dataDependent)

  const patientMapped: IFromApi = {
    patientData: {
      id: 435454,
      name: 'Matheus Almeida',
      cpf: '518.251.251-21',
      plan: 'Econômico',
      table: 'Econômico',
      company: 'Tetris LTDA',
      birthDate: '16/01/1999',
      gender: 'Masculino',
      phone: '(22) 99881-1565',
      email: 'matheus@email.com',
    },
    patientDependents: [
      {
        id: 435424,
        name: 'Dependente 2',
        cpf: '518.251.251-21',
        birthDate: '16/01/1999',
        gender: 'Masculino',
        phone: '(22) 99881-1565',
        email: 'matheus@email.com',
      },
    ],
    patientAddress: {
      cep: '28.083-040',
      uf: 'RJ',
      city: 'Campos dos Goytacazes',
      address: 'Rua Jorge Barreto',
      number: '54',
      district: 'Guarus',
      complement: 'Casa',
    },
    dependent: {
      id: 435424,
      name: 'Dependente 2',
      cpf: '518.251.251-21',
      birthDate: '13/01/2004',
      gender: 'Masculino',
      phone: '(22) 99881-1565',
      email: 'matheus@email.com',
    },
    incomeType: 'Até 1 salário mínimo e meio',
  }

  return patientMapped
}
