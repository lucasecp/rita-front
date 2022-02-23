import { Container, ButtonGroup } from './styles'
import React, { useEffect, useState } from 'react'
import { PersonalDatas } from '../components/PersonalDatas'
import { Clinics } from '../components/Clinics'
import { ProfissionalDatas } from '../components/ProfissionalDatas'
import { Specialty } from '../components/Specialty'
import Denied from '../messages/requiredRqe'
import { useModal } from '@/hooks/useModal'
import { useHistory } from 'react-router'
import { OPERATOR_SEE_ALL_CLINICS } from '@/routes/constants/namedRoutes/routes'
import CancelEdting from '../messages/CancelEdting/index'
import { ErrorsI } from '../Types'
import { scrollOntoFieldError } from '../../../../../../helpers/scrollOntoFieldError'
import { toApi } from '../adapters'
import apiAdmin from '@/services/apiAdmin'
import { toast } from '@/styles/components/toastify'
import { useLoading } from '@/hooks/useLoading'
import OutlineButton from '../../../../../../components/Button/Outline/index'
import ButtonPrimary from '../../../../../../components/Button/Primary/index'

const EditSpecialist: React.FC<{ specialistData: any }> = ({
  specialistData,
}) => {
  const [isEditing, setIsEditing] = useState(false)
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
  const [errors, setErrors] = useState<ErrorsI>({})

  const { showSimple, showMessage } = useModal()
  const { Loading } = useLoading()

  const history = useHistory()

  useEffect(() => {
    if (isEditing) {
      setFieldWasChanged(true)
    }
  }, [personalDatas, profissionalData, specialtys])

  const onEdit = () => {
    const status = specialistData.personalDatas?.status

    if (status === 'PENDING') {
      return showSimple.warning(
        'Os dados desse dependente estão sendo analisados, pedimos que aguarde a aprovação pela nossa equipe.',
      )
    }

    if (status === 'BLOCKED') {
      return showMessage(Denied)
    }
    setIsEditing(true)
    scrollTo(0, 0)
  }

  const hasErrorOnFields = (fields: any) => {
    let error = false
    const hasSpecificError = Object.values(errors)
    error = !!hasSpecificError[0]

    for (const field in fields) {
      if ((!fields[field] || !fields[field].length) && field !== 'complement') {
        setErrors((errors) => ({ ...errors, [field]: 'Campo obrigatório' }))
        error = true
      }
    }
    return error
  }

  const onSave = async () => {
    scrollOntoFieldError(errors)

    if (
      hasErrorOnFields({
        ...personalDatas,
        ...profissionalData,

        ...specialtys,
      })
    ) {
      return
    }

    try {
      Loading.turnOn()

      await apiAdmin.put(
        `/clinica/${specialistData.personalDatas?.id}`,
        toApi({
          id: specialistData.personalDatas?.id,
          ...personalDatas,
          ...profissionalData,

          ...specialtys,
        }),
      )

      toast.success('Alteração realizada com sucesso.')

      history.push(OPERATOR_SEE_ALL_CLINICS)
    } catch (error) {
      toast.error('Erro ao editar.')
    } finally {
      Loading.turnOff()
    }
  }

  const onCancel = () => {
    if (fieldWasChanged) {
      return showMessage(CancelEdting, {
        setEdting: setIsEditing,
        setFieldWasChanged,
      })
    }
    setIsEditing(false)
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
