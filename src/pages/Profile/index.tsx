import React, { useEffect, useState } from 'react'

import { DefaultLayout } from 'src/components/Layout/DefaultLayout'
import { DisplayUserInformations } from './containers/DisplayUserInformations'
import { EditPersonalData } from './containers/EditPersonalData'

// import ""

import { Container } from './styles'
import apiPatient from 'src/services/apiPatient'
import { useLoading } from 'src/hooks/useLoading'
import { useModal } from 'src/hooks/useModal'
import { ProfileInactive } from './messages/ProfileInactive'
import { fromApiDataToDisplay, fromApiPersonalDatas } from './adapters/fromApi'

export const Profile = () => {
  const { Loading } = useLoading()
  const { showMessage } = useModal()

  const [personalDatas, setPersonalDatas] = useState()
  const [dataToDisplay, setDataToDisplay] = useState()

  useEffect(() => {
    document.title = 'Rita Saúde | Perfil'

    const loadProfileInformations = async () => {
      try {
        Loading.turnOn()

        const {
          data,
          data: { endereco },
        } = await apiPatient.get('/paciente/meu-perfil')

        setDataToDisplay(fromApiDataToDisplay(data))

        setPersonalDatas(fromApiPersonalDatas(data, endereco))

        if (data.status === 'I') {
          showMessage(ProfileInactive, {}, true)
        }
      } catch (err) {
        console.log(err)
      } finally {
        Loading.turnOff()
      }
    }

    loadProfileInformations()
  }, [])

  return (
    <DefaultLayout title="Perfil">
      <Container>
        <DisplayUserInformations dataToDisplay={dataToDisplay} />
        {personalDatas && <EditPersonalData personalDatas={personalDatas} />}
      </Container>
    </DefaultLayout>
  )
}
