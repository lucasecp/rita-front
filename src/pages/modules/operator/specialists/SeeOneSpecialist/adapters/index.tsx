import { mapSpecialtys, mapSpecialtysToApi } from './mapSpecialtys'
import clearSpecialCaracter from '@/helpers/clear/SpecialCaracteres'
import { mapClinics, mapClinicsToAPi } from './mapClinic'

export const fromApi = (specialistInfo: any) => {
  return {
    personalDatas: {
      name: specialistInfo.nome,
      cpf: specialistInfo.cpf,
      phone: specialistInfo.celular,
      email: specialistInfo.email,
    },

    profissionalData: {
      profissionalName: specialistInfo.nomeProfissional,
      registerNumber: specialistInfo.CRM,
      issuingAgency: specialistInfo.orgaoEmissor,
      uf: specialistInfo.crmuf,
    },

    specialtys: mapSpecialtys(specialistInfo.especialidade),
    clinics: mapClinics(specialistInfo.clinica),
  }
}

export const toApi = (specialistInfo: any) => {
  return {
    idClinica: specialistInfo.id,
    nome: specialistInfo.name,
    cpf: clearSpecialCaracter(specialistInfo.cpf),
    celular: clearSpecialCaracter(specialistInfo.phone),
    email: specialistInfo.email,
    nomeProfissional: specialistInfo.profissionalName,
    registroProfissional: specialistInfo.registerNumber,
    conseloClasse: specialistInfo.issuingAgency,
    uf: specialistInfo.uf,
    clinicas: mapClinicsToAPi(specialistInfo.clinics),
    especialidade: mapSpecialtysToApi(specialistInfo.specialtys),
  }
}
