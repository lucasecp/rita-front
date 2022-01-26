import clear from '@/helpers/clear/SpecialCaracteres'
import apiPatient from '@/services/apiPatient'
import validateCpf from '@/helpers/validateCpf'
import { useLoading } from '@/hooks/useLoading'

export const useCpfValidate = (): any => {
  const { Loading } = useLoading()

  const alreadyExist = async (cpf: string) => {
    let error = false
    try {
      Loading.turnOn()
      const { data } = await apiPatient.get(`/paciente/status?cpf=${cpf}`)
      if (data.status === 'D') {
        error = true
      } else {
        error = false
      }
    } catch (error) {
    } finally {
      Loading.turnOff()
    }
    return error
  }

  const validatorCpf = async (value: string) => {
    const newValue = clear(value)
    if (!newValue) return 'CPF Obrigatório.'
    else if (!validateCpf(newValue)) return 'CPF Inválido.'
    else if (await alreadyExist(newValue)) {
      return 'O CPF informado pertence a um dependente, preencha o campo com o CPF de um titular'
    }
    return ''
  }

  return { validatorCpf }
}
