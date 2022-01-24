import { showStatus } from './showStatus'
import { mapSpecialtys, mapSpecialtysToApi } from './mapSpecialtys'

export const fromApi = (clinicInfo: any) => {
  return {
    personalDatas: {
      name: clinicInfo.descricao,
      socialreason: clinicInfo.razaoSocial,
      cnpj: clinicInfo.cnpj,
      status: showStatus(clinicInfo.status),
      phone: clinicInfo.telefone,
      id: clinicInfo.idClinica,
    },

    acessDatas: {
      nameAdmin: clinicInfo.responsavel,
      cpf: clinicInfo.cpfResponsavel,
      phone: clinicInfo.telefoneResponsavel,
      email: clinicInfo.email,
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
    razaoSocial: clinicInfo.socialreason,
    status: clinicInfo.status,
    cnpj: clinicInfo.cnpj,
    telefone: clinicInfo.phone,
    endereco: clinicInfo.address,
    bairro: clinicInfo.district,
    cidade: clinicInfo.city,
    uf: clinicInfo.uf,
    cep: clinicInfo.cep,
    complemento: clinicInfo.complement,
    numero: clinicInfo.number,
    responsavel: clinicInfo.nameAdmin,
    emailResponsavel: clinicInfo.adminEmail,
    telefoneResponsavel: clinicInfo.adminPhone,
    cpfResponsavel: clinicInfo.adminCpf,
    especialidade: [mapSpecialtysToApi(clinicInfo.specialtys)],
  }
}
