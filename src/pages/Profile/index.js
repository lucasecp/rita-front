import React, { useEffect } from 'react'
import DefaultLayout from '../../components/Layout/DefaultLayout'

const Profile = () => {
  useEffect(() => {
    document.title = 'Perfil'
  }, [])

  return <DefaultLayout>
     Profile
  </DefaultLayout>
}

export default Profile
