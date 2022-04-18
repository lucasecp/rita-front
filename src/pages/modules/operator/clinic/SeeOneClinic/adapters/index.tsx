import { mapSpecialtys, mapSpecialtysToApi } from './mapSpecialtys'
import clearSpecialCaracter from '@/helpers/clearSpecialCharacters'

export const fromApi = (clinicInfo: any) => {
  return {
    personalDatas: {
      name: clinicInfo.descricao,
      socialReason: clinicInfo.razaoSocial,
      cnpj: clinicInfo.cnpj,
      status: clinicInfo.status,
      phone: clinicInfo.telefone,
      id: clinicInfo.idClinica,
    },

    acessDatas: {
      nameAdmin: clinicInfo.responsavel,
      cpf: clinicInfo.cpfResponsavel,
      phone: clinicInfo.telefoneResponsavel,
      email: clinicInfo.emailResponsavel,
    },

    address: {
      cep: clinicInfo.cep,
      uf: clinicInfo.uf,
      city: clinicInfo.cidade,
      address: clinicInfo.endereco,
      number: clinicInfo.numero,
      district: clinicInfo.bairro,
      complement: clinicInfo.complemento,
    },

    specialtys: mapSpecialtys(clinicInfo.especialidade),
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
