import clear from '@/helpers/clearSpecialCharacters'
import apiPatient from '@/services/apiPatient'
import validateCpf from '@/helpers/validateCpf'
import { useLoading } from '@/hooks/useLoading'

export const useCpfValidate = (): any => {
  const { Loading } = useLoading()
  let msgApi = ''

  const alreadyExist = async (cpf: string) => {
    let error = false

    try {
      Loading.turnOn()
      const { data } = await apiPatient.get(`/paciente/cpf?cpf=${cpf}`)
      if (data.titular?.nome) {
        error = true
      } else {
        error = false
      }
    } catch (error: any) {
      if (error.response.status === 404) {
        msgApi = 'CPF não localizado'
      }
    } finally {
      Loading.turnOff()
    }
    return msgApi ? true : error
  }

  const validatorCpf = async (value: string) => {
    const newValue = clear(value)

    if (!newValue) return 'CPF Obrigatório.'
    else if (!validateCpf(newValue)) return 'CPF Inválido.'
    else if (await alreadyExist(newValue)) {
      return (
        msgApi ||
        'O CPF informado pertence a um dependente, preencha o campo com o CPF de um titular'
      )
    }
    return ''
  }

  return { validatorCpf }
}
