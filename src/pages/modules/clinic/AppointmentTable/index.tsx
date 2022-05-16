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
import { useAuth } from '@/hooks/login'

const AppointmentTable: React.FC = () => {
  const { user } = useAuth()
  const [specialtys, setSpecialtys] = useState<SpecialtysI[]>([])
  const [isEdting, setEdting] = useState(false)
  const [fieldWasChanged, setFieldWasChanged] = useState(false)
  const [formWasSubmited, setFormWasSubmited] = useState(false)
  const [specialtysToApi, setSpecialtysTopApi] = useState<SpecialtysToApiI>(
    {} as SpecialtysToApiI,
  )

  const { Loading } = useLoading()
  const { showMessage, showSimple } = useModal()

  const getSpecialtys = async () => {
    try {
      Loading.turnOn()

      const { data } = await apiAdmin.get(
        `clinica/${user.idClinica}/tabela-precos`,
      )

      setSpecialtys(fromApi(data.especialidades))
    } catch (error) {
    } finally {
      Loading.turnOff()
    }
  }

  const hasError = () => {
    const arraySpecilatys = Object.values(specialtysToApi)

    return arraySpecilatys.some((spec) => !spec.ritaPrice || !spec.normalPrice)
  }

  const updatePrices = async () => {
    if (hasError()) {
      return showSimple.error('Todos os campos são obrigatórios.')
    }

    setFormWasSubmited(true)

    try {
      Loading.turnOn()
      await apiAdmin.post(
        `/clinica/${user.idClinica}/tabela-precos`,
        toApi(specialtysToApi),
      )

      getSpecialtys()

      toast.success('Preços cadastrados com sucesso')
      setEdting(false)
      setFieldWasChanged(false)
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
      setFormWasSubmited(false)
      return showMessage(CancelEdting, { setEdting, setFieldWasChanged })
    }
    setFormWasSubmited(false)
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
            formWasSubmited={formWasSubmited}
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
