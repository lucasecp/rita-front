import React, { useEffect, useState } from 'react'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { Content } from './styles'
import ButtonPrimary from '@/components/Button/Primary'
import ItemSpecialty from './ItemSpecialty'
import { useLoading } from '@/hooks/useLoading'
import { fromApi, toApi } from './adapter/index'
import apiAdmin from '@/services/apiAdmin'
import { SpecialtysI, SpecialtysToApiI } from './types/index'
import { toast } from '../../../../styles/components/toastify/index'

const AppointmentTable: React.FC = () => {
  const [specialtys, setSpecialtys] = useState<SpecialtysI[]>([])
  const [specialtysToApi, setSpecialtysTopApi] = useState<SpecialtysToApiI>(
    {} as SpecialtysToApiI,
  )

  const { Loading } = useLoading()

  const updatePrices = async () => {
    try {
      Loading.turnOn()
      await apiAdmin.post(`/clinica/59/tabela-precos`, toApi(specialtysToApi))
      
      getSpecialtys()

      toast.success('Preços cadastrados com sucesso')
    } catch (error) {
      toast.error('Erro ao adicionar os preços')
    } finally {
      Loading.turnOff()
    }
  }

  const getSpecialtys = async () => {
    try {
      Loading.turnOn()
      const { data } = await apiAdmin.get(`clinica/59/tabela-precos`)
      setSpecialtys(fromApi(data.especialidades))
    } catch (error) {
    } finally {
      Loading.turnOff()
    }
  }

  useEffect(() => {
    document.title = 'Rita Saúde | Tabela de consulta'

    getSpecialtys()
  }, [])

  return (
    <DefaultLayout title="Tabela de consulta">
      <Content>
        <h2>Especialidades</h2>
        {specialtys.map((spec) => (
          <ItemSpecialty
            key={spec.id}
            data={spec}
            setSpecialtysTopApi={setSpecialtysTopApi}
          />
        ))}
        <footer>
          {specialtys.length > 0 && (
            <ButtonPrimary onClick={updatePrices}>Editar</ButtonPrimary>
          )}
        </footer>
      </Content>
    </DefaultLayout>
  )
}

export default AppointmentTable
