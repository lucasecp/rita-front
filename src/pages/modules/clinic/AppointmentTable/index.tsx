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
import OutlineButton from '@/components/Button/Outline'
import { useModal } from '@/hooks/useModal'
import CancelEdting from './messages/CancelEdting/index'

const AppointmentTable: React.FC = () => {
  const [specialtys, setSpecialtys] = useState<SpecialtysI[]>([])
  const [isEdting, setEdting] = useState(false)
  const [fieldWasChanged, setFieldWasChanged] = useState(false)
  const [specialtysToApi, setSpecialtysTopApi] = useState<SpecialtysToApiI>(
    {} as SpecialtysToApiI,
  )
  console.log(specialtysToApi)

  const { Loading } = useLoading()
  const { showMessage } = useModal()

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

  useEffect(() => {
    document.title = 'Rita Saúde | Tabela de consulta'

    getSpecialtys()
  }, [])

  const onCancel = () => {
    if (fieldWasChanged) {
      return showMessage(CancelEdting, { setEdting, setFieldWasChanged })
    }
    setEdting(false)
  }

  return (
    <DefaultLayout title="Tabela de consulta">
      <Content>
        <h2>Especialidades</h2>
        {specialtys.map((spec) => (
          <ItemSpecialty
            key={spec.id}
            data={spec}
            isEdting={isEdting}
            setSpecialtysTopApi={setSpecialtysTopApi}
            setFieldWasChanged={setFieldWasChanged}
          />
        ))}
        <footer>
          {specialtys.length > 0 && isEdting && (
            <>
              <OutlineButton onClick={onCancel}>Cancelar</OutlineButton>
              <ButtonPrimary onClick={updatePrices}>Salvar</ButtonPrimary>
            </>
          )}
          {specialtys.length > 0 && !isEdting && (
            <ButtonPrimary onClick={() => setEdting(true)}>
              Editar
            </ButtonPrimary>
          )}
        </footer>
      </Content>
    </DefaultLayout>
  )
}

export default AppointmentTable
