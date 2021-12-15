import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'

import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { RangeOfUse } from '@/components/RangeOfUse'
import InputText from '@/components/Form/InputText'
import Textarea from '@/components/Form/Textarea'
import CustomMultSelect from '@/components/Form/MultSelect'
import { Select } from '@/components/Form/Select'

import ButtonPrimary from '@/components/Button/Primary'
import OutilineButton from '@/components/Button/Outline'

import { Container } from './styles'
import { statusOptions, statusOptionsWithoutInTyping } from './helpers/status'
import mapDataToMultSelect from './helpers/mapDataToMultSelect'
import mapToRangeOfUse from './helpers/mapToRangeOfUse'
import apiPatient from '@/services/apiPatient'
import { useLoading } from '@/hooks/useLoading'
import { DIRECTOR_PLAN_MANAGMENT } from '@/routes/constants/namedRoutes/routes'
import { CancelAndExit } from './messages/CancelAndExit'
import { useModal } from '@/hooks/useModal'

export const EditPlan = () => {
  const { plan } = useLocation().state
  const { Loading } = useLoading()
  const { showMessage, showSimple } = useModal()
  const history = useHistory()

  const [code, setCode] = useState(plan?.codigo || '')
  const [name, setName] = useState(plan?.nome || '')
  const [description, setDescription] = useState(plan?.descricao || '')

  const [servicesOptions, setServicesOptions] = useState([])

  const [services, setServices] = useState(
    mapDataToMultSelect(plan?.servicos) || []
  )

  const [rangesOfUse, setRangesOfUse] = useState(
    mapToRangeOfUse(plan?.abrangencia) || []
  )
  const [status, setStatus] = useState(plan?.status || '')

  const [disabledSaveButton, setDisabledSaveButton] = useState(false)

  const [anyFieldsHasChanged, setAnyFieldsHasChanged] = useState(0)

  const initialErrors = {
    code: '',
    name: '',
    description: '',
    services: '',
  }

  const [errors, setErrors] = useState(initialErrors)

  useEffect(() => {
    const loadServices = async () => {
      try {
        const { data } = await apiPatient.get('/servico')

        const servicesOptionsMapped = data.dados.map((service) => ({
          id: service.id,
          name: service.nome,
        }))

        setServicesOptions(servicesOptionsMapped)
      } catch (error) {
        console.log(error)
      }
    }

    loadServices()
  }, [])

  useEffect(() => {
    setAnyFieldsHasChanged(anyFieldsHasChanged + 1)
  }, [code, name, description, services, rangesOfUse])

  const verifyErrorsOnFields = () => {
    let errorsTemporary = initialErrors

    if (!code) {
      errorsTemporary = {
        ...errorsTemporary,
        code: 'O campo código é obrigatório',
      }
    }

    if (!name) {
      errorsTemporary = {
        ...errorsTemporary,
        name: 'O campo nome é obrigatório',
      }
    }

    if (!description) {
      errorsTemporary = {
        ...errorsTemporary,
        description: 'O campo descrição é obrigatório',
      }
    }

    if (!services.length) {
      errorsTemporary = {
        ...errorsTemporary,
        services: 'O campo serviços é obrigatório',
      }
    }

    setErrors(errorsTemporary)

    const hasErrors = Object.values(errorsTemporary).some(
      (value) => value !== ''
    )

    return hasErrors
  }

  const checkIfCodeAlreadyExists = async () => {
    setTimeout(() => {
      try {
        Loading.turnOn()

        setErrors({ ...errors, code: 'O código informado já existe!' })
        setDisabledSaveButton(true)

        setErrors({ ...errors, code: '' })
        setDisabledSaveButton(false)
      } catch (error) {
        console.log(error)
      } finally {
        Loading.turnOff()
      }
    }, 1000)
  }

  const onCancelEditPlan = () => {
    if (anyFieldsHasChanged <= 1) {
      history.push(DIRECTOR_PLAN_MANAGMENT)
      return
    }

    showMessage(CancelAndExit)
  }

  const onEditAndSavePlan = () => {
    const hasErrorsOnFields = verifyErrorsOnFields()

    if (hasErrorsOnFields) {
      return
    }

    console.log('save plan')
  }

  return (
    <DefaultLayout title="Gestão de Planos - Editar Plano">
      <Container>
        <div>
          <section>
            <InputText
              label="Código*:"
              maxLength={10}
              setValue={setCode}
              value={code}
              hasError={!!errors.code}
              msgError={errors.code}
              onKeyUp={checkIfCodeAlreadyExists}
            />
            <InputText
              label="Nome*:"
              maxLength={50}
              setValue={setName}
              value={name}
              hasError={!!errors.name}
              msgError={errors.name}
            />
          </section>
          <Textarea
            label="Descrição*:"
            limit="150"
            showCaractersInformation
            setValue={setDescription}
            value={description}
            hasError={!!errors.description}
            messageError={errors.description}
          />
          <CustomMultSelect
            label="Serviços*:"
            variation="secondary"
            setValue={setServices}
            value={services}
            options={servicesOptions}
            hasError={!!errors.services}
            messageError={errors.services}
          />
          <RangeOfUse
            rangesOfUse={rangesOfUse}
            setRangesOfUse={setRangesOfUse}
          />
          <Select
            label="Status*:"
            setValue={setStatus}
            value={status}
            options={
              plan?.status === 'P'
                ? statusOptions
                : statusOptionsWithoutInTyping
            }
          />
        </div>
        <footer>
          <OutilineButton onClick={onCancelEditPlan}>Cancelar</OutilineButton>
          <ButtonPrimary
            disabled={disabledSaveButton}
            onClick={onEditAndSavePlan}
          >
            Salvar
          </ButtonPrimary>
        </footer>
      </Container>
    </DefaultLayout>
  )
}
