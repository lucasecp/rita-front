import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import React from 'react'
import { Container } from './styles'

interface DependentInfoProps {}

const DependentInfo: React.FC<DependentInfoProps> = () => {
  return (
    <Container>
      <InputText label="Nome:" value={'Luísa Castilhos Silvestre'} disabled />
      <InputText label="Status:" value={'Inativo'} disabled />
      <InputText label="Titular Atual:" value={'999.999.999-99'} disabled />
      <InputMask
        mask="999.999.999-99"
        label="CPF do titular:"
        value={'999.999.999-99'}
        disabled
      />
    </Container>
  )
}

export default DependentInfo
