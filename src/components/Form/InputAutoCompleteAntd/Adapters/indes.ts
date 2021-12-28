export const mapData = (data=[]) => {
  const specialty = data.filter(info => info['idClinica'])

  // {
  //   options: data.map((spec) =>
  //     ItemSpecialty(
  //       spec.idPaciente,
  //       spec.nome,
  //       'Especialidade',
  //       firstLetterCapitalize(spec.nome, 50),
  //     ),
  //   ),
  // }

  // const doctor = {
  //   options: data.map((spec) =>
  //     ItemDoctor(
  //       spec.idPaciente,
  //       spec.nome,
  //       'Médico',
  //       firstLetterCapitalize(spec.nome, 50),
  //     ),
  //   ),
  // }
  // const clinic = {
  //   options: data.map((spec) =>
  //     ItemClinic(
  //       spec.idPaciente,
  //       spec.nome,
  //       'Clínica',
  //       firstLetterCapitalize(spec.nome, 50),
  //     ),
  //   ),
  // }

  return [specialty]
}
