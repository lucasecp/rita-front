import React, { useState } from 'react'
import { Select } from '@/components/Form/Select'
import InputText from '@/components/Form/InputText'
import InputMask from '@/components/Form/InputMask'
import { Container } from './styles'
import { SelectSpecialists } from './components/Selectspecialist'

const Form: React.FC = () => {
  const [specialist, setSpecialist] = useState('')
  return (
    <Container>
      <SelectSpecialists
        specialist={specialist}
        setSpecialist={setSpecialist}
      />
    </Container>
  )
}

export default Form
