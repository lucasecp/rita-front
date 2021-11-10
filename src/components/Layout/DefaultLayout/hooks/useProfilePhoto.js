import { useLoading } from '@/hooks/useLoading'
import apiPatient from '@/services/apiPatient'
import { useState } from 'react'

export default () => {
  const [photoApi, setPhotoApi] = useState('')
  const { Loading } = useLoading()

  const getProfilePhoto = async () => {
    try {
      Loading.turnOn()

      const response = await apiPatient.get('/paciente/foto-perfil')

      setPhotoApi(response)
    }
    catch ({ response }) {
      if (response.status === 404) {
        setPhotoApi('')
      }
    }
    finally {
      Loading.turnOff()
    }
  }
  return [photoApi,getProfilePhoto]
}
