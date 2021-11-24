import React, { useEffect, useState } from 'react'

import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { DisplayUserInformations } from './containers/DisplayUserInformations'
import { EditPersonalData } from './containers/EditPersonalData'

import { Container } from './styles'
import apiPatient from '@/services/apiPatient'
import { useLoading } from '@/hooks/useLoading'

export const Profile = () => {
  const { Loading } = useLoading()
  const [personalDatas, setPersonalDatas] = useState()

  useEffect(() => {
    const loadProfileInformations = async () => {
      try {
        Loading.turnOn()

        const {
          data,
          data: { endereco },
        } = await apiPatient.get('/paciente/meu-perfil')

        setPersonalDatas({
          personalDatas: {
            name: data.nome,
            birthDate: data.dataNascimento,
            gender: data.sexo,
            phone: data.telefone,
            email: data.email,
          },
          address: {
            cep: endereco.cep,
            uf: endereco.uf,
            city: endereco.cidade,
            addressUser: endereco.logradouro,
            number: endereco.numero,
            district: endereco.bairro,
            complement: endereco.complemento,
          },
        })
      } catch ({ response }) {
        console.log(response)
      } finally {
        Loading.turnOff()
      }
    }

    loadProfileInformations()
  }, [])

  return (
    <DefaultLayout title="Perfil">
      <Container>
        <DisplayUserInformations />
        {personalDatas && <EditPersonalData personalDatas={personalDatas} />}
      </Container>
    </DefaultLayout>
  )
}
