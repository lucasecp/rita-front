const incomeType = {
  NO_INCOME: 'NaopossuoRenda',
  ONE_HALF: 'AteUmSalarioMinimoEMeio',
  MORE_ONE_HALF: 'AcimaDeUmSalarioMinimoEMeio',
}

const incomeOptions = [
  { label: 'Não possuo renda', value: incomeType.NO_INCOME },
  {
    label: 'Até 1 salário mínimo e meio',
    value: incomeType.ONE_HALF,
  },
  {
    label: 'Acima de 1 salário mínimo e meio',
    value: incomeType.MORE_ONE_HALF,
  },
]

export { incomeType, incomeOptions }
