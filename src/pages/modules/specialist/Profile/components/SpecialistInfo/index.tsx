import React, { useState, useEffect } from 'react'
import { Container } from './styles'
import InputText from '../../../../../../components/Form/InputText/index'
import InputMask from '../../../../../../components/Form/InputMask/index'
import { Select } from '../../../../../../components/Form/Select/index'
import SelectUf from './SelectUf'
import { InputEmail } from '@/components/smarts/InputEmail'
import { SpecialistInfoI } from '../../Types/index'

interface SpecialistInfoProps {
  data?: SpecialistInfoI
}

const SpecialistInfo: React.FC<SpecialistInfoProps> = ({ data }) => {
  const [name, setName] = useState('')
  const [profissionalName, setProfissionalName] = useState('')

  const [cpf, setCpf] = useState('')
  const [receiveService, setReceiveService] = useState<string | number>('')

  const [ufProfissionaRegister, setUfProfissionaRegister] = useState('')
  const [ufProfissionaRegisterToApi, setUfProfissionaRegisterToApi] =
    useState('')
  const [classCouncil, setClassCouncil] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    setName(data?.name || '')
    setProfissionalName(data?.profissionalName || '')
    setReceiveService(data?.receiveService || '')
    setUfProfissionaRegister(data?.ufProfissionaRegister || '')
    setClassCouncil(data?.classCouncil || '')
    setEmail(data?.email || '')
    setPhone(data?.phone || '')
    setCpf(data?.cpf || '')
  }, [data])

  return (
    <Container>
      <h3>Dados do Especialista</h3>
      <InputText
        label="Nome Completo:"
        value={name}
        setValue={setName}
        // hasError={!!errors?.name}
        // msgError={errors?.name}
        maxLength={100}
        // onBlur={() => setErrors({ ...errors, name: validateName(name) })}
        // onKeyUp={() => setErrors({ ...errors, name: validateName(name) })}
        // disabled={!isEditing}
        disabled
        name="name"
      />

      <InputText
        label="Nome Profissional:"
        value={profissionalName}
        setValue={setProfissionalName}
        // hasError={!!errors?.profissionalName}
        // msgError={errors?.profissionalName}
        maxLength={100}
        // onBlur={() => setErrors({ ...errors, profissionalName: validateName(profissionalName) })}
        // onKeyUp={() => setErrors({ ...errors, profissionalName: validateName(profissionalName) })}
        // disabled={!isEditing}
        disabled
        name="profissionalName"
      />

      <InputMask
        mask="999.999.999-99"
        label="CPF:"
        value={cpf}
        setValue={setCpf}
        // hasError={!!errors?.cpf}
        // msgError={errors?.cpf}
        // onBlur={async () =>
        //   setErrors({
        //     ...errors,
        //     cpf: await validatorCNPJ(cpf, personalDatas?.cpf),
        //   })
        // }
        // onKeyUp={async () =>
        //   setErrors({
        //     ...errors,
        //     cpf: await validatorCNPJ(cpf, personalDatas?.cpf),
        //   })
        // }
        // disabled={!isEditing}
        name="cpf"
        disabled
      />

      <Select
        label="Receber Agendamentos:"
        labelDefaultOption="Selecione:"
        options={[
          { label: 'Sim', value: 1 },
          { label: 'Não', value: 0 },
        ]}
        value={receiveService}
        setValue={setReceiveService}
        name="receiveService"
        disabled
        // disabled={!isEditing}
        // labelDefaultOption={isEditing ? 'Selecione:' : ' '}
        // onBlur={() =>
        //   setErrors({ ...errors, receiveService: validateStatus(receiveService) })
        // }
        // hasError={!!errors?.receiveService}
        // msgError={errors?.receiveService}
      />
      <SelectUf
        ufProfissionaRegister={ufProfissionaRegister}
        setUfProfissionaRegister={setUfProfissionaRegister}
        setUfProfissionaRegisterToApi={setUfProfissionaRegisterToApi}
        disabled
      />
      <InputText
        label="Conselho de classe:"
        value={classCouncil}
        setValue={setClassCouncil}
        // hasError={!!errors?.classCouncil}
        // msgError={errors?.classCouncil}
        maxLength={100}
        // onBlur={() => setErrors({ ...errors, classCouncil: validateName(classCouncil) })}
        // onKeyUp={() => setErrors({ ...errors, classCouncil: validateName(classCouncil) })}
        // disabled={!isEditing}
        disabled
        name="classCouncil"
      />
      <InputEmail
        label="Email:"
        initialEmail={email}
        onGetEmail={setEmail}
        // hasError={(hasError) => setErrors({ ...errors, email: hasError })}
        // checkHasError={errorMessage}
        // onKeyUp={checkConfirmEmail}
        disabled
      />
      <InputMask
        mask="(99) 99999-9999"
        label="Celular:"
        value={phone}
        setValue={setPhone}
        // hasError={!!errors?.phone}
        // msgError={errors?.phone}
        // onBlur={async () =>
        //   setErrors({
        //     ...errors,
        //     phone: await validatorCNPJ(phone, personalDatas?.phone),
        //   })
        // }
        // onKeyUp={async () =>
        //   setErrors({
        //     ...errors,
        //     phone: await validatorCNPJ(phone, personalDatas?.phone),
        //   })
        // }
        // disabled={!isEditing}
        name="phone"
        disabled
      />
    </Container>
  )
}

export default SpecialistInfo
