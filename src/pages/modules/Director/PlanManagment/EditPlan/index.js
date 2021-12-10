import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

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

export const EditPlan = () => {
  const { plan } = useLocation().state

  // console.log(plan)

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

  const [errors, setErrors] = useState({
    code: '',
    name: '',
    description: '',
    services: '',
  })

  useEffect(() => {
    const loadServices = async () => {
      try {
        const { data } = await apiPatient.get('/servico')

        const servicesOptionsMapped = data.dados.map((service) => ({
          id: service.id,
          name: service.nome,
        }))

        servicesOptionsMapped.unshift({ id: 0, name: 'Todos' })

        setServicesOptions(servicesOptionsMapped)
      } catch (error) {
        console.log(error)
      }
    }

    loadServices()
  }, [])

  const onSelectService = (_, selectedItem) => {
    if (!selectedItem) {
      return
    }

    if (selectedItem.id === 0) {
      return setServices(servicesOptions)
    }

    // console.log('services: ', services)
    // console.log('servicesOptions: ', servicesOptions)

    // if (services.length === servicesOptions.length - 1) {
    //   return setServices([...services, { id: 0, name: 'Todos' }])
    // }

    // const findAll = services.find((service) => service.id)

    // if (findAll && services.length <= servicesOptions.length - 1) {
    //   const cleanedServices = services.filter((service) => service.id !== 0)

    //   setServices(cleanedServices)
    // }

    // console.log('servicesOp', servicesOptions)
  }

  const onRemoveService = (_, removedItem) => {
    const findAll = services.find((service) => service.id === 0)

    if (findAll && services.length >= servicesOptions.length) {
      const cleanedServices = services.filter(
        (service) => service.id !== 0 && service.id !== removedItem.id
      )

      setServices(cleanedServices)
    }
  }

  const verifyErrorsOnFields = () => {
    let hasError = false

    if (!code) {
      setErrors({ ...errors, code: 'O campo código é obrigatório' })
      hasError = true
    }

    if (!name) {
      setErrors({ ...errors, name: 'O campo nome é obrigatório' })
      hasError = true
    }

    if (!description) {
      setErrors({ ...errors, description: 'O campo descrição é obrigatório' })
      hasError = true
    }

    if (!services.length) {
      setErrors({ ...errors, services: 'O campo serviços é obrigatório' })
      hasError = true
    }

    return hasError
  }

  const onEditAndSavePlan = () => {
    // const hasErrorsOnFields = verifyErrorsOnFields()

    // if (hasErrorsOnFields) {
    //   return
    // }

    // console.log('save plan')
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
            msgError={errors.description}
          />
          <CustomMultSelect
            label="Serviços*:"
            variation="secondary"
            setValue={setServices}
            value={services}
            options={servicesOptions}
            onSelect={onSelectService}
            onRemove={onRemoveService}
            hasError={!!errors.services}
            msgError={errors.services}
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
          <OutilineButton
          // onClick={() => history.push(DIRECTOR_PLAN_MANAGMENT) }
          >
            Cancelar
          </OutilineButton>
          <ButtonPrimary onClick={onEditAndSavePlan}>Salvar</ButtonPrimary>
        </footer>
      </Container>
    </DefaultLayout>
  )
}
