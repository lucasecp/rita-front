import Checkbox from '@/components/Form/Checkbox'
import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import Select from '@/components/Form/Select'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Container } from '../style'
import { BtnTerms } from './style'
import Terms from './messages/Tems'
import {
  validateBirthdate,
  validateCpf,
  validateEmail,
  validateGender,
  validateName,
  validatePhone,
} from '../../helpers/validator'
import formatBirthdate from '../../helpers/formatBirthdate'
import { useModal } from '@/context/useModal'

const RegistrationData = ({ setData, setBtn, dataClientSabin, newData }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [confirmEmail, setConfirmEmail] = useState('')
  const [gender, setGender] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [phone, setPhone] = useState('')
  const [cpf, setCpf] = useState('')

  const [terms, setTerms] = useState(false)
  const [errors, setErrors] = useState({})
  const { showMessage } = useModal()

  useEffect(() => {
    if (!dataClientSabin) return
    setName(newData.nome || newData.nome || dataClientSabin.nome || '')
    setEmail(newData.email || dataClientSabin.email || '')
    setConfirmEmail(newData.email || '')
    setGender(newData.sexo || dataClientSabin.sexo || '')
    setBirthdate(
      newData.dataNascimento ||
        formatBirthdate(dataClientSabin.dataNascimento) ||
        ''
    )
    setPhone(newData.telefone || dataClientSabin.telefone || '')
    setCpf(newData.cpf || dataClientSabin.cpf || '')
  }, [dataClientSabin])

  useEffect(() => {
    const hasErrors = Object.values(errors).filter((err) => err).length
    if (
      name &&
      email &&
      cpf &&
      terms &&
      confirmEmail &&
      birthdate &&
      gender &&
      phone &&
      !hasErrors
    ) {
      const dataObj = {
        nome: name,
        email,
        sexo: gender,
        dataNascimento: birthdate,
        telefone: phone,
        cpf,
      }
      setBtn(true)
      setData((data) => {
        return { ...data, ...dataObj }
      })
    } else {
      setBtn(false)
    }
  }, [name, email, cpf, terms, confirmEmail, birthdate, gender, phone, errors])
  const validateConfEmail = () => {
    if (email !== confirmEmail)
      return {
        confirmEmail:
          'Os e-mails preenchidos estão diferentes, por favor verifique os campos E-mail e Confirme seu e-mail.',
      }
    return { confirmEmail: '' }
  }
  const validateTerms = () => {
    setTerms(!terms)
    if (terms)
      return setErrors({
        ...errors,
        terms: 'Por favor, aceite os termos para continuar.',
      })
    return setErrors({ ...errors, terms: false })
  }
  const labelTerms = (
    <>
      Li e aceito os
      <BtnTerms onClick={() => showMessage(Terms, { setTerms })}>
        Termos de uso{' '}
      </BtnTerms>{' '}
      da plataforma Rita.
    </>
  )
  return (
    <Container>
      <h1>Dados Cadastrais</h1>
      <Row>
        <Col md="12">
          <InputText
            label="Nome Completo*:"
            value={name}
            setValue={setName}
            hasError={errors.name}
            name="name"
            onBlur={() => setErrors({ ...errors, ...validateName(name) })}
            onKeyUp={() => setErrors({ ...errors, ...validateName(name) })}
            msgError={errors.name}
          />
        </Col>

        <Col md="6" className="mt-4">
          <InputText
            label="E-mail*:"
            name="email"
            hasError={errors.email}
            value={email}
            setValue={setEmail}
            onBlur={() =>
              setErrors({ ...errors, ...validateEmail(email, confirmEmail) })
            }
            onKeyUp={() =>
              setErrors({ ...errors, ...validateEmail(email, confirmEmail) })
            }
            msgError={errors.email}
          />
        </Col>

        <Col md="6" className="mt-4">
          <InputText
            label="Confirme seu e-mail*:"
            hasError={errors.confirmEmail}
            value={confirmEmail}
            setValue={setConfirmEmail}
            onBlur={() =>
              setErrors({ ...errors, ...validateConfEmail(confirmEmail) })
            }
            onKeyUp={() =>
              setErrors({ ...errors, ...validateConfEmail(confirmEmail) })
            }
            msgError={errors.confirmEmail}
          />
        </Col>
        <Col md="6" className="mt-4">
          <Select
            label="Gênero*:"
            labelDefaultOption="Selecione"
            options={[
              { label: 'Masculino', value: 'M' },
              { label: 'Feminino', value: 'F' },
              { label: 'Outros', value: 'O' },
            ]}
            setValue={setGender}
            hasError={errors.gender}
            onChange={(e) => {
              setGender(e.target.value)
              setErrors({ ...errors, ...validateGender(e.target.value) })
            }}
            value={gender}
            msgError={errors.gender}
          />
        </Col>
        <Col md="6" className="mt-4">
          <InputMask
            label="Data de Nascimento*:"
            mask="99/99/9999"
            value={birthdate}
            setValue={setBirthdate}
            hasError={errors.birthdate}
            onBlur={() =>
              setErrors({ ...errors, ...validateBirthdate(birthdate) })
            }
            onKeyUp={() =>
              setErrors({ ...errors, ...validateBirthdate(birthdate) })
            }
            msgError={errors.birthdate}
          />
        </Col>
        <Col md="6" className="mt-4">
          <InputMask
            label="Celular*:"
            mask="(99) 99999-9999"
            value={phone}
            setValue={setPhone}
            hasError={errors.phone}
            onBlur={() => setErrors({ ...errors, ...validatePhone(phone) })}
            onKeyUp={() => setErrors({ ...errors, ...validatePhone(phone) })}
            msgError={errors.phone}
          />
        </Col>
        <Col md="6" className="mt-4">
          <InputMask
            label="CPF*:"
            mask="999.999.999-99"
            value={cpf}
            setValue={setCpf}
            hasError={errors.cpf}
            onBlur={() => setErrors({ ...errors, ...validateCpf(cpf) })}
            onKeyUp={() => setErrors({ ...errors, ...validateCpf(cpf) })}
            disabled={dataClientSabin.cpf}
            msgError={errors.cpf}
          />
        </Col>
        <Col md="12" className="mt-4">
          <Checkbox
            id="terms"
            label={labelTerms}
            hasError={errors.terms}
            checked={terms}
            setValue={setTerms}
            onChange={() => validateTerms()}
            msgError={errors.terms}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default RegistrationData
