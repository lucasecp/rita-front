import { firstLetterCapitalize } from '@/helpers/firstLetterCapitalize'
import { scheduleFromApi } from './mapSchedule'
import { formatPrice } from '@/helpers/formatPrice'

export const fromApi = (dataClinic) => {
  const specialtys = dataClinic?.especialidades?.map((specialty) => ({
    name: firstLetterCapitalize(specialty.descricao),
    doctorSpecialty: specialty?.especialistas.map((spe) => ({
      rqe: spe.RQE,
      defaultPrice: formatPrice(specialty.preco?.precoNormal),
      ritaPrice: formatPrice(specialty.preco?.precoRita),
      name: firstLetterCapitalize(spe?.nome),
      professionalName: spe?.nomeProfissional,
      issuingAgency: spe?.orgaoEmissor?.descricao,
      photo: spe?.avatar,
      status: spe?.status,
      crm: spe?.registroProfissional,
      crmUf: spe?.ufOrgaoEmissor,
      formation: spe?.formacao,
      verified: spe?.validadoClinica,
      hasSchedule: spe?.receberAgendamentos,
      phone: dataClinic.telefone,
      schedule: scheduleFromApi(spe?.agenda),
    })),
  }))

  return {
    photo: dataClinic.avatar,
    name: firstLetterCapitalize(dataClinic.descricao),
    address: dataClinic.endereco,
    validAddress: dataClinic.enderecoValidado,
    linkGoogleMap: dataClinic.comoChegar,
    district: dataClinic.bairro,
    city: dataClinic.cidade,
    uf: dataClinic.uf,
    number: dataClinic.numero,
    complement: dataClinic.complemento,
    phone: dataClinic.telefone,
    specialtys,
  }
}
