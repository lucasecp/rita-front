import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import React from 'react'
import { Container } from './styles'
import { DependentI } from '../../types'

interface DependentInfoProps {
  data: DependentI
}

const DependentInfo: React.FC<DependentInfoProps> = ({ data }) => {
  return (
    <Container>
      <InputText label="Nome:" value={data?.name || ''} disabled />
      <InputText label="Status:" value={data?.status || ''} disabled />
      <InputText
        label="Titular Atual:"
        value={data?.holder?.name || ''}
        disabled
      />
      <InputMask
        mask="999.999.999-99"
        label="CPF do titular:"
        value={data?.holder?.cpf || ''}
        disabled
      />
    </Container>
  )
}

export default DependentInfo
