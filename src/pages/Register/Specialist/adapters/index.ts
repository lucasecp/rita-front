import clearSpecialCaracter from '@/helpers/clear/SpecialCaracteres'
import { BasicInformationI, ProfissionalInfoI } from '../types'
import { clinicaToApi } from './mapClinics'
import { specialtysToApi } from './mapSpecialtys'

export const toApi = (data: ProfissionalInfoI & BasicInformationI) => {
  return {
    nome: data.name,
    nomeProfissional: data.profissionalName,
    cpf: clearSpecialCaracter(data.cpf),
    idOrgaoEmissor: data.issuingAgencyToApi,
    ufOrgaoEmissor: data.ufIssuingAgency,
    registroProfissional: data.profissionalRegister,
    email: data.email,
    celular: clearSpecialCaracter(data.phone),
    especialidades: specialtysToApi(data.specialtys),
    clinica: clinicaToApi(data.clinics),
  }
}
