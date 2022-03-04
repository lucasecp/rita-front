import clearSpecialCaracter from '@/helpers/clear/SpecialCaracteres'

import { mapClinics, mapClinicsToApi } from './mapClinic'
import { mapSpecialtys, mapSpecialtysToApi } from './mapSpecialtys'

export const fromApi = (doctorInfo: any) => {
  return {
    specialistInfo: {
      name: doctorInfo.nome,
      profissionalName: doctorInfo.nomeProfissional,
      cpf: doctorInfo.cpf,
      receiveService: doctorInfo.receberAgendamentos,
      ufProfissionaRegister: doctorInfo.ufRegistroProfissional,
      classCouncil: doctorInfo.numeroRegistro,
      email: doctorInfo.email,
      phone: doctorInfo.celular,
      photo: doctorInfo.avatar,
      cashback: doctorInfo.cashBack ? doctorInfo.cashBack + '%' : '',
      takerate: doctorInfo.takeRate ? doctorInfo.takeRate + '%' : '',
    },

    specialtys: mapSpecialtys(doctorInfo.especialidade),
    clinics: mapClinics(doctorInfo.clinica),
  }
}

export const toApi = (doctorInfo: any) => {
  return {
    nome: doctorInfo.specialistInfo?.name,
    nomeProfissional: doctorInfo.specialistInfo?.profissionalName,
    email: doctorInfo.specialistInfo?.email,
    cpf: clearSpecialCaracter(doctorInfo.specialistInfo?.cpf),
    receberAgendamentos: doctorInfo.specialistInfo?.receiveService,
    celular: clearSpecialCaracter(doctorInfo.specialistInfo?.phone),
    crmuf: doctorInfo.specialistInfo?.ufProfissionaRegister,
    CRM: doctorInfo.specialistInfo?.classCouncil,
    clinica: mapClinicsToApi(doctorInfo.clinic),
    especialidade: mapSpecialtysToApi(doctorInfo.specialtys),
  }
}
