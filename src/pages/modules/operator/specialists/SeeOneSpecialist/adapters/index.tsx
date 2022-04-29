import { mapSpecialtys, mapSpecialtysToApi } from './mapSpecialtys'
import clearSpecialCaracter from '@/helpers/clearSpecialCharacters'
import { mapClinics, mapClinicsToAPi } from './mapClinic'

export const fromApi = (specialistInfo: any): any => {
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
      registerNumber: specialistInfo.registroProfissional || '',
      issuingAgency: specialistInfo.orgaoEmissor?.idOrgaoEmissor || '',
      uf: specialistInfo.ufOrgaoEmissor || '',
      cashback: specialistInfo.cashBack ? specialistInfo.cashBack + '%' : '',
      takerate: specialistInfo.takeRate ? specialistInfo.takeRate + '%' : '',
    },

    specialtys: mapSpecialtys(specialistInfo.especialidade),
    clinics: mapClinics(specialistInfo.clinica),
  }
}

export const toApi = (specialistInfo: any): any => {
  return {
    idMedico: specialistInfo.id,
    nome: specialistInfo.name,
    cpf: clearSpecialCaracter(specialistInfo.cpf),
    celular: clearSpecialCaracter(specialistInfo.phone),
    email: specialistInfo.email,
    nomeProfissional: specialistInfo.profissionalName,
    registroProfissional: specialistInfo.registerNumber,
    idOrgaoEmissor: specialistInfo.issuingAgency,
    ufOrgaoEmissor: specialistInfo.uf,
    clinica: mapClinicsToAPi(specialistInfo.clinics),
    especialidades: mapSpecialtysToApi(specialistInfo.specialtys),
    cashBack: specialistInfo.cashBack,
    takeRate: specialistInfo.takeRate,
    status: specialistInfo.status,
  }
}
