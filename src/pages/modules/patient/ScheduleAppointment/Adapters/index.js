import { firstLetterCapitalize } from '@/helpers/firstLetterCapitalize'
import { formatPhone } from '@/helpers/formatPhone'

export const fromApi = (dataClinic) => {
  const clinics = dataClinic?.map((clinic) => ({
    photo: clinic.foto,
    name: firstLetterCapitalize(clinic.descricao),
    address: clinic.endereco,
    linkGoogleMap: clinic.comoChegar,
    district: clinic.bairro,
    city: clinic.cidade,
    uf: clinic.uf,
    number: clinic.numero,
    complement: clinic.complemento,
    phone: formatPhone(clinic.telefone),
    specialtys: clinic?.especialidade?.map((specialty) => ({
      name: firstLetterCapitalize(specialty.descricao),
      doctorSpecialty: specialty.medicoEspecialidade.map((spe) => ({
        rqe: spe.RQE,

        defaultPrice: specialty.precos?.reduce((ac, price) => {
          if (price.idEspecialidade === spe.idEspecialidade) {
            ac = price.precoNormal
            return ac
          }
          return ac
        }, null),

        ritaPrice: specialty.precos?.reduce((ac, price) => {
          if (price.idEspecialidade === spe.idEspecialidade) {
            ac = price.precoRita
            return ac
          }
          return ac
        }, null),

        name: firstLetterCapitalize(spe.medico.nome),
        photo: spe.medico.foto,
        status: spe.medico.status,
        crm: spe.medico.CRM,
        crmUf: spe.medico.crmuf,
        title: firstLetterCapitalize(spe.medico.titulo),
        formation: spe.medico.formacao,
        verified: spe.medico.validadoClinica,
        hasSchedule: spe.medico.receberAgendamentos,
        // phone: spe.medico.numero,
      })),
    })),
  }))
  return clinics
}
