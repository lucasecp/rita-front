import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import { AcessDatasI, ErrorsAddressI } from '../../Types'
import React, { useEffect, useState } from 'react'
import { validateName } from '../../helpers/validatorFields'

import { Container } from './styles'

interface ClinicAcessDataProps {
  acessDatas: AcessDatasI
  setAcessDatas: (value: any) => void
  initialData: AcessDatasI
  isEditing: boolean
  cancelEdit: boolean
}

export const ClinicAcessData: React.FC<ClinicAcessDataProps> = ({
  acessDatas,
  setAcessDatas,
  isEditing,
  initialData,
  cancelEdit,
}) => {
  const [nameAdmin, setnameAdmin] = useState(acessDatas?.nameAdmin || '')
  const [cpf, setCpf] = useState(acessDatas?.cpf || '')
  const [email, setEmail] = useState(acessDatas?.email || '')
  const [phone, setPhone] = useState(acessDatas?.phone || '')

  const [errors, setErrors] = useState<ErrorsAddressI>({})

  useEffect(() => {
    setnameAdmin(acessDatas?.nameAdmin || '')
    setEmail(acessDatas?.email || '')
    setPhone(acessDatas?.phone || '')
    setCpf(acessDatas?.cpf || '')
  }, [acessDatas])

  useEffect(() => {
    setAcessDatas({
      nameAdmin,
      phone,
      email,
      cpf,
      hasError: Object.values(errors).some((value) => value !== ''),
    })
  }, [nameAdmin, cpf, phone, email, errors])

  useEffect(() => {
    if (cancelEdit) {
      setnameAdmin(initialData?.nameAdmin || '')
      setCpf(initialData?.cpf || '')
      setEmail(initialData?.email || '')
      setPhone(initialData?.phone || '')
      setErrors({})
    }
  }, [cancelEdit, initialData])

  return (
    <Container>
      <h1>Dados de Acesso</h1>
      <section>
        <InputText
          label="Administrador da clínica:"
          value={nameAdmin}
          setValue={setnameAdmin}
          name="name"
          hasError={!!errors?.nameAdmin}
          msgError={errors?.nameAdmin}
          maxLength={100}
          onBlur={() =>
            setErrors({ ...errors, nameAdmin: validateName(nameAdmin) })
          }
          onKeyUp={() =>
            setErrors({ ...errors, nameAdmin: validateName(nameAdmin) })
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
          // onBlur={() => setErrors({ ...errors, cpf: validateCPF(cpf) })}
          // onKeyUp={() => setErrors({ ...errors, cpf: validateCPF(cpf) })}
          disabled={!isEditing}
        />
        <InputText
          label="E-mail:"
          name="email"
          value={email}
          setValue={setEmail}
          hasError={!!errors?.email}
          msgError={errors?.email}
          // onBlur={() => setErrors({ ...errors, email: validateEmail(email) })}
          // onKeyUp={() => setErrors({ ...errors, email: validateEmail(email) })}
          maxLength={100}
          disabled={!isEditing}
        />
        <InputMask
          label="Celular:"
          mask="(99) 99999-9999"
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
