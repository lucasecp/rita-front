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
/** Types */
import { ErrorI } from '../types'
/** Validations */
import { validateField, validateStatus } from '../validations'
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
  const [errors, setErrors] = useState<ErrorI>({} as ErrorI)

  const arrayQuery = [
    { name: fieldsApi.PATIENT_NAME, value: patient },
    { name: fieldsApi.SPECIALIST_NAME, value: atendent },
    { name: fieldsApi.PROTOCOL_NUMBER, value: protocolNumber },
    { name: fieldsApi.STATUS, value: status },
  ]

  useEffect(() => {
    setFilters(verifyTypedFields(arrayQuery))
  }, [])

  /** @description Limpa as mensagens de erros nos componentes */
  const _setErrors = () => {
    setErrors({} as ErrorI)
  }

  const clearFields = () => {
    setPatient('')
    setAtendent('')
    setProtocolNumber('')
    setStatus('')
    setFilters([])
    _setErrors()
  }

  const hasErrors = () => {
    let newErrors = false
    newErrors = validateField('patient', patient, setErrors, newErrors)
    newErrors = validateField('atendent', atendent, setErrors, newErrors)
    newErrors = validateField('protocolNumber', protocolNumber, setErrors, newErrors)
    newErrors = validateStatus('status', status, setErrors, newErrors)
    return newErrors
  }

  const onFilter = () => {
    if (hasErrors()) {
      return
    }
    setFilters(verifyTypedFields(arrayQuery))
    _setErrors()
  }

  return (
    <Container>
      <div>
        <InputText
          variation="secondary"
          value={patient}
          hasError={!!errors.patient}
          msgError={errors.patient}
          setValue={setPatient}
          maxLength={100}
          onBlur={() => validateField('patient', patient, setErrors)}
          label="Paciente:"
        />
        <InputText
          value={atendent}
          setValue={setAtendent}
          hasError={!!errors.atendent}
          msgError={errors.atendent}
          variation="secondary"
          maxLength={100}
          onBlur={() => validateField('atendent', atendent, setErrors)}
          label="Atendente:"
        />
      </div>
      <div>
        <section>
          <InputText
            variation="secondary"
            value={protocolNumber}
            hasError={!!errors.protocolNumber}
            msgError={errors.protocolNumber}
            setValue={setProtocolNumber}
            onlyNumber
            onBlur={() => validateField('protocolNumber', protocolNumber, setErrors)}
            maxLength={50}
            label="Número de Protocolo:"
          />
          <Select
            labelDefaultOption="Selecione:"
            options={staticStatus}
            hasError={!!errors.status}
            msgError={errors.status}
            value={status}
            setValue={setStatus}
            onBlur={() => validateStatus('status', status, setErrors)}
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
