import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import { Select } from '@/components/Form/Select'
import React, { useEffect, useState } from 'react'
import { validateName } from '../../helpers/validatorFields'
import { DataI, PersonalErrorsI } from '../../Types'

import { Container } from './styles'

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
  const [selectedStatus, setselectedStatus] = useState<string>(
    personalDatas?.status || '',
  )
  const [phone, setPhone] = useState(personalDatas?.phone || '')

  const [errors, setErrors] = useState<PersonalErrorsI>({})

  useEffect(() => {
    setName(personalDatas?.name || '')
    setsocialReason(personalDatas?.socialReason || '')
    setCnpj(personalDatas?.cnpj || '')
    setPhone(personalDatas?.phone || '')
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
          name="name"
          hasError={!!errors?.name}
          msgError={errors?.name}
          maxLength={100}
          // onBlur={() => setErrors({ ...errors, name: validateName(name) })}
          // onKeyUp={() => setErrors({ ...errors, name: validateName(name) })}
          onlyLetter
          disabled={!isEditing}
        />
        <InputText
          label="Razão Social:"
          value={name}
          setValue={setsocialReason}
          name="socialReason"
          hasError={!!errors?.socialReason}
          msgError={errors?.socialReason}
          maxLength={100}
          onBlur={() =>
            setErrors({ ...errors, socialReason: validateName(socialReason) })
          }
          onKeyUp={() =>
            setErrors({ ...errors, socialReason: validateName(socialReason) })
          }
          onlyLetter
          disabled={!isEditing}
        />
        <InputMask
          mask="99.999.999/999-99"
          label="CNPJ:"
          value={cnpj}
          setValue={setCnpj}
          hasError={!!errors?.cnpj}
          msgError={errors?.cnpj}
          // onBlur={() => setErrors({ ...errors, name: validatename(name) })}
          // onKeyUp={() => setErrors({ ...errors, name: validatename(name) })}
          disabled={!isEditing}
        />
        <Select
          label="Situação:"
          labelDefaultOption="Selecione:"
          options={[
            { label: 'Pendente', value: 'Pendente' },
            { label: 'Ativo', value: 'Ativo' },
            { label: 'Inativo', value: 'Inativo' },
            { label: 'Negado', value: 'Negado' },
          ]}
          value={selectedStatus}
          disabled={!isEditing}
        />
        <InputMask
          label="Telefone/Celular para agendamento:"
          mask="(99) 9999-9999"
          value={phone}
          setValue={setPhone}
          hasError={!!errors?.phone}
          msgError={errors?.phone}
          // onBlur={() => setErrors({ ...errors, phone: validatePhone(phone) })}
          // onKeyUp={() => setErrors({ ...errors, phone: validatePhone(phone) })}
          disabled={!isEditing}
        />
      </section>
    </Container>
  )
}
