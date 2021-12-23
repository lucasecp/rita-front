import React, { useState } from 'react'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import EditDependent from './EditDependent'
import { fromApi } from './adapters'
const SeeDependents = () => {
  const dataFromApi = {
    nome: 'Hiago Alves ',
    cpf: '09872058032',
    sexo: 'M',
    dataNascimento: '01/02/1985',
    telefone: '(61) 98498-4848',
    email: 'teste@teste.com',
    status: '',
    cep: '21992292',
    uf: 'RJ',
    municipio: 'Rio de Janeiro',
    endereco: 'Rua Tal ',
    numero: '123',
    bairro: 'Tijuca',
    complemento: 'Apartamento',
  }
  const [dependentData, setDependentData] = useState(fromApi(dataFromApi));
  
  return (
    <DefaultLayout title="Visualizar informações de dependente">
      <EditDependent dependentData={dependentData}  setDependentData={setDependentData}/>
    </DefaultLayout>
  )
}

export default SeeDependents
