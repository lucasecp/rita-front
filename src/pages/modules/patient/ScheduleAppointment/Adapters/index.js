import { firstLetterCapitalize } from '@/helpers/firstLetterCapitalize'
import { formatMobilePhone } from '@/helpers/formatMobilePhone'

export const fromApi = (dataDoctor) => {
  const doctor = dataDoctor?.map((clinic) => ({
    photo: clinic.avatar,
    name: firstLetterCapitalize(clinic.nome),
    id: clinic.idMedico,
    address: clinic.endereco,
    district: clinic.bairro,
    city: clinic.cidade,
    uf: clinic.uf,
    number: clinic.numero,
    complement: clinic.complemento,
    phone: formatMobilePhone(clinic.telefone),
    crm: clinic.CRM,
    crmUf: clinic.crmuf,
    title: firstLetterCapitalize(clinic.titulo),
    verified: clinic.validadoClinica,

    doctorSpecialty: clinic?.medicoEspecialidade?.map((spe) => ({
      rqe: spe.RQE,

      name: firstLetterCapitalize(spe.especialidade.descricao),
    })),
  }))
  return doctor
}
