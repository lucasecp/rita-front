import React from 'react'
/** Types */
import { ClinicProfileI, ResponsibleAdministrativeI } from '../../../types'
/** Stypes */
import { Container } from './styles'
/** Components */
import InputText from '@/components/Form/InputText'
/** Context */
import { ClinicEditContext } from '../../../Context/ClinicEditContext'
import InputMask from '@/components/Form/InputMask'
import { validateEmail } from '../../../Helpers/validatorFields'

interface FormClinicProfileI {
  data: ClinicProfileI
  setResponsibleAdministrative: (data: ResponsibleAdministrativeI) => void
}

const ResponsibleTecnic: React.FC<FormClinicProfileI> = (
  props: FormClinicProfileI,
) => {
  /** States */
  const [responsible, setResponsible] = React.useState('')
  const [cpfResponsible, setCpfResponsible] = React.useState('')
  const [phoneResponsible, setPhoneResponsible] = React.useState('')
  const [email, setEmail] = React.useState('')
  /** Context */
  const { error, isDisabled, setIsHashModificationField, setError } =
    React.useContext(ClinicEditContext)

  /** @description Atualiza os dados digitados nos states */
  React.useEffect(() => {
    props.setResponsibleAdministrative({
      responsibleAdministrative: responsible,
      cpfResponsibleAdministrative: cpfResponsible,
      phoneResponsibleAdministrative: phoneResponsible,
      emailAdministrative: email,
    })
  }, [responsible, cpfResponsible, phoneResponsible, email])

  /** @description Seta os dados nos campos quando esse componente é montado na tela. */
  React.useEffect(() => {
    setResponsible(props.data.responsible)
    setCpfResponsible(props.data.cpfResponsible)
    setPhoneResponsible(props.data.phoneResponsible)
    setEmail(props.data.emailResponsible)
  }, [props.data])

  /**
   * @description Função responsável por verificar se houve modificação nos campos e setar true em 'setIsHashModificationField' */
  const onChangeField = (event: any) => {
    let name = event.target.name
    if (name === 'responsibleAdministrative') setResponsible(event.target.value)
    if (name === 'cpfResponsible') setCpfResponsible(event.target.value)
    if (name === 'phoneResponsible') setPhoneResponsible(event.target.value)
    if (name === 'emailAdministrative') setEmail(event.target.value)
    setIsHashModificationField(true)
  }

  return (
    <Container>
      <h1>Responsável Administrativo</h1>
      <section>
        <InputText
          label="Administrador*"
          disabled={isDisabled}
          onChange={onChangeField}
          name="responsibleAdministrative"
          value={responsible}
          setValue={setResponsible}
          hasError={!!error.responsibleAdministrativee}
          msgError={error.responsibleAdministrative}
          onlyLetter
          noSpecialCaracter
          maxLength={70}
        />
        <section>
          <InputMask
            label="CPF*:"
            mask="999.999.999-99"
            disabled
            onChange={onChangeField}
            name="cpfResponsible"
            value={cpfResponsible}
            setValue={setCpfResponsible}
            hasError={!!error.cpfResponsibleAdministrative}
            msgError={error.cpfResponsibleAdministrative}
          />
          <InputMask
            label="Celular*:"
            mask="(99) 99999-9999"
            disabled={isDisabled}
            onChange={onChangeField}
            name="phoneResponsible"
            value={phoneResponsible}
            setValue={setPhoneResponsible}
            hasError={!!error.phoneResponsibleAdministrative}
            msgError={error.phoneResponsibleAdministrative}
          />
          <InputText
            label="E-mail*:"
            disabled={isDisabled}
            onChange={onChangeField}
            name="emailAdministrative"
            value={email}
            setValue={setEmail}
            hasError={!!error.emailResponsibleAdministrative}
            msgError={error.emailResponsibleAdministrative}
            onBlur={() => {
              setError({
                ...error,
                emailResponsibleAdministrative: validateEmail(email, { emailAdministrative: 'emailAdministrative' })
              })
            }}
          />
        </section>
      </section>
    </Container>
  )
}

export default ResponsibleTecnic
