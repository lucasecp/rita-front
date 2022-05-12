import React, { useEffect, useState } from 'react'
import { Checkbox } from '@/components/Form/Checkbox'
import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import { Select } from '@/components/Form/Select'
import { Container, ButtonLinkBlue } from './styles'
import Terms from './messages/Terms'

import {
  validateConfEmail,
  validateTerms,
  validateBirthdate,
  validateGender,
  validateName,
  validatePhone,
} from './validateFields'
import { useModal } from '@/hooks/useModal'
import { GeneralFieldsErrors } from './messages/GeneralFieldsErrors'

import ButtonPrimary from '@/components/Button/Primary'
import { InputEmail } from '@/components/smarts/InputEmail'
import { useMessage } from '@/hooks/useMessage'

export interface ErrorState {
  name: string
  email: boolean
  confirmEmail: string
  gender: string
  birthdate: string
  phone: string
  cpf: string
  terms: string
}

interface RegistrationDataProps {
  isActive: boolean
}

export const RegistrationData: React.FC<RegistrationDataProps> = ({
  isActive,
}) => {
  const { showMessage } = useModal()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [confirmEmail, setConfirmEmail] = useState('')
  const [gender, setGender] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [phone, setPhone] = useState('')
  const [cpf, setCpf] = useState('')
  const [terms, setTerms] = useState(false)
  const [errors, setErrors] = useState({} as ErrorState)

  const [errorMessage, sendErrorMessage] = useMessage()

  return (
    <Container active={isActive}>
      <div>
        <h1>Dados Cadastrais</h1>
        <InputText label="Nome Completo*:" />
        <section>
          <InputEmail />
          <InputText label="Confirme seu e-mail*:" />
          <Select
            label="Gênero*:"
            labelDefaultOption="Selecione"
            options={[
              { label: 'Masculino', value: 'M' },
              { label: 'Feminino', value: 'F' },
              { label: 'Outros', value: 'O' },
            ]}
          />
          <InputMask label="Data de Nascimento*:" mask="99/99/9999" />
          <InputMask label="Celular*:" mask="(99) 99999-9999" />
          <InputMask label="CPF*:" mask="999.999.999-99" />
        </section>
        <Checkbox
          label={
            <>
              Li e aceito os
              <ButtonLinkBlue onClick={() => {}}>Termos de uso</ButtonLinkBlue>
              da plataforma Rita.
            </>
          }
          hasError={!!errors.terms}
          checked={terms}
          setValue={setTerms}
          messageError={errors.terms}
        />
      </div>
      <footer>
        <ButtonPrimary onClick={() => {}}>Próxima Etapa</ButtonPrimary>
      </footer>
    </Container>
  )
}
