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
import apiPatient from '@/services/apiPatient'
import { useLoading } from '@/hooks/useLoading'
import { DIRECTOR_PLAN_MANAGMENT } from '@/routes/constants/namedRoutes/routes'
import { CancelAndExit } from './messages/CancelAndExit'
import { toApi } from './adapters/toApi'
import { useModal } from '@/hooks/useModal'
import { toast } from '@/styles/components/toastify'

export const CreatePlan = () => {
  const { Loading } = useLoading()
  const { showMessage } = useModal()
  const history = useHistory()
  const [servicesOptions, setServicesOptions] = useState([])

  const [code, setCode] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [services, setServices] = useState([])
  const [rangesOfUse, setRangesOfUse] = useState([])

  const [disabledSaveButton, setDisabledSaveButton] = useState(false)

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

  const checkIfCodeAlreadyExists = async () => {
    try {
      // Loading.turnOn()

      const {
        data: { mensagem: codeExists },
      } = await apiPatient.get(`/plano/codigo/${code}/existe`)

      if (codeExists === 'true') {
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

  const onCreatePlan = async () => {
    const hasErrorsOnFields = verifyErrorsOnFields()

    if (hasErrorsOnFields) {
      scrollTo(0, 0)
      return
    }

    try {
      let servicesSelected = services

      services.forEach((service) => {
        if (service.id === 'all') {
          servicesSelected = servicesOptions.filter(
            (service) => service.id !== 'all'
          )
        }
      })

      const planMapped = toApi({
        code,
        name,
        description,
        services: servicesSelected,
        rangesOfUse,
      })

      await apiPatient.post('/plano', planMapped)

      toast.success('Cadastro realizado com sucesso')
      history.push(DIRECTOR_PLAN_MANAGMENT)
    } catch {
      toast.error('Erro na criação do plano')
    }
  }

  const onCancelCreatePlan = () => {
    if (
      code !== '' ||
      name !== '' ||
      description !== '' ||
      services.length > 0 ||
      rangesOfUse.length > 0
    ) {
      showMessage(CancelAndExit)
    } else {
      history.push(DIRECTOR_PLAN_MANAGMENT)
    }
  }

  return (
    <DefaultLayout title="Gestão de Planos - Incluir Plano">
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
        </div>
        <footer>
          <OutilineButton onClick={onCancelCreatePlan}>Cancelar</OutilineButton>
          <ButtonPrimary disable={disabledSaveButton} onClick={onCreatePlan}>
            Salvar
          </ButtonPrimary>
        </footer>
      </Container>
    </DefaultLayout>
  )
}
