import { mapSpecialtys, mapSpecialtysToApi } from './mapSpecialtys'
import clearSpecialCaracter from '@/helpers/clear/SpecialCaracteres'
import { mapClinics, mapClinicsToAPi } from './mapClinic'

export const fromApi = (specialistInfo: any) => {
  return {
    personalDatas: {
      name: specialistInfo.nome || '',
      cpf: specialistInfo.cpf || '',
      phone: specialistInfo.celular || '',
      email: specialistInfo.email || '',
    },
    status: specialistInfo.status || '',

    profissionalData: {
      profissionalName: specialistInfo.nomeProfissional || '',
      registerNumber: specialistInfo.CRM || '',
      issuingAgency: specialistInfo.orgaoEmissor?.idOrgaoEmissor || '',
      uf: specialistInfo.ufRegistroProfissional || '',
    },

    specialtys: mapSpecialtys(specialistInfo.especialidade),
    clinics: mapClinics(specialistInfo.clinica),
  }
}

export const toApi = (specialistInfo: any) => {
  return {
    idMedico: specialistInfo.id,
    nome: specialistInfo.name,
    cpf: clearSpecialCaracter(specialistInfo.cpf),
    celular: clearSpecialCaracter(specialistInfo.phone),
    email: specialistInfo.email,
    nomeProfissional: specialistInfo.profissionalName,
    CRM: specialistInfo.registerNumber,
    idOrgaoEmissor: specialistInfo.issuingAgency,
    crmuf: specialistInfo.uf,
    clinica: mapClinicsToAPi(specialistInfo.clinics),
    especialidade: mapSpecialtysToApi(specialistInfo.specialtys),
    cashBack: 0,
    takeRate: 0,
    status: specialistInfo.status,
  }
}
