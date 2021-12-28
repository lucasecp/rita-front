import { firstLetterCapitalize } from '@/helpers/firstLetterCapitalize'
import { formatPhone } from '@/helpers/formatPhone'
import { scheduleFromApi } from './mapSchedule'
import { formatPrice } from '@/helpers/formatPrice'

export const fromApi = (dataClinic) => {
  const doctorSpecialty = dataClinic?.medicoEspecialidade?.find(
    (dSpecialty) => dSpecialty,
  )

  const clinicdoctor = dataClinic?.clinicaMedico?.map((specialty) => ({
    linkGoogleMap: specialty.clinica.comoChegar,

    scheduleAppointment: scheduleFromApi(
      dataClinic.agenda.reduce((ac, schedule) => {
        if (schedule.idMedico === specialty.idMedico) {
          ac = schedule.agenda
          return ac
        }
        return ac
      }, null),
    ),

    status: specialty.statusMedicoClinica,
    clinic: {
      photo: specialty.clinica.foto,
      description: firstLetterCapitalize(specialty.clinica.descricao),
      phone: formatPhone(specialty.clinica.telefone),
      status: specialty.clinica.status,
      address: specialty.clinica.endereco,
      district: specialty.clinica.bairro,
      city: specialty.clinica.cidade,
      uf: specialty.clinica.uf,
      number: specialty.clinica.numero,
    },
    specialtys: specialty.clinica.especialidade.map((spe) => ({
      description: firstLetterCapitalize(spe.descricao),

      defaultPrice: spe.precos.reduce((ac, price) => {
        if (price.idEspecialidade === spe.idEspecialidade) {
          ac = formatPrice(price.precoNormal)
          return ac
        }
        return ac
      }, null),

      ritaPrice: spe.precos.reduce((ac, price) => {
        if (price.idEspecialidade === spe.idEspecialidade) {
          ac = formatPrice(price.precoRita)
          return ac
        }
        return ac
      }, null),
    })),
  }))

  return {
    photo: dataClinic.avatar,
    title: firstLetterCapitalize(dataClinic.titulo),
    name: firstLetterCapitalize(dataClinic.nome),
    address: dataClinic.endereco,
    district: dataClinic.bairro,
    city: dataClinic.cidade,
    uf: dataClinic.uf,
    number: dataClinic.numero,
    verified: dataClinic.validadoClinica,
    crmuf: dataClinic.crmuf,
    crm: dataClinic.CRM,
    clinicdoctor,
    doctorSpecialty: { ...doctorSpecialty },
  }
}
