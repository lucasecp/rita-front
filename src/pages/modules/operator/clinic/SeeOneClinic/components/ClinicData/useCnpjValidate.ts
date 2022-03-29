import clear from '@/helpers/clear/SpecialCaracteres'
import apiAdmin from '@/services/apiAdmin'
import { validateCNPJ } from '@/helpers/validateCNPJ'

export const useCnpjValidate = (): any => {
  const alreadyExist = async (cnpj: string) => {
    let error = false

    try {
      const { data } = await apiAdmin(`/clinica?limit=10&skip=0&cnpj=${cnpj}`)
      if (data.total === 0) {
        error = false
      } else {
        error = true
      }
    } catch (error) {}

    return error
  }

  const validatorCNPJ = async (value: string, initialCNPJ: string) => {
    const newValue = clear(value)
    const initialValue = clear(initialCNPJ)

    if (newValue === initialValue) {
      return ''
    }

    if (!newValue) return 'CNPJ Obrigatório.'
    else if (!validateCNPJ(newValue)) return 'CNPJ Inválido.'
    else if (await alreadyExist(newValue)) {
      return 'O CNPJ já consta no sistema, por favor verifique os dados e preencha novamente.'
    }

    return ''
  }

  return { validatorCNPJ }
}
