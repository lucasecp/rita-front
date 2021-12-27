import { firstLetterCapitalize } from '@/helpers/firstLetterCapitalize'
import { scheduleFromApi } from './mapSchedule'
import { formatPrice } from '@/helpers/formatPrice'

export const fromApi = (dataClinic) => {
  const specialtys = dataClinic?.especialidade?.map((specialty) => ({
    name: firstLetterCapitalize(specialty.descricao),
    doctorSpecialty: specialty.medicoEspecialidade.map((spe) => ({
      rqe: spe.RQE,

      defaultPrice: specialty.precos.reduce((ac, price) => {
        if (price.idEspecialidade === spe.idEspecialidade) {
          ac = formatPrice(price.precoNormal)
          return ac
        }
        return ac
      }, null),

      ritaPrice: specialty.precos.reduce((ac, price) => {
        if (price.idEspecialidade === spe.idEspecialidade) {
          ac = formatPrice(price.precoRita)
          return ac
        }
        return ac
      }, null),

      name: firstLetterCapitalize(spe.medico.nome),
      photo: spe.medico.avatar,
      status: spe.medico.status,
      crm: spe.medico.CRM,
      crmUf: spe.medico.crmuf,
      title: firstLetterCapitalize(spe.medico.titulo),
      formation: spe.medico.formacao,
      verified: spe.medico.validadoClinica,
      hasSchedule: spe.medico.receberAgendamentos,
      phone: spe.medico.numero,
      schedule: scheduleFromApi(spe.medico.agenda),
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
