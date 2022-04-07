import React from 'react'
/** Types */
import { ClinicProfileI, ResponsibleTecnicI } from '../../../types'
/** Stypes */
import { Container } from './styles'
/** Components */
import InputText from '@/components/Form/InputText'
/** Context */
import { ClinicEditContext } from '../../../Context/ClinicEditContext'
import InputMask from '@/components/Form/InputMask'
/** Helpers */
import isEmail from '@/helpers/isEmail'
import { validateEmail } from '../../../Helpers/validatorFields'

interface FormClinicProfileI {
  data: ClinicProfileI
  setResponsibleTecnic: (data: ResponsibleTecnicI) => void
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
  const { error, setIsHashModificationField, setError, isDisabled } = React.useContext(ClinicEditContext)

  /** @description Atualiza os dados digitados nos states */
  React.useEffect(() => {
    props.setResponsibleTecnic({
      responsibleTecnic: responsible,
      cpfResponsibleTecnic: cpfResponsible,
      phoneResponsibleTecnic: phoneResponsible,
      emailTecnic: email,
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
    if (name === 'responsible') setResponsible(event.target.value)
    if (name === 'cpfResponsible') setCpfResponsible(event.target.value)
    if (name === 'phoneResponsible') setPhoneResponsible(event.target.value)
    if (name === 'emailTecnic') setEmail(event.target.value)
    setIsHashModificationField(true)
  }

  return (
    <Container>
      <h1>Responsável Técnico</h1>
      <section>
        <InputText
          label="Responsável Técnico*"
          disabled={isDisabled}
          onChange={onChangeField}
          name="responsible"
          value={responsible}
          setValue={setResponsible}
          hasError={!!error.responsibleTecnic}
          msgError={error.responsibleTecnic}
          maxLength={70}
          onlyLetter
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
            hasError={!!error.cpfResponsibleTecnic}
            msgError={error.cpfResponsibleTecnic}
          />
          <InputMask
            label="Celular*:"
            mask="(99) 99999-9999"
            disabled={isDisabled}
            onChange={onChangeField}
            name="phoneResponsible"
            value={phoneResponsible}
            setValue={setPhoneResponsible}
            hasError={!!error.phoneResponsibleTecnic}
            msgError={error.phoneResponsibleTecnic}
          />
          <InputText
            label="E-mail*:"
            disabled={isDisabled}
            onChange={onChangeField}
            name="emailTecnic"
            value={email}
            setValue={setEmail}
            hasError={!!error.emailResponsibleTecnic}
            msgError={error.emailResponsibleTecnic}
            onBlur={() => {
              setError({
                ...error,
                emailResponsibleTecnic: validateEmail(email, { emailTecnic: 'emailTecnic' })
              })
            }}
          />
        </section>
      </section>
    </Container>
  )
}

export default ResponsibleTecnic
