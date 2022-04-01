import ButtonLink from '@/components/Button/Link'
import CancelEdting from '../messages/CancelEdting'
import { scrollOntoFieldError } from '@/helpers/scrollOntoFieldError'
import { useLoading } from '@/hooks/useLoading'
import { useModal } from '@/hooks/useModal'
import apiAdmin from '@/services/apiAdmin'
import { toast } from '@/styles/components/toastify'
import React, { useEffect, useState } from 'react'

import ButtonPrimary from '../../../../../components/Button/Primary'
import { MultiSelectOption } from '../../../../../components/Form/MultSelect'
import { ButtonGroup } from '../../../operator/clinic/SeeOneClinic/EditClinic/styles'
import { toApi } from '../adapters'
import { Clinics } from '../components/Clinics'
import SpecialistInfo from '../components/SpecialistInfo'
import { Specialtys } from '../components/Specialtys'
import { DataSpecialistI, ErrorsI, SpecialistInfoI } from '../Types'
import { Container } from './styles'

interface FormProps {
  data: DataSpecialistI
  profilePhoto: any
  setMakeNewRequest: (v: boolean) => void
}

const Form: React.FC<FormProps> = ({
  data,
  profilePhoto,
  setMakeNewRequest,
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [fieldWasChanged, setFieldWasChanged] = useState(false)
  const [errors, setErrors] = useState<ErrorsI>({})
  const [specialistInfo, setSpecialistInfo] = useState<SpecialistInfoI>(
    data.specialistInfo || {},
  )
  const [specialistSpecialitys, setSpecialistSpecialitys] = useState<
    MultiSelectOption[]
  >([])
  const [specialistClinics, setSpecialistClinic] = useState<
    MultiSelectOption[]
  >([])
  const [clickOnSave, setClickOnSave] = useState(false)
  const [formWasSubmited, setFormWasSubmited] = useState(false)
  const { showMessage } = useModal()
  const { Loading } = useLoading()

  useEffect(() => {
    if (isEditing) {
      setFieldWasChanged(true)
    } else {
      setFieldWasChanged(false)
    }
  }, [specialistInfo, specialistClinics, specialistSpecialitys, profilePhoto])

  const hasErrorOnFields = (fields: any) => {
    let error = false
    const hasSpecificError = Object.values(errors)
    error = !!hasSpecificError[0]

    for (const field in fields) {
      if (
        !fields[field] ||
        (!fields[field].length && typeof fields[field] !== 'number')
      ) {
        setErrors((errors) => ({ ...errors, [field]: 'Campo obrigatório' }))
        error = true
      }
    }
    return error
  }

  const onSave = async () => {
    setClickOnSave(!clickOnSave)
    if (
      hasErrorOnFields({
        ...specialistInfo,
        ...specialistClinics,
        ...specialistSpecialitys,
      })
    ) {
      return
    }
    setErrors({})

    try {
      Loading.turnOn()

      await apiAdmin.put(
        `/medico/meu-perfil`,
        toApi({
          specialistInfo,
          ...specialistClinics,
          ...specialistSpecialitys,
        }),
      )

      toast.success('Alteração realizada com sucesso.')
      setIsEditing(false)
      setFormWasSubmited(true)
      setMakeNewRequest(!clickOnSave)
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      Loading.turnOff()
    }
  }

  const onCancel = () => {
    if (fieldWasChanged) {
      return showMessage(CancelEdting, {
        setEdting: setIsEditing,
        setFieldWasChanged,
        setFormWasSubmited,
      })
    }
    setIsEditing(false)
    setFormWasSubmited(false)
    setClickOnSave(false)
  }

  useEffect(() => {
    scrollOntoFieldError(errors)
  }, [clickOnSave])

  return (
    <Container>
      <SpecialistInfo
        data={data.specialistInfo}
        setSpecialistInfo={setSpecialistInfo}
        isEditing={isEditing}
        errors={errors}
        setErrors={setErrors}
        formWasSubmited={formWasSubmited}
      />
      <Specialtys
        specialistSpecialtys={data?.specialtys}
        isEditing={isEditing}
        initialData={data?.specialtys}
        setSpecialistSpecialtys={setSpecialistSpecialitys}
        errors={errors}
        setErrors={setErrors}
        formWasSubmited={formWasSubmited}
      />
      <Clinics
        specialistClinic={data?.clinics}
        setSpecialistClinic={setSpecialistClinic}
        initialData={data?.clinics}
        isEditing={isEditing}
        errors={errors}
        setErrors={setErrors}
        formWasSubmited={formWasSubmited}
      />
      <footer>
        {!isEditing ? (
          <ButtonGroup>
            <ButtonPrimary
              onClick={() => {
                setIsEditing(true)
                scrollTo(0, 0)
              }}
            >
              Editar
            </ButtonPrimary>
          </ButtonGroup>
        ) : (
          <ButtonGroup>
            <ButtonLink onClick={onCancel}>Cancelar</ButtonLink>
            <ButtonPrimary onClick={onSave}>Salvar</ButtonPrimary>
          </ButtonGroup>
        )}
      </footer>
    </Container>
  )
}

export default Form
