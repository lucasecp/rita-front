import React, { useEffect, useState } from 'react'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import EditClinic from './EditClinic'
import { fromApi } from './adapters'
import { useLoading } from '@/hooks/useLoading'
import apiPatient from '@/services/apiPatient'
import { useHistory, useLocation } from 'react-router'

const SeeOneClinic = () => {
  const [clinic, setClinic] = useState({})
  const { Loading } = useLoading()
  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    document.title = 'Rita Saúde | Clínicas'

    const getClinic = async () => {
      try {
        Loading.turnOn()
        // const { data } = await apiPatient.get(`/paciente/dependente?id=2879956`)
        // console.log(data)

        // const clinicMapped = fromApi(data)

        // setClinic(clinicMapped)

        const clinicFromApi = {
          personalDatas: {
            name: 'Clinica Sao Paulo',
            socialreason: 'Clinica Sao Paulo Me',
            cnpj: '99.999.999/999-99',
            status: 'Ativa',
            phone: '(99) 9999-9999',
          },
          acessDatas: {
            nameAdmin: 'Jose Junior',
            cpf: '999.999.999-99',
            phone: '(99) 99999-9999',
            email: 'clinica@clinicasaopaulo.com.br',
          },
          address: {
            cep: '20333-000',
            uf: 'RJ',
            city: 'Rio de Janeiro',
            address: 'Rua 6',
            number: '30',
            district: 'Copacabana',
            complement: 'Bloco 2',
          },
          specialtys: [
            {
              id: 2,
              name: 'Cardiologia',
            },
            {
              id: 3,
              name: 'Dermatologia',
            },
            {
              id: 4,
              name: 'Neurologia',
            },
            {
              id: 6,
              name: 'Ortopedia',
            },
          ],
        }

        setClinic(clinicFromApi)
      } catch (error) {
        console.log(error)
      } finally {
        Loading.turnOff()
      }
    }
    getClinic()
  }, [])

  return (
    <DefaultLayout title="Visualizar informações">
      <EditClinic clinicData={clinic} />
    </DefaultLayout>
  )
}

export default SeeOneClinic
