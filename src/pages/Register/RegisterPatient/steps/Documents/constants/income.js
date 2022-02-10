const incomeType = {
  NO_INCOME: 'no_income',
  ONE_HALF: 'one_half',
  MORE_ONE_HALF: 'more_one_half',
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
