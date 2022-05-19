import clearSpecialCharacters from '@/helpers/clearSpecialCharacters'
import {
  AddressI,
  AdministratorI,
  BasicInformationI,
  TechnicianI,
} from '../types'
import { specialtysToApi } from './mapSpecialtys'

export const toApi = (
  data: AddressI & BasicInformationI & TechnicianI & AdministratorI,
): any => {
  return {
    descricao: data.nameClinic,
    razaoSocial: data.socialReason,
    cnpj: clearSpecialCharacters(data.cnpj),
    telefone: clearSpecialCharacters(data.phoneClinic),
    email: data.emailClinic,
    endereco: data.fullAddress,
    bairro: data.district,
    cidade: data.city,
    uf: data.uf,
    cep: clearSpecialCharacters(data.cep),
    complemento: data.complement,
    numero: data.number,
    responsavel: data.nameAdministrator,
    emailResponsavel: data.emailAdministrator,
    telefoneResponsavel: clearSpecialCharacters(data.phoneAdministrator),
    cpfResponsavel: clearSpecialCharacters(data.cpfAdministrator),
    biografia: '',
    especialidade: specialtysToApi(data.specialtys),
    responsavelTecnico: data.nameTechnician,
    emailResponsavelTecnico: data.emailTechnician,
    telResponsavelTecnico: clearSpecialCharacters(data.phoneTechnician),
    cpfResponsavelTecnico: clearSpecialCharacters(data.cpfTechnician),
  }
}
