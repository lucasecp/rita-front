/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
/** Components */
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import InputText from '@/components/Form/InputText'
import { Select } from '@/components/Form/Select'
import React, { useEffect, useState } from 'react'
/** Helpers */
import { verifyTypedFields } from '../helpers/verifyTypedFields'
import { fieldsApi } from '../static/fieldsApi'
/** Statics */
import { staticStatus } from '../static/status'
/** Styles */
import { BtnGroup, Container } from './styles'

interface FilterProps {
  setFilters: React.Dispatch<React.SetStateAction<any[]>>
}

const Filter: React.FC<FilterProps> = ({ setFilters }) => {
  const [patient, setPatient] = useState('')
  const [atendent, setAtendent] = useState('')
  const [protocolNumber, setProtocolNumber] = useState('')
  const [status, setStatus] = useState('')

  const arrayQuery = [
    { name: fieldsApi.PATIENT_NAME, value: patient.trim() },
    { name: fieldsApi.SPECIALIST_NAME, value: atendent.trim() },
    { name: fieldsApi.PROTOCOL_NUMBER, value: protocolNumber.trim() },
    { name: fieldsApi.STATUS, value: status },
  ]

  useEffect(() => {
    setFilters(verifyTypedFields(arrayQuery))
  }, [])

  const clearFields = () => {
    setPatient('')
    setAtendent('')
    setProtocolNumber('')
    setStatus('')
    setFilters([])
  }


  const onFilter = () => {
    setFilters(verifyTypedFields(arrayQuery))
  }

  return (
    <Container>
      <div>
        <InputText
          variation="secondary"
          value={patient}
          setValue={setPatient}
          maxLength={100}
          label="Paciente:"
        />
        <InputText
          value={atendent}
          setValue={setAtendent}
          variation="secondary"
          maxLength={100}
          label="Atendente:"
        />
      </div>
      <div>
        <section>
          <InputText
            variation="secondary"
            value={protocolNumber}
            setValue={setProtocolNumber}
            onlyNumber
            maxLength={50}
            label="Número de Protocolo:"
          />
          <Select
            labelDefaultOption="Selecione:"
            options={staticStatus}
            value={status}
            setValue={setStatus}
            variation="secondary"
            label="Status:"
          />
        </section>
        <BtnGroup>
          <OutlineButton small variation="red" onClick={() => clearFields()}>
            Limpar Filtro
          </OutlineButton>
          <ButtonPrimary small onClick={onFilter}>
            Filtrar Resultados
          </ButtonPrimary>
        </BtnGroup>
      </div>
    </Container>
  )
}

export default Filter
