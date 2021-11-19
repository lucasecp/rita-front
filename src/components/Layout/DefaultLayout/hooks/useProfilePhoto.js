import convertImageFromApiToBase64 from '@/helpers/convertImageFromApiToBase64'
import { useLoading } from '@/hooks/useLoading'
import apiPatient from '@/services/apiPatient'
import { useState } from 'react'

export default () => {
  const [photo, setPhotoApi] = useState(
    window.localStorage.getItem('@Rita/Photo/Profile')
  )
  const { Loading } = useLoading()

  const getProfilePhoto = async () => {
    if (photo) {
      return
    }

    try {
      Loading.turnOn()

      const response = await apiPatient.get('/paciente/foto-perfil', {
        responseType: 'arraybuffer',
      })
      const photo = convertImageFromApiToBase64(response)

      setPhotoApi(photo)
      window.localStorage.setItem('@Rita/Photo/Profile', photo)
    } catch ({ response }) {
      if (response.status === 404) {
        setPhotoApi('')
      }
    } finally {
      Loading.turnOff()
    }
  }
  return [photo, getProfilePhoto]
}
