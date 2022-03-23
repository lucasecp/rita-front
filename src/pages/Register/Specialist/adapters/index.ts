import {
  BasicInformationI,
  ProfissionalInfoI,
  SpecialtysAndDocsType,
} from '../types'
import { clinicaToApi } from './mapClinics'
import { specialtysToApi } from './mapSpecialtys'

export const toApi = (
  data: ProfissionalInfoI & BasicInformationI & SpecialtysAndDocsType,
) => {
  return {
    nome: data.name,
    nomeProfissional: data.profissionalName,
    cpf: data.cpf,
    idOrgaoEmissor: data.issuingAgency,
    ufOrgaoEmissor: data.ufIssuingAgency,
    registroProfissional: data.profissionalRegister,
    email: data.email,
    celular: data.phone,
    especialidades: specialtysToApi(data.specialtys),
    clinica: clinicaToApi(data.clinics),
  }
}
