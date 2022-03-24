import React, { useState } from 'react'

import { Container } from './styles'
import InputText from '@/components/Form/InputText'
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

type BankAccountFormProps = {
  onSubmit?: (model: any) => void
  onCancel?: () => void
}

type BankAccountFormErrors = {
  bankName?: string
  agency?: string
  number?: string
}

function validateRequired(value: any) {
  return [null, undefined, ''].includes(value) ? 'Campo obrigatório.' : ''
}

const BankAccountForm: React.FC<BankAccountFormProps> = ({
  onSubmit,
  onCancel,
}) => {
  const [bankName, setBankName] = useState('')
  const [agency, setAgency] = useState('')
  const [number, setNumber] = useState('')
  const [errors, setErrors] = useState<BankAccountFormErrors>({})

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()

    const newErrors = {
      bankName: validateRequired(bankName),
      agency: validateRequired(agency),
      number: validateRequired(number),
    }
    const hasErrors = Object.values(newErrors).some((value) => value !== '')

    setErrors(newErrors)

    !hasErrors &&
      onSubmit &&
      onSubmit({
        bankName,
        agency,
        number,
      })
  }

  return (
    <Container onSubmit={handleSubmit} onReset={onCancel}>
      <InputText
        label="Banco:"
        value={bankName}
        setValue={setBankName}
        name="bankName"
        hasError={Boolean(errors.bankName)}
        msgError={errors.bankName}
        onBlur={() =>
          setErrors({ ...errors, bankName: validateRequired(bankName) })
        }
        onKeyUp={() =>
          setErrors({ ...errors, bankName: validateRequired(bankName) })
        }
      />

      <section>
        <InputText
          label="Agência:"
          value={agency}
          setValue={setAgency}
          name="agency"
          hasError={Boolean(errors.agency)}
          msgError={errors.agency}
          onBlur={() =>
            setErrors({ ...errors, agency: validateRequired(agency) })
          }
          onKeyUp={() =>
            setErrors({ ...errors, agency: validateRequired(agency) })
          }
        />
        <InputText
          label="Conta:"
          value={number}
          setValue={setNumber}
          name="number"
          hasError={Boolean(errors.number)}
          msgError={errors.number}
          onBlur={() =>
            setErrors({ ...errors, number: validateRequired(number) })
          }
          onKeyUp={() =>
            setErrors({ ...errors, number: validateRequired(number) })
          }
        />
      </section>

      <footer>
        <OutlineButton type="reset">Cancelar</OutlineButton>
        <ButtonPrimary type="submit">Salvar Alterações</ButtonPrimary>
      </footer>
    </Container>
  )
}

export default BankAccountForm
