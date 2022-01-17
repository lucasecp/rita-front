import { showStatus } from './showStatus'
import { mapSpecialtys } from './mapSpecialtys'

export const fromApi = (clinicInfo: any) => {
  return {
    personalDatas: {
      name: clinicInfo.descricao,
      socialreason: clinicInfo.razaoSocial,
      cnpj: clinicInfo.cnpj,
      status: showStatus(clinicInfo.status),
      phone: clinicInfo.telefone,
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

// export const toApi = (personalDatas, address) => {
//   return {
//     nome: personalDatas.name,
//     sexo: personalDatas.gender,
//     dataNascimento: personalDatas.birthdate,
//     telefone: personalDatas.phone,
//     email: personalDatas.email,
//     status: statusToApi(personalDatas.status),

//     cep: address.cep,
//     logradouro: address.address,
//     numero: address.number,
//     complemento: address.complement,
//     bairro: address.district,
//     municipio: address.city,
//     uf: address.uf,
//   }
// }

// {
//   "idPaciente": 4880811,
//   "nome": "Hiago Alves ",
//   "cpf": "09872058032",
//   "sexo": "M",
//   "dataNascimento": "01/02/1985",
//   "telefone": "(61) 98498-4848",
//   "email": "teste@teste.com"
// }
