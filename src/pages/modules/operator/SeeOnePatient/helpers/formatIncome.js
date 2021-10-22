export default (type) => {
   if(type === 'AcimaDeUmSalarioMinimoEMeio') return 'Acima de um salário mínimo'
   if(type === 'NaopossuoRenda') return 'Não possui renda'
   if(type === 'AteUmSalarioMinimoEMeio') return 'Até um salário mínimo'
}