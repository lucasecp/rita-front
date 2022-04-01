import clearSpecialCaracter from '@/helpers/clear/SpecialCaracteres'
import { DataSpecialistI, RqeAndSpecialtysType } from '../Types'

import { mapClinics, mapClinicsToApi } from './mapClinic'
import { mapSpecialtys, mapSpecialtysToApi } from './mapSpecialtys'

export const fromApi = (doctorInfo: any): DataSpecialistI => {
  return {
    specialistInfo: {
      name: doctorInfo.nome,
      profissionalName: doctorInfo.nomeProfissional,
      cpf: doctorInfo.cpf,
      receiveService: doctorInfo.receberAgendamentos,
      ufProfissionaRegister: doctorInfo.ufOrgaoEmissor,
      classCouncil: doctorInfo.registroProfissional,
      email: doctorInfo.email,
      phone: doctorInfo.celular,
      photo: doctorInfo.avatar,
      cashback: doctorInfo.cashBack ? doctorInfo.cashBack + '%' : '',
      takerate: doctorInfo.takeRate ? doctorInfo.takeRate + '%' : '',
      issuingAgency: doctorInfo.orgaoEmissor?.idOrgaoEmissor,
    },

    specialtys: mapSpecialtys(doctorInfo.especialidades),
    clinic: mapClinics(doctorInfo.clinica),
  }
}

export const toApi = (
  doctorInfo: DataSpecialistI & { rqe: RqeAndSpecialtysType },
): any => {
  return {
    nome: doctorInfo.specialistInfo?.name,
    nomeProfissional: doctorInfo.specialistInfo?.profissionalName,
    email: doctorInfo.specialistInfo?.email,
    receberAgendamentos: doctorInfo.specialistInfo?.receiveService,
    celular: clearSpecialCaracter(doctorInfo.specialistInfo?.phone || ''),
    ufOrgaoEmissor: doctorInfo.specialistInfo?.ufProfissionaRegister,
    registroProfissional: doctorInfo.specialistInfo?.classCouncil,
    clinica: mapClinicsToApi(doctorInfo.clinic),
    especialidades: mapSpecialtysToApi(doctorInfo.specialtys, doctorInfo.rqe),
    idOrgaoEmissor: doctorInfo.specialistInfo.issuingAgency,
  }
}
