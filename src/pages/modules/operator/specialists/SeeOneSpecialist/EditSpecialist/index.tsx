import { Container, ButtonGroup } from './styles'
import React, { useEffect, useState } from 'react'
import { PersonalDatas } from '../components/PersonalDatas'
import { Clinics } from '../components/Clinics'
import { ProfissionalDatas } from '../components/ProfissionalDatas'
import { Specialty } from '../components/Specialty'
import { useModal } from '@/hooks/useModal'
import { useHistory } from 'react-router-dom'
import { OPERATOR_SEE_ALL_SPECIALISTS } from '@/routes/constants/namedRoutes/routes'
import CancelEdting from '../messages/CancelEdting'
import { ErrorsI } from '../Types'
import { scrollOntoFieldError } from '../../../../../../helpers/scrollOntoFieldError'
import { toApi } from '../adapters'
import apiAdmin from '@/services/apiAdmin'
import { toast } from '@/styles/components/toastify'
import { useLoading } from '@/hooks/useLoading'
import OutlineButton from '../../../../../../components/Button/Outline/index'
import ButtonPrimary from '../../../../../../components/Button/Primary/index'
import clearSpecialCaracter from '@/helpers/clearSpecialCharacters'

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
  const [clinics, setClinics] = useState(specialistData?.clinics || [])
  const [specialtys, setSpecialtys] = useState(specialistData?.specialtys || [])
  const [clickOnSave, setClickOnSave] = useState(0)
  const [errors, setErrors] = useState<ErrorsI>({})
  const { Loading } = useLoading()

  const history = useHistory()

  const { showMessage, showSimple } = useModal()

  const someFieldChanged = () => {
    let fieldWasChanged = false
    const dataFromApi = {
      ...specialistData?.personalDatas,
      ...specialistData?.profissionalData,
    }
    const dataToApi = { ...personalDatas, ...profissionalData }

    const clinicsAndSpecialtys = [
      ...specialistData?.clinics,
      ...specialistData?.specialtys,
    ]
    const clinicsAndSpecialtysToApi = [
      ...specialtys.specialtys,
      ...clinics.clinics,
    ]

    for (const field in dataToApi) {
      if (dataToApi[field] !== dataFromApi[field]) {
        fieldWasChanged = true
        break
      } else {
        fieldWasChanged = false
      }
    }
    const theyHaveSameLength =
      clinicsAndSpecialtys.length === clinicsAndSpecialtysToApi.length

    if (!theyHaveSameLength) {
      fieldWasChanged = true
    }

    return fieldWasChanged
  }

  const cashRateValidate = (cash: number, rate: number) => {
    const values = cash + rate
    console.log(values)
    if (values > 100) {
      return false
    }
    return true
  }
  console.log(errors)

  const hasErrorOnFields = (fields: any) => {
    let error = false
    setErrors({})

    const cashBackIsValid = cashRateValidate(fields.cashBack, fields.takeRate)
    if (!cashBackIsValid) {
      showSimple.warning(
        'A soma dos valores de Cashback e TakeRate tem que ser inferior ou igual a 100%',
      )
      return true
    }

    for (const field in fields) {
      if (
        !fields[field] ||
        (Array.isArray(fields[field]) && !fields[field].length)
      ) {
        error = true

        if (field === 'specialtys') {
          setErrors((errors) => ({
            ...errors,
            [field]: 'O especialista precisa ter no mínimo uma especialidade.',
          }))
          continue
        }
        if (field === 'cashBack') {
          setErrors((errors) => ({
            ...errors,
            [field]: 'Precisa ter um valor mínimo de 1% no CashBack.',
          }))
          continue
        }

        if (field === 'takeRate') {
          setErrors((errors) => ({
            ...errors,
            [field]: 'Precisa ter um valor mínimo de 1% no TakeRate.',
          }))
          continue
        }

        setErrors((errors) => ({ ...errors, [field]: 'Campo obrigatório' }))
      }
    }
    return error
  }

  const onSave = async () => {
    setClickOnSave(Math.random() * (10 - 3) + 3)

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

    try {
      Loading.turnOn()

      await apiAdmin.put(
        `/medico/${id}`,
        toApi({
          id,
          status: specialistData.status,
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
    if (clickOnSave !== 0) {
      scrollOntoFieldError(errors as any)
    }
  }, [clickOnSave])

  const onCancel = () => {
    if (someFieldChanged()) {
      return showMessage(CancelEdting)
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
