import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import { Select } from '@/components/Form/Select'
import React, { useEffect, useState } from 'react'
import { DataI, PersonalErrorsI } from '../../Types'
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
  cancelEdit: boolean
}

export const ClinicData: React.FC<ClinicDataProps> = ({
  personalDatas,
  setPersonalDatas,
  isEditing,
  initialData,
  cancelEdit,
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

  const [errors, setErrors] = useState<PersonalErrorsI>({})
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
      phone,
      cnpj,
      hasError: Object.values(errors).some((value) => value !== ''),
    })
  }, [name, socialReason, cnpj, phone, errors])

  useEffect(() => {
    if (cancelEdit) {
      setName(initialData?.name || '')
      setsocialReason(initialData?.socialReason || '')
      setCnpj(initialData?.cnpj || '')
      setPhone(initialData?.phone || '')
      setErrors({})
    }
  }, [cancelEdit, initialData])

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
              cnpj: await validatorCNPJ(cnpj, personalDatas?.cnpj ),
            })
          }
          onKeyUp={async () =>
            setErrors({
              ...errors,
              cnpj: await validatorCNPJ(cnpj, personalDatas?.cnpj ),
            })
          }
          disabled={!isEditing}
        />
        <Select
          label="Situação:"
          labelDefaultOption={isEditing ? 'Selecione:' : ' '}
          options={[
            { label: 'Pendente', value: 'Pendente' },
            { label: 'Ativo', value: 'Ativo' },
            { label: 'Inativo', value: 'Inativo' },
            { label: 'Negado', value: 'Negado' },
          ]}
          value={selectedStatus}
          setValue={setSelectedStatus}
          disabled={!isEditing}
          onBlur={() =>
            setErrors({ ...errors, status: validateStatus(selectedStatus) })
          }
          hasError={!!errors?.status}
          msgError={errors?.status}
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
        />
      </section>
    </Container>
  )
}
