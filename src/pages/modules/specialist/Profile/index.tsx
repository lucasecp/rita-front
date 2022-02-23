import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import React, { useState, useEffect } from 'react'
import Form from './Form'
import Header from './Header'
import { DataSpecialistI } from './Types'
import { fromApi } from './adapters/index'
import { Content } from './styles'

const SpecialistProfile: React.FC = () => {
  const [data, setData] = useState<DataSpecialistI>({})
  
  useEffect(() => {
    setData(
      fromApi({
        nome: 'Maria dos Santos',
        nomeProfissional: 'Maria dos Santos',
        cpf: '83845829173',
        recebeAtendimento: true,
        ufRegistroProfissional: 'RJ',
        conseloClasse: '2345',
        email: 'email@teste.com',
        celular: '21999999999',
        especialidade: [{ idEspecialidade: 12, descricao: 'Cardiologia' }],
        clinica: [{ idClinica: 2, descricao: 'Rita Saúde' }],
        crm: 1028,
      }),
    )
  }, [])

  return (
    <DefaultLayout title="Perfil - Visualizar">
      <Content>
        <Header data={data} />
        <Form data={data} />
      </Content>
    </DefaultLayout>
  )
}

export default SpecialistProfile
