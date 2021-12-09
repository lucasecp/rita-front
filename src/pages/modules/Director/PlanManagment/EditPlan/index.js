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

  console.log(plan)

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

  const [errors, setErrors] = useState({ code: '', name: '', description: '' })

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
          <ButtonPrimary
          // onClick={() => history.push(DIRECTOR_EDIT_PLAN, { plan: plan })}
          >
            Salvar
          </ButtonPrimary>
        </footer>
      </Container>
    </DefaultLayout>
  )
}
