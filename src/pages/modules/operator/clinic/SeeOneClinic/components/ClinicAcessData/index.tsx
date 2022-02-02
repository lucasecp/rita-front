import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import { AcessDatasI, ErrorsI } from '../../Types'
import React, { useEffect, useState } from 'react'
import {
  validateAdminName,
  validateCPF,
  validateEmail,
  validatePhone,
} from '../../helpers/validatorFields'

import { Container } from './styles'

interface ClinicAcessDataProps {
  acessDatas: AcessDatasI
  setAcessDatas: (value: any) => void
  initialData: AcessDatasI
  isEditing: boolean
  errors: ErrorsI
  setErrors: (error: ErrorsI) => void
}

export const ClinicAcessData: React.FC<ClinicAcessDataProps> = ({
  acessDatas,
  setAcessDatas,
  isEditing,
  initialData,
  errors,
  setErrors,
}) => {
  const [nameAdmin, setnameAdmin] = useState(acessDatas?.nameAdmin || '')
  const [cpf, setCpf] = useState(acessDatas?.cpf || '')
  const [email, setEmail] = useState(acessDatas?.email || '')
  const [phone, setPhone] = useState(acessDatas?.phone || '')

  useEffect(() => {
    setnameAdmin(acessDatas?.nameAdmin || '')
    setEmail(acessDatas?.email || '')
    setPhone(acessDatas?.phone || '')
    setCpf(acessDatas?.cpf || '')
  }, [acessDatas])

  useEffect(() => {
    setAcessDatas({
      nameAdmin,
      cpf,
      email,
      celPhone: phone,
    })
  }, [nameAdmin, cpf, phone, email, errors])

  useEffect(() => {
    if (!isEditing) {
      setnameAdmin(initialData?.nameAdmin || '')
      setCpf(initialData?.cpf || '')
      setEmail(initialData?.email || '')
      setPhone(initialData?.phone || '')
      setErrors({})
    }
  }, [isEditing, initialData])

  return (
    <Container>
      <h1>Responsável pela clínica</h1>
      <section>
        <InputText
          label="Administrador da clínica:"
          value={nameAdmin}
          setValue={setnameAdmin}
          name="nameAdmin"
          hasError={!!errors?.nameAdmin}
          msgError={errors?.nameAdmin}
          maxLength={70}
          onBlur={() =>
            setErrors({ ...errors, nameAdmin: validateAdminName(nameAdmin) })
          }
          onKeyUp={() =>
            setErrors({ ...errors, nameAdmin: validateAdminName(nameAdmin) })
          }
          onlyLetter
          disabled={!isEditing}
        />
        <InputMask
          mask="999.999.999-99"
          label="CPF:"
          value={cpf}
          setValue={setCpf}
          hasError={!!errors?.cpf}
          msgError={errors?.cpf}
          onBlur={() => setErrors({ ...errors, cpf: validateCPF(cpf) })}
          onKeyUp={() => setErrors({ ...errors, cpf: validateCPF(cpf) })}
          disabled={!isEditing}
          name="cpf"
        />
        <InputText
          label="E-mail:"
          name="email"
          value={email}
          setValue={setEmail}
          hasError={!!errors?.email}
          msgError={errors?.email}
          onBlur={() => setErrors({ ...errors, email: validateEmail(email) })}
          onKeyUp={() => setErrors({ ...errors, email: validateEmail(email) })}
          maxLength={100}
          disabled={!isEditing}
        />
        <InputMask
          label="Celular:"
          mask="(99) 99999-9999"
          value={phone}
          setValue={setPhone}
          hasError={!!errors?.celPhone}
          msgError={errors?.celPhone}
          onBlur={() =>
            setErrors({ ...errors, celPhone: validatePhone(phone) })
          }
          onKeyUp={() =>
            setErrors({ ...errors, celPhone: validatePhone(phone) })
          }
          disabled={!isEditing}
          name="celPhone"
        />
      </section>
    </Container>
  )
}
