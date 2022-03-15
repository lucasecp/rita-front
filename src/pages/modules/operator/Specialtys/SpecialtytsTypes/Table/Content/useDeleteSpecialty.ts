import apiAdmin from '@/services/apiAdmin'
import { useLoading } from '@/hooks/useLoading'
import { useModal } from '@/hooks/useModal'

interface useDeleteSpecialtyProps {
  deleteSpecialty: (id?: number) => Promise<void>
}

export const useDeleteSpecialty = (): useDeleteSpecialtyProps => {
  const { showSimple } = useModal()
  const { Loading } = useLoading()

  const deleteSpecialty = async (id?: number) => {
    try {
      Loading.turnOn()

      await apiAdmin.delete(`tipo-especialidade/${id}`)
    } catch (error) {
      throw new Error('Erro')
    } finally {
      Loading.turnOff()
    }
  }
  return { deleteSpecialty }
}
