import { Container, ButtonGroup } from './styles'
import React, { useEffect, useState } from 'react'
import { PersonalDatas } from '../components/PersonalDatas'
import { Clinics } from '../components/Clinics'
import { ProfissionalDatas } from '../components/ProfissionalDatas'
import { Specialty } from '../components/Specialty'
import Denied from '../messages/requiredRqe'
import { useModal } from '@/hooks/useModal'
import { useHistory } from 'react-router'
import { OPERATOR_SEE_ALL_SPECIALISTS } from '@/routes/constants/namedRoutes/routes'
import CancelEdting from '../messages/CancelEdting/index'
import { ErrorsI } from '../Types'
import { scrollOntoFieldError } from '../../../../../../helpers/scrollOntoFieldError'
import { toApi } from '../adapters'
import apiAdmin from '@/services/apiAdmin'
import { toast } from '@/styles/components/toastify'
import { useLoading } from '@/hooks/useLoading'
import OutlineButton from '../../../../../../components/Button/Outline/index'
import ButtonPrimary from '../../../../../../components/Button/Primary/index'

interface EditSpecialistProps {
  specialistData: any
  id: string | undefined
}
const EditSpecialist: React.FC<EditSpecialistProps> = ({
  specialistData,
  id,
}) => {
  const [personalDatas, setPersonalDatas] = useState(
    specialistData?.personalDatas || {},
  )

  const [profissionalData, setProfissionalData] = useState(
    specialistData?.profissionalData || {},
  )
  const [clinics, setClinics] = useState(specialistData?.clinics || {})
  const [specialtys, setSpecialtys] = useState(
    specialistData?.specialtys?.name || {},
  )
  const [fieldWasChanged, setFieldWasChanged] = useState(false)
  const [clickOnSave, setClickOnSave] = useState(false)
  const [errors, setErrors] = useState<ErrorsI>({})
  const { Loading } = useLoading()

  const history = useHistory()

  const { showMessage } = useModal()

  useEffect(() => {
    if (clickOnSave) {
      setFieldWasChanged(true)
    }
  }, [personalDatas, profissionalData, specialtys, clinics])

  const hasErrorOnFields = (fields: any) => {
    let error = false
    const hasSpecificError = Object.values(errors)
    error = !!hasSpecificError[0]

    for (const field in fields) {
      if (
        !fields[field] ||
        (Array.isArray(fields[field]) && !fields[field].length)
      ) {
        setErrors((errors) => ({ ...errors, [field]: 'Campo obrigatório' }))
        error = true
      }
    }
    return error
  }

  const onSave = async () => {
    setClickOnSave(true)
    if (
      hasErrorOnFields({
        ...personalDatas,
        ...profissionalData,
        ...specialtys,
        ...clinics,
      })
    ) {
      return
    }
    setErrors({})

    try {
      Loading.turnOn()

      await apiAdmin.put(
        `/medico/${id}`,
        toApi({
          ...personalDatas,
          ...profissionalData,
          ...specialtys,
          ...clinics,
        }),
      )

      toast.success('Alteração realizada com sucesso.')

      history.push(OPERATOR_SEE_ALL_SPECIALISTS)
    } catch (error) {
      toast.error('Erro ao editar.')
    } finally {
      Loading.turnOff()
    }
  }

  useEffect(() => {
    if (clickOnSave) {
      scrollOntoFieldError(errors)
    }
  }, [clickOnSave])

  const onCancel = () => {
    if (fieldWasChanged) {
      return showMessage(CancelEdting, {
        setEdting: setClickOnSave,
        setFieldWasChanged,
      })
    }
    history.push(OPERATOR_SEE_ALL_SPECIALISTS)
  }

  return (
    <Container>
      <div>
        <PersonalDatas
          personalDatas={specialistData?.personalDatas}
          setPersonalDatas={setPersonalDatas}
          errors={errors}
          setErrors={setErrors}
        />
        <ProfissionalDatas
          data={specialistData?.profissionalData}
          setData={setProfissionalData}
          errors={errors}
          setErrors={setErrors}
        />
        <Specialty
          specialistSpecialtys={specialistData?.specialtys}
          setSpecialistSpecialtys={setSpecialtys}
          errors={errors}
          setErrors={setErrors}
        />
        <Clinics
          specialistClinic={specialistData?.clinics}
          setSpecialistClinic={setClinics}
          errors={errors}
          setErrors={setErrors}
        />
      </div>

      <ButtonGroup>
        <OutlineButton onClick={onCancel}>Cancelar</OutlineButton>
        <ButtonPrimary onClick={onSave}>Salvar</ButtonPrimary>
      </ButtonGroup>
    </Container>
  )
}

export default EditSpecialist
