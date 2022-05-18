import { firstLetterCapitalize } from '@/helpers/firstLetterCapitalize'
import { formatPhone } from '@/helpers/formatPhone'
import { scheduleFromApi } from './mapSchedule'
import { formatPrice } from '@/helpers/formatPrice'

export const fromApi = (dataDoctor) => {
  // const doctorSpecialty = dataDoctor?.especialidades?.find(
  //   (dSpecialty) => dSpecialty,
  // )

  const clinicdoctor = dataDoctor?.clinicas?.map((clinic) => ({
    linkGoogleMap: clinic.comoChegar,

    scheduleAppointment: scheduleFromApi(
      ...clinic?.especialidades?.map((clinic) =>
        clinic.agenda?.map((schedule) => schedule.agenda),
      ),
    ),

    specialtys: clinic?.especialidades?.map((spe) => ({
      description: firstLetterCapitalize(spe.descricao),

      defaultPrice: formatPrice(spe?.preco?.precoNormal),

      ritaPrice: formatPrice(spe?.preco?.precoRita),
    })),
    status: clinic.statusMedicoClinica,
    clinic: {
      photo: clinic.foto,
      description: firstLetterCapitalize(clinic?.descricao),
      phone: formatPhone(clinic.telefone),
      status: clinic.status,
      address: clinic.endereco,
      district: clinic.bairro,
      city: clinic.cidade,
      uf: clinic.uf,
      number: clinic.numero,
    },
  }))

  const doctorSpecialty = dataDoctor?.especialidades?.map((spe) => ({
    description: firstLetterCapitalize(spe.descricao),
    RQE: spe.RQE
  }))

  return {
    photo: dataDoctor.avatar,
    title: firstLetterCapitalize(dataDoctor.titulo),
    name:
      firstLetterCapitalize(dataDoctor.nomeProfissional) ||
      firstLetterCapitalize(dataDoctor.nome),
    address: dataDoctor.endereco,
    district: dataDoctor.bairro,
    city: dataDoctor.cidade,
    uf: dataDoctor.uf,
    number: dataDoctor.numero,
    verified: dataDoctor.validadoClinica,
    crmuf: dataDoctor.ufOrgaoEmissor,
    crm: dataDoctor?.orgaoEmissor?.descricao,
    profissionalRegister: dataDoctor?.registroProfissional,
    clinicdoctor,
    doctorSpecialty,
    // doctorSpecialty: { ...doctorSpecialty },
  }
}
