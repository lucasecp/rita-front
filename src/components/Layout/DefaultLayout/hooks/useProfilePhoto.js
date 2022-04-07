import { convertImageFromApiToBase64}  from '@/helpers/convertImageFromApiToBase64'
import apiPatient from '@/services/apiPatient'
import { useState } from 'react'

export default () => {
  const [photo, setPhotoApi] = useState(
    window.localStorage.getItem('@Rita/Photo/Profile'),
  )

  const getProfilePhoto = async () => {
    if (photo) {
      return
    }

    try {
      const response = await apiPatient.get('/paciente/foto-perfil', {
        responseType: 'arraybuffer',
      })
      const photo = convertImageFromApiToBase64(response)

      setPhotoApi(photo)
      window.localStorage.setItem('@Rita/Photo/Profile', photo)
    } catch (error) {
      if (error.response?.status === 404) {
        setPhotoApi('')
      }
    }
  }
  return [photo, getProfilePhoto]
}
