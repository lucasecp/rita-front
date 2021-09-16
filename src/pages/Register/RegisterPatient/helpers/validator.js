import cpfValidate from "@/helpers/validateCpf"
const anySpecialCaracter = /[^a-zA-Z0-9]/g
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
  const newValue= value.replace(anySpecialCaracter,'')
  if (!newValue.replace(anySpecialCaracter,'')) return { cpf: 'CPF Obrigatório.' }
 else if (!cpfValidate(newValue.replace(anySpecialCaracter,''))) return { cpf: 'CPF Inválido.' }
 return { cpf: '' }
}
export const validatePhone = (value) => {
  if (value.replace(anySpecialCaracter,'').length < 11) return { phone: 'Celular inválido.' }
  return { phone: '' }
}
export const validateGender = (value) => {
  if (!value) return { gender: 'Campo Obrigatório.' }
  return { gender: '' }
}
export const validateBirthdate = (value) => {
   const newValue= value.replace(anySpecialCaracter,'')
  if (!newValue) return { birthdate: 'Data de Nascimento Obrigatória.' }
return { birthdate: '' }
}
export const validateCep = (value) => {
   if (value.replace(anySpecialCaracter,'').length < 8) return { cep: 'Cep Inválido.' }
return { cep: '' }
}
export const validateCity = (value) => {
  if (!value) return { city: 'Campo Obrigatório.' }
return { city: '' }
}
export const validateUf = (value) => {
  if (!value) return { uf: 'Campo Obrigatório.' }
return { uf: '' }
}
export const validateDistrict = (value) => {
  if (!value) return { district: 'Campo Obrigatório.' }
return { district: '' }
}
export const validateAddress = (value) => {
  if (!value) return { address: 'Campo Obrigatório.' }
return { address: '' }
}
export const validateNumberHome = (value) => {
  if (!value) return { address: 'Campo Obrigatório.' }
return { numberHome: '' }
}
export const validateComplement = (value) => {
  if (!value) return { address: 'Campo Obrigatório.' }
return { complement: '' }
}

