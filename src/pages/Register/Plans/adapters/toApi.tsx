export const reasonToApi = (reason: string): string => {
  const reasonObject = {
    adaptation: 'Eu não me adaptei ao plano da Rita Saúde',
    expectation: 'A Rita Saúde não atendeu às minhas expectativas',
    wantingToLeave: 'Não desejo mais fazer parte da Rita Saúde',
    expensive: 'O Plano da Rita Saúde está muito caro para mim',
    moving: 'Vou aderir ao plano de outra empresa',
  }

  return reasonObject[reason] || ''
}
