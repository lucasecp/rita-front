import apiPatient from '@/services/apiPatient'
import { useLoading } from '@/hooks/useLoading'
import { useHistory } from 'react-router-dom'
import { OPERATOR_DEPENDENT_MANAGMENT } from '@/routes/constants/namedRoutes/routes'
import { toast } from '@/styles/components/toastify'

export const useConnectDependent = (): any => {
  const { Loading } = useLoading()
  const history = useHistory()

  const connectDependent = async (
    holder: { id: ''; cpf: '' },
    dependentId: number,
  ) => {
    try {
      Loading.turnOn()
      await apiPatient.post(
        `paciente/${holder.id}/dependente/${dependentId}?forcarAssociacao=true`,
      )
      toast.success('Dependente associado ao Titular')

      history.push(OPERATOR_DEPENDENT_MANAGMENT, { cpf: holder.cpf })
    } catch (error: any) {
      toast.error(error?.response?.data?.message || 'Erro ao associar.')
    } finally {
      Loading.turnOff()
    }
  }

  return { connectDependent }
}
