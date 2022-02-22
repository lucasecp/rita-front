import React, { useEffect, useState } from 'react'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import EditClinic from './EditClinic'
import { fromApi } from './adapters'
import { useLoading } from '@/hooks/useLoading'
import apiAdmin from '@/services/apiAdmin'
import { useHistory, useLocation } from 'react-router'
import { OPERATOR_SEE_ALL_SPECIALISTS } from '@/routes/constants/namedRoutes/routes'

const SeeOneSpecialist = () => {
  const [specialist, setSpecialist] = useState({})
  const { Loading } = useLoading()
  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    if (!location.state) {
      return history.push(OPERATOR_SEE_ALL_SPECIALISTS)
    }
    console.log(location.state.idDoctor)

    document.title = 'Rita Saúde | Informações Especialista'

    const getSpecialist = async () => {
      try {
        Loading.turnOn()
        const { data } = await apiAdmin.get(
          `/medico/${location.state.idDoctor}`,
        )

        const clinicMapped = fromApi(data)

        setSpecialist(clinicMapped)
      } catch (error) {
      } finally {
        Loading.turnOff()
      }
    }
    getSpecialist()

    // const clinicMapped = fromApi({
    //   nome: 'Maria dos Santos',
    //   nomeProfissional: 'Maria dos Santos',
    //   cpf: '83845829173',
    //   recebeAtendimento: true,
    //   ufRegistroProfissional: 'RJ',
    //   conseloClasse: '2345',
    //   email: 'email@teste.com',
    //   celular: '21999999999',
    //   registroProfissional: '13456',
    //   especialidade: [{ idEspecialidade: 12, descricao: 'Cardiologia' }],
    //   clinica: [{ idClinica: 2, descricao: 'Rita Saúde' }],
    // })

    // setSpecialist(clinicMapped)
  }, [])

  return (
    <DefaultLayout title="Especialista - Visualizar e Editar">
      <EditClinic specialistData={specialist} />
    </DefaultLayout>
  )
}

export default SeeOneSpecialist
