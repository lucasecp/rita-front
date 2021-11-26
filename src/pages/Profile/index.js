import React, { useEffect, useState } from 'react'

import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { DisplayUserInformations } from './containers/DisplayUserInformations'
import { EditPersonalData } from './containers/EditPersonalData'

import { Container } from './styles'
import apiPatient from '@/services/apiPatient'
import { useLoading } from '@/hooks/useLoading'
import { formatCpf } from '@/helpers/formatCpf'
import { formatPrice } from '@/helpers/formatPrice'
import { useModal } from '@/hooks/useModal'
import { ProfileInactive } from './messages/ProfileInactive'

export const Profile = () => {
  const { Loading } = useLoading()
  const { showMessage } = useModal()

  const [personalDatas, setPersonalDatas] = useState()
  const [dataToDisplay, setDataToDisplay] = useState()

  useEffect(() => {
    const loadProfileInformations = async () => {
      try {
        Loading.turnOn()

        const {
          data,
          data: { endereco },
        } = await apiPatient.get('/paciente/meu-perfil')

        setDataToDisplay({
          name: data.nome,
          cpf: formatCpf(data.cpf),
          contractedPlan: data.plano?.nome,
          status: data.status === 'A' ? 'active' : 'inactive',
          table: {
            type:
              data.tabela?.nome === 'Tabela Padrão'
                ? 'default'
                : data.tabela?.nome === 'Tabela Especial'
                ? 'special'
                : 'none',
            validity: data.tabela?.validade,
          },
        })

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
          supplementaryData: {
            contractedPlan: data.plano?.nome,
            contractedPlanSince: data.plano?.data,
            price: data.plano?.valor
              ? formatPrice(data.plano?.valor)
              : 'Isento',
            channel: data.plano?.canal,
            company: data.plano?.empresa,
          },
        })

        if (data.status === 'I') {
          showMessage(ProfileInactive)
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
