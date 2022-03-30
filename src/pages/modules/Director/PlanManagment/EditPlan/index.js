import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

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
import apiAdmin from '@/services/apiAdmin'
import { useLoading } from '@/hooks/useLoading'
import {
  DIRECTOR_PLAN_MANAGMENT,
  DIRECTOR_SEE_PLAN_MANAGMENT,
  DIRECTOR_EDIT_PLAN_CONFIRM,
} from '@/routes/constants/namedRoutes/routes'
import { CancelAndExit } from './messages/CancelAndExit'
import { useModal } from '@/hooks/useModal'
import { toast } from '@/styles/components/toastify'
import { planToApi } from './adapters/toApi'
import { NotSellableItems } from './messages/NotSellableItems'
import { formatPrice } from '@/helpers/formatPrice'

export const EditPlan = () => {
  const { plan } = useLocation().state
  const initialPlan = plan

  const { Loading } = useLoading()
  const { showMessage } = useModal()
  const history = useHistory()

  const [code, setCode] = useState(initialPlan?.codigo || '')
  const [name, setName] = useState(initialPlan?.nome || '')
  const [description, setDescription] = useState(initialPlan?.descricao || '')
  const [servicesOptions, setServicesOptions] = useState([])
  const [services, setServices] = useState(
    mapDataToMultSelect(initialPlan?.servicos) || [],
  )
  const [rangesOfUse, setRangesOfUse] = useState(
    mapToRangeOfUse(initialPlan?.abrangencia) || [],
  )
  const [status, setStatus] = useState(initialPlan?.status || '')
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
    document.title = 'Rita Saúde | Editar Plano'
    const loadServices = async () => {
      try {
        const { data } = await apiAdmin.get('/servico')

        const servicesOptionsMapped = data.dados.map((service) => ({
          id: service.id,
          name: service.nome,
        }))

        const optionAll = {
          id: 'all',
          name: 'Todos',
        }

        servicesOptionsMapped.unshift(optionAll)

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
    let hasErrors = false

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

    hasErrors = Object.values(errorsTemporary).some((value) => value !== '')

    if (!rangesOfUse.length) {
      hasErrors = true
    }
    return hasErrors
  }

  const checkIfCodeAlreadyExists = async () => {
    try {
      // Loading.turnOn()

      const {
        data: { mensagem: codeExists },
      } = await apiAdmin.get(`/plano/codigo/${code}/existe`)

      if (codeExists === 'true' && code !== plan?.codigo) {
        setErrors({ ...errors, code: 'O código informado já existe!' })
        setDisabledSaveButton(true)
      } else {
        setErrors({ ...errors, code: '' })
        setDisabledSaveButton(false)
      }
    } catch (error) {
      console.log(error)
    } finally {
      // Loading.turnOff()
    }
  }

  const onCancelEditPlan = () => {
    if (anyFieldsHasChanged <= 1) {
      history.push(DIRECTOR_PLAN_MANAGMENT)
      return
    }

    showMessage(CancelAndExit)
  }

  const onEditAndSavePlan = async () => {
    const hasErrorsOnFields = verifyErrorsOnFields()

    let hasImpactOnSavePlan = false
    let sellableItems = []

    if (hasErrorsOnFields) {
      scrollTo(0, 0)
      return
    }

    let servicesSelected = services

    services.forEach((service) => {
      if (service.id === 'all') {
        servicesSelected = servicesOptions.filter(
          (service) => service.id !== 'all',
        )
      }
    })

    const planObject = {
      id: initialPlan.idPlano,
      code,
      name,
      status,
      description,
      services: servicesSelected,
      rangesOfUse,
    }

    const planMapped = planToApi(planObject)

    try {
      Loading.turnOn()

      const { data } = await apiAdmin.put(
        `/plano/${initialPlan.idPlano}`,
        planMapped,
        { params: { confirmado: false } },
      )

      if (Array.isArray(data)) {
        const sellableItemsMapped = data.map((sellableItem) => ({
          name: sellableItem.nome,
          price: formatPrice(Number(sellableItem.preco)),
        }))

        sellableItems = sellableItemsMapped
        hasImpactOnSavePlan = true
      }
    } catch (error) {
      console.log(error)
    } finally {
      Loading.turnOff()
    }

    if (hasImpactOnSavePlan) {
      if (sellableItems.length) {
        history.push(DIRECTOR_EDIT_PLAN_CONFIRM, {
          plan: planObject,
          sellableItems,
        })
      } else {
        showMessage(NotSellableItems, { plan: planObject })
      }
    } else {
      toast.success('Dados atualizados com sucesso.')

      history.push(DIRECTOR_SEE_PLAN_MANAGMENT, { idPlan: initialPlan.idPlano })
    }
  }

  return (
    <DefaultLayout title="Editar Plano">
      <Container>
        <div>
          <section>
            <InputText
              id="code"
              label="Código*:"
              maxLength={10}
              setValue={setCode}
              value={code}
              hasError={!!errors.code}
              msgError={errors.code}
              onKeyUp={checkIfCodeAlreadyExists}
            />
            <InputText
              id="name"
              label="Nome*:"
              maxLength={50}
              setValue={setName}
              value={name}
              hasError={!!errors.name}
              msgError={errors.name}
            />
          </section>
          <Textarea
            id="description"
            label="Descrição*:"
            limit="150"
            showCaractersInformation
            setValue={setDescription}
            value={description}
            hasError={!!errors.description}
            messageError={errors.description}
          />
          <CustomMultSelect
            id="services"
            label="Serviços*:"
            variation="secondary"
            setValue={setServices}
            value={services}
            options={servicesOptions}
            hasError={!!errors.services}
            messageError={errors.services}
          />
          <RangeOfUse
            id="rangeOfUse"
            label="Abrangência de Utilização*: "
            rangesOfUse={rangesOfUse}
            setRangesOfUse={setRangesOfUse}
          />
          <Select
            id="status"
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
