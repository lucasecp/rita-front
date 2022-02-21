import { mapSpecialtys, mapSpecialtysToApi } from './mapSpecialtys'
import clearSpecialCaracter from '@/helpers/clear/SpecialCaracteres'
import { mapClinics } from './mapClinic';

export const fromApi = (clinicInfo: any) => {
  return {
    specialistInfo: {
      name: clinicInfo.nome,
      profissionalName: clinicInfo.nomeProfissional,
      cpf: clinicInfo.cpf,
      receiveService: clinicInfo.recebeAtendimento ? 1 : 0,
      ufProfissionaRegister: clinicInfo.ufRegistroProfissional,
      classCouncil: clinicInfo.conseloClasse,
      email: clinicInfo.email,
      phone: clinicInfo.celular,
    },
    crm: clinicInfo.crm,

    specialtys: mapSpecialtys(clinicInfo.especialidade),
    clinics: mapClinics(clinicInfo.clinica),
  }
}

export const toApi = (clinicInfo: any) => {
  return {
    idClinica: clinicInfo.id,
    descricao: clinicInfo.name,
    razaoSocial: clinicInfo.socialReason,
    status: clinicInfo.status,
    cnpj: clearSpecialCaracter(clinicInfo.cnpj),
    telefone: clearSpecialCaracter(clinicInfo.phone),
    endereco: clinicInfo.address,
    bairro: clinicInfo.district,
    cidade: clinicInfo.city,
    uf: clinicInfo.uf,
    cep: clinicInfo.cep,
    complemento: clinicInfo.complement,
    numero: clinicInfo.number,
    responsavel: clinicInfo.nameAdmin,
    emailResponsavel: clinicInfo.email,
    telefoneResponsavel: clearSpecialCaracter(clinicInfo.celPhone),
    cpfResponsavel: clearSpecialCaracter(clinicInfo.cpf),
    especialidade: mapSpecialtysToApi(clinicInfo.specialtys),
  }
}
