import ButtonLink from '@/components/Button/Link'
import CancelEdting from '../messages/CancelEdting'
import { scrollOntoFieldError } from '@/helpers/scrollOntoFieldError'
import { useLoading } from '@/hooks/useLoading'
import { useModal } from '@/hooks/useModal'
import apiAdmin from '@/services/apiAdmin'
import { toast } from '@/styles/components/toastify'
import React, { useEffect, useState } from 'react'

import ButtonPrimary from '../../../../../components/Button/Primary'
import { ButtonGroup } from '../../../operator/clinic/SeeOneClinic/EditClinic/styles'
import { toApi } from '../adapters'
import { Clinics } from '../components/Clinics'
import SpecialistInfo from '../components/SpecialistInfo'
import { Specialtys } from '../components/Specialtys'
import {
  DataSpecialistI,
  ErrorsI,
  SpecialistInfoI,
  SpecialtysAndDocsType,
  RqeAndSpecialtysType,
  SpecialtysType,
  ClinicErrorsType,
} from '../Types'
import { Container } from './styles'
import Documents from '../components/Documents/index'
import { useDocsSpecialtys } from '../hooks/useDocsSpecialty'
import { useValidator } from '../hooks/useValidator'
import { useMessage } from '@/hooks/useMessage'

interface FormProps {
  data: DataSpecialistI
  profilePhoto: any
  specialtysDocs: SpecialtysAndDocsType
  setMakeNewRequest: (v: number) => void
}

const Form: React.FC<FormProps> = ({
  data,
  profilePhoto,
  setMakeNewRequest,
  specialtysDocs,
}) => {
  const [isEditing, setIsEditing] = useState(false)

  const [fieldWasChanged, setFieldWasChanged] = useState(false)

  const [errors, setErrors] = useState<ErrorsI>({} as ErrorsI)

  const [specialistInfo, setSpecialistInfo] = useState<SpecialistInfoI>(
    data.specialistInfo || {},
  )

  const [specialistSpecialitys, setSpecialistSpecialitys] =
    useState<SpecialtysType>({} as SpecialtysType)

  const [specialistClinics, setSpecialistClinic] = useState<ClinicErrorsType>(
    {} as ClinicErrorsType,
  )

  const [specialtysAndDocs, setSpecialtysAndDocs] =
    useState<SpecialtysAndDocsType>({})

  const [rqeAndSpeciality, setRqeAndSpeciality] =
    useState<RqeAndSpecialtysType>({} as RqeAndSpecialtysType)

  const [clickOnSave, setClickOnSave] = useMessage()

  const [formWasSubmited, setFormWasSubmited] = useState(false)

  const { showMessage } = useModal()

  const { Loading } = useLoading()
  const { hasErrorOnFields } = useValidator()

  const { registerDocsSpecialtys } = useDocsSpecialtys(
    specialtysAndDocs,
    specialistInfo.cpf,
  )

  const randomValues = Math.random() * (10 - 3) + 3

  useEffect(() => {
    if (isEditing) {
      setFieldWasChanged(true)
    } else {
      setFieldWasChanged(false)
    }
  }, [
    specialistInfo,
    specialistClinics,
    specialistSpecialitys,
    profilePhoto,
    rqeAndSpeciality,
    specialtysAndDocs,
  ])

  const onSave = async () => {
    // setClickOnSave(randomValues)
    setClickOnSave()

    if (
      hasErrorOnFields(
        {
          ...specialistInfo,
          ...specialistClinics,
          ...specialistSpecialitys,
          ...specialtysAndDocs,
          ...rqeAndSpeciality,
        },
        setErrors,
      )
    ) {
      return
    }
    setErrors({} as ErrorsI)

    try {
      Loading.turnOn()

      await apiAdmin.put(
        `/medico/meu-perfil`,
        toApi({
          specialistInfo,
          ...specialistClinics,
          ...specialistSpecialitys,
          rqe: rqeAndSpeciality,
        }),
      )
      await registerDocsSpecialtys()

      toast.success('Alteração realizada com sucesso.')

      setIsEditing(false)

      setFormWasSubmited(true)

      //setMakeNewRequest(!clickOnSave)
      setMakeNewRequest(randomValues)
    } catch (error) {
      if (error instanceof Error) {
        toast.error('Erro ao editar')
      }
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

    // setClickOnSave(randomValues)
    setClickOnSave()
  }

  useEffect(() => {
    if (clickOnSave !== 0) {
      scrollOntoFieldError(errors)
    }
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

      {specialistSpecialitys.specialtys?.map((spec) => (
        <Documents
          key={spec.id}
          setSpecialtysAndDocs={setSpecialtysAndDocs}
          initialData={specialtysDocs}
          errors={errors}
          setErrors={setErrors}
          data={spec}
          setRqeAndSpeciality={setRqeAndSpeciality}
          isEditing={isEditing}
          formWasSubmited={formWasSubmited}
        />
      ))}

      <Clinics
        specialistClinic={data?.clinic}
        setSpecialistClinic={setSpecialistClinic}
        initialData={data?.clinic}
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
