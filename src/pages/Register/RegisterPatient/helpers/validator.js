export const validateName = (value) => {
  if (!value.trim()) return { name: 'Nome Obrigatório.' }
  return { name: '' }
}
export const validateEmail = (value) => {
  if (!value) return { email: 'Email Obrigatório' }
  else if (!/\S+@\S+\.\S+/.test(value)) return { email: 'Email inválido.' }
  return { email: '' }
}

export const validateCpf = (value) => {
  if (!value) return { cpf: 'CPF Obrigatório.' }
 return { cpf: '' }
}
export const validatePhone = (value) => {
  if (!value) return { phone: 'Celular Obrigatório.' }
  return { phone: '' }
}
export const validateGender = (value) => {
  if (!value) return { gender: 'Gênero Obrigatório.' }
  return { gender: '' }
}
export const validateBirthdate = (value) => {
  if (!value) return { birthdate: 'Data de Nascimento Obrigatória.' }
return { birthdate: '' }
}

