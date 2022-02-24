import { mapSpecialtys, mapSpecialtysToApi } from './mapSpecialtys'
import clearSpecialCaracter from '@/helpers/clear/SpecialCaracteres'
import { mapClinics, mapClinicsToAPi } from './mapClinic'

export const fromApi = (specialistInfo: any) => {
  return {
    personalDatas: {
      name: specialistInfo.medico?.nome,
      cpf: specialistInfo.medico?.cpf,
      phone: specialistInfo.medico?.celular,
      email: specialistInfo.medico?.email,
    },

    profissionalData: {
      profissionalName: specialistInfo.medico?.nomeProfissional,
      registerNumber: specialistInfo.medico?.CRM,
      issuingAgency: specialistInfo.medico?.orgaoEmissor?.idOrgaoEmissor,
      uf: specialistInfo.medico?.ufRegistroProfissional,
    },

    specialtys: mapSpecialtys(specialistInfo.medico?.especialidade),
    clinics: mapClinics(specialistInfo.medico?.clinica),
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
