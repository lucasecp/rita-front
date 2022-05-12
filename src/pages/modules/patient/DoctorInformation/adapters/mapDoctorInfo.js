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
      ...specialty?.clinica?.especialidade?.map((specialty) =>
        specialty.agenda?.map((schedule) => schedule.agenda),
      ),
    ),

    status: specialty.statusMedicoClinica,
    clinic: {
      photo: specialty.clinica.foto,
      description: firstLetterCapitalize(specialty.clinica?.descricao),
      phone: formatPhone(specialty.clinica.telefone),
      status: specialty.clinica.status,
      address: specialty.clinica.endereco,
      district: specialty.clinica.bairro,
      city: specialty.clinica.cidade,
      uf: specialty.clinica.uf,
      number: specialty.clinica.numero,
    },
    specialtys: specialty.clinica?.especialidade?.map((spe) => ({
      description: firstLetterCapitalize(spe.descricao),

      defaultPrice: spe?.precos?.reduce((ac, price) => {
        if (price.idEspecialidade === spe.idEspecialidade) {
          ac = formatPrice(price.precoNormal)
          return ac
        }
        return ac
      }, null),

      ritaPrice: spe?.precos?.reduce((ac, price) => {
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
    name:
      firstLetterCapitalize(dataClinic.nomeProfissional) ||
      firstLetterCapitalize(dataClinic.nome),
    address: dataClinic.endereco,
    district: dataClinic.bairro,
    city: dataClinic.cidade,
    uf: dataClinic.uf,
    number: dataClinic.numero,
    verified: dataClinic.validadoClinica,
    crmuf: dataClinic.ufOrgaoEmissor,
    crm: dataClinic?.orgaoEmissor?.descricao,
    profissionalRegister: dataClinic?.registroProfissional,
    clinicdoctor,
    doctorSpecialty: { ...doctorSpecialty },
  }
}
