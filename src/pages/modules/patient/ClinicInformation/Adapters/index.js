import { firstLetterCapitalize } from '@/helpers/firstLetterCapitalize'
import { scheduleFromApi } from './mapSchedule'
import { formatPrice } from '@/helpers/formatPrice'

export const fromApi = (dataClinic) => {
  const specialtys = dataClinic?.especialidade?.map((specialty) => ({
    name: firstLetterCapitalize(specialty.descricao),
    doctorSpecialty: specialty.medicoEspecialidade?.map((spe) => ({
      rqe: spe.RQE,
      defaultPrice: formatPrice(specialty.precos[0]?.precoNormal),
      ritaPrice: formatPrice(specialty.precos[0]?.precoRita),
      name: firstLetterCapitalize(spe.medico?.nome),
      photo: spe.medico?.avatar,
      status: spe.medico?.status,
      crm: spe.medico?.registroProfissional,
      crmUf: spe.medico?.ufOrgaoEmissor,
      title: firstLetterCapitalize(spe.medico?.titulo),
      formation: spe.medico?.formacao,
      verified: spe.medico?.validadoClinica,
      hasSchedule: spe.medico?.receberAgendamentos,
      phone: dataClinic.telefone,
      schedule: scheduleFromApi(spe.medico?.agenda),
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
