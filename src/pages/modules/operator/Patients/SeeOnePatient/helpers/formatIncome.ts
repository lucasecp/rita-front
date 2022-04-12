export const formatIncome = (income: string): string => {
  const incomes = {
    NaopossuoRenda: 'Não possui renda',
    AteUmSalarioMinimoEMeio: 'Até um salário mínimo e meio',
    AcimaDeUmSalarioMinimoEMeio: 'Acima de um salário mínimo e meio',
  }
  return incomes[income] || 'Não informado'
}
