import {
  AddressClinicI,
  ClinicProfileI,
  DataClinicI,
  ResponsibleAdministrativeI,
  ResponsibleTecnicI,
} from '../types'
import {
  mapSpecialtys,
  filterAllSpecialtys,
  mapToApiSpecialtys,
} from '../Helpers/transformData'
import { MultiSelectOption } from '@/components/Form/MultSelect'

export const fromApi = async (
  data: any,
  specialtys: any[],
): Promise<ClinicProfileI> => {
  return {
    avatar: data.avatar,
    district: data.bairro,
    cep: data.cep,
    cnpj: data.cnpj,
    complement: data.complemento,
    cpfResponsible: data.cpfResponsavel,
    description: data.descricao,
    email: data.email,
    emailResponsible: data.emailResponsavel,
    address: data.endereco,
    addressValided: data.enderecoValidado,
    specialty: mapSpecialtys(data.especialidade),
    photo: data.foto,
    idClinic: data.idClinica,
    latitude: data.latitude,
    longitude: data.longitude,
    number: data.numero,
    razaoSocial: data.razaoSocial,
    responsible: data.responsavel,
    status: data.status,
    phone: data.telefone,
    phoneResponsible: data.telefoneResponsavel,
    uf: data.uf,
    city: data.cidade,
    allSpecialtys: filterAllSpecialtys(specialtys),
  }
}

export const toApi = (
  dataClinic: DataClinicI,
  responsibleTecnic: ResponsibleTecnicI,
  responsibleAdministrative: ResponsibleAdministrativeI,
  address: AddressClinicI,
  specialty: MultiSelectOption[],
): any => {
  return {
    idClinica: 59,
    descricao: dataClinic.description,
    razaoSocial: dataClinic.razaoSocial,
    status: dataClinic.status,
    cnpj: dataClinic.cnpj,
    telefone: dataClinic.phone,
    endereco: address.address,
    bairro: address.district,
    cidade: address.city,
    uf: address.uf,
    cep: address.cep,
    complemento: address.complement,
    numero: address.number,
    responsavel:
      responsibleTecnic.responsibleTecnic ||
      responsibleAdministrative.responsibleAdministrative,
    emailResponsavel:
      responsibleTecnic.emailTecnic ||
      responsibleAdministrative.emailAdministrative,
    telefoneResponsavel:
      responsibleTecnic.phoneResponsibleTecnic ||
      responsibleAdministrative.phoneResponsibleAdministrative,
    cpfResponsavel:
      responsibleTecnic.cpfResponsibleTecnic ||
      responsibleAdministrative.cpfResponsibleAdministrative,
    especialidade: mapToApiSpecialtys(specialty),
  }
}
