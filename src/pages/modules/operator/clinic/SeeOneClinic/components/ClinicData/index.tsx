import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import { Select } from '@/components/Form/Select'
import React, { useEffect, useState } from 'react'
import { DataI, ErrorsI } from '../../Types'
import {
  validateSocialReason,
  validateStatus,
  validateTwoPhone,
  validateName,
} from '../../helpers/validatorFields'
import { Container } from './styles'
import { useCnpjValidate } from './useCnpjValidate'

interface ClinicDataProps {
  personalDatas: DataI
  setPersonalDatas: (value: any) => void
  initialData: DataI
  isEditing: boolean
  errors: ErrorsI
  setErrors: (error: ErrorsI) => void
}

export const ClinicData: React.FC<ClinicDataProps> = ({
  personalDatas,
  setPersonalDatas,
  isEditing,
  initialData,
  errors,
  setErrors,
}) => {
  const [name, setName] = useState(personalDatas?.name || '')
  const [socialReason, setsocialReason] = useState(
    personalDatas?.socialReason || '',
  )
  const [cnpj, setCnpj] = useState(personalDatas?.cnpj || '')
  const [selectedStatus, setSelectedStatus] = useState<string>(
    personalDatas?.status || '',
  )
  const [phone, setPhone] = useState(personalDatas?.phone || '')

  const { validatorCNPJ } = useCnpjValidate()

  useEffect(() => {
    setName(personalDatas?.name || '')
    setsocialReason(personalDatas?.socialReason || '')
    setCnpj(personalDatas?.cnpj || '')
    setPhone(personalDatas?.phone || '')
    setSelectedStatus(personalDatas?.status || '')
  }, [personalDatas])

  useEffect(() => {
    setPersonalDatas({
      name,
      socialReason,
      cnpj,
      status: selectedStatus,
      phone,
    })
  }, [name, socialReason, cnpj, phone, errors])

  useEffect(() => {
    if (!isEditing) {
      setName(initialData?.name || '')
      setsocialReason(initialData?.socialReason || '')
      setCnpj(initialData?.cnpj || '')
      setPhone(initialData?.phone || '')
      setErrors({})
    }
  }, [isEditing, initialData])

  return (
    <Container>
      <h1>Dados cadastrais</h1>
      <section>
        <InputText
          label="Nome Fantasia:"
          value={name}
          setValue={setName}
          hasError={!!errors?.name}
          msgError={errors?.name}
          maxLength={100}
          onBlur={() => setErrors({ ...errors, name: validateName(name) })}
          onKeyUp={() => setErrors({ ...errors, name: validateName(name) })}
          disabled={!isEditing}
          name="name"
        />
        <InputText
          label="Razão Social:"
          value={socialReason}
          setValue={setsocialReason}
          hasError={!!errors?.socialReason}
          msgError={errors?.socialReason}
          maxLength={100}
          onBlur={() =>
            setErrors({
              ...errors,
              socialReason: validateSocialReason(socialReason),
            })
          }
          onKeyUp={() =>
            setErrors({
              ...errors,
              socialReason: validateSocialReason(socialReason),
            })
          }
          onlyLetter
          disabled={!isEditing}
          name="socialReason"
        />
        <InputMask
          mask="99.999.999/9999-99"
          label="CNPJ:"
          value={cnpj}
          setValue={setCnpj}
          hasError={!!errors?.cnpj}
          msgError={errors?.cnpj}
          onBlur={async () =>
            setErrors({
              ...errors,
              cnpj: await validatorCNPJ(cnpj, personalDatas?.cnpj),
            })
          }
          onKeyUp={async () =>
            setErrors({
              ...errors,
              cnpj: await validatorCNPJ(cnpj, personalDatas?.cnpj),
            })
          }
          disabled={!isEditing}
          name="cnpj"
        />
        <Select
          label="Situação:"
          labelDefaultOption={isEditing ? 'Selecione:' : ' '}
          options={[
            { label: 'Pendente', value: 'P' },
            { label: 'Ativo', value: 'A' },
            { label: 'Inativo', value: 'I' },
            { label: 'Negado', value: 'N' },
          ]}
          value={selectedStatus}
          setValue={setSelectedStatus}
          disabled={!isEditing}
          onBlur={() =>
            setErrors({ ...errors, status: validateStatus(selectedStatus) })
          }
          hasError={!!errors?.status}
          msgError={errors?.status}
          name="status"
        />
        <InputMask
          label="Telefone/Celular para agendamento:"
          mask="(99) 99999-9999"
          value={phone}
          setValue={setPhone}
          hasError={!!errors?.phone}
          msgError={errors?.phone}
          onBlur={() =>
            setErrors({ ...errors, phone: validateTwoPhone(phone) })
          }
          onKeyUp={() =>
            setErrors({ ...errors, phone: validateTwoPhone(phone) })
          }
          disabled={!isEditing}
          name="phone"
        />
      </section>
    </Container>
  )
}
