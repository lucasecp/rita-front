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
      registerNumber: specialistInfo.registroProfissional || '',
      issuingAgency: specialistInfo.idOrgaoEmissor || '',
      uf: specialistInfo.ufOrgaoEmissor || '',
      cashback: specialistInfo.cashBack ? specialistInfo.cashBack + '%' : '',
      takerate: specialistInfo.takeRate ? specialistInfo.takeRate + '%' : '',
    },

    specialtys: mapSpecialtys(specialistInfo.especialidades),
    clinics: mapClinics(specialistInfo.clinicas),
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
    especialidades: mapSpecialtysToApi(specialistInfo.specialtys),
    cashBack: specialistInfo.cashBack,
    takeRate: specialistInfo.takeRate,
    status: specialistInfo.status,
  }
}
