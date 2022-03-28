import apiAdmin from '@/services/apiAdmin'
import { useLoading } from '@/hooks/useLoading'
// import { useModal } from '@/hooks/useModal'

interface useDeleteIssuingAgencyProps {
  deleteIssuingAgency: (id?: number) => Promise<void>
}

export const useDeleteIssuingAgency = (): useDeleteIssuingAgencyProps => {
  // const { showSimple } = useModal()
  const { Loading } = useLoading()

  const deleteIssuingAgency = async (id?: number) => {
    try {
      Loading.turnOn()

      await apiAdmin.delete(`orgao-emissor/${id}`)
    } catch (error) {
      throw new Error('Erro')
    } finally {
      Loading.turnOff()
    }
  }
  return { deleteIssuingAgency }
}
