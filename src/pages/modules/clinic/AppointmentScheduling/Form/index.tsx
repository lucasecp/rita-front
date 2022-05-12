import React, { useState } from 'react'
import InputText from '@/components/Form/InputText'
import InputMask from '@/components/Form/InputMask'
import { Container } from './styles'
import { SelectSpecialists } from './components/Selectspecialist'
import { SelectSpecialty } from './components/SelectSpecialty'
import { SelectTime } from './components/SelectTime'

const Form: React.FC = () => {
  const [specialist, setSpecialist] = useState<string | number>('')
  const [specialty, setSpecialty] = useState<string | number>('')
  const [cpf, setCpf] = useState('')
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  return (
    <Container>
      <InputMask
        mask="999.999.999-99"
        label="CPF:"
        value={cpf}
        setValue={setCpf}
      />
      <InputText
        label="Nome do Paciente:"
        value={name}
        setValue={setName}
        disabled={!cpf}
      />
      <SelectSpecialists
        specialist={specialist}
        setSpecialist={setSpecialist}
      />
      <SelectSpecialty
        idDoctor={specialist}
        setSpecialty={setSpecialty}
        specialty={specialty}
      />
      <InputMask
        mask="99/99/9999"
        label="Data:"
        value={date}
        setValue={setDate}
      />
      <SelectTime
      idDoctor={ 435}
      setTime={setTime}
      time={time}
      date={'12/09/2000'}

      />
    </Container>
  )
}

export default Form
