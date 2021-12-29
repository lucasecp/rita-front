import ItemClinic from '../iItemClinic'
import ItemDoctor from '../iItemDoctor'
import ItemSpecialty from '../itemSpecialty'

export const fromApi = (data: any[]) => {
  const specialtyMapped: any[] = data.filter((info) => info.idEspecialidade)
  const doctorMapped: any[] = data.filter((info) => info.idMedico)
  const clinicMapped: any[] = data.filter((info) => info.idClinica)

  const specialtys = {
    options: specialtyMapped.map((spec) =>
      ItemSpecialty(spec.idEspecialidade, spec.descricao, 'Especialidade'),
    ),
  }

  const doctors = {
    options: doctorMapped.map((doctor) =>
      ItemDoctor(doctor.idMedico, doctor.nome, 'Especialista'),
    ),
  }

  const clinics = {
    options: clinicMapped.map((clinic) =>
      ItemClinic(clinic.idPaciente, clinic.nome, 'Clínica'),
    ),
  }

  return [doctors, clinics, specialtys]
}
