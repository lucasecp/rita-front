import React from 'react'

import InputText from '@/components/Form/InputText'
import InputMask from '@/components/Form/InputMask'
import { InputEmail } from '@/components/smarts/InputEmail'

import { Select } from '@/components/Form/Select'

import CustomMultSelect from '@/components/Form/MultSelect'

import { User } from '../../index'

import { Container } from './styles'

interface IUserDataProps {
  user: User
}

export const UserData: React.FC<IUserDataProps> = ({ user }) => {
  return (
    <Container>
      <InputText label="Nome Completo*:" value={user.name} disabled />
      <Select
        label="Status:"
        value={user.status}
        labelDefaultOption=" "
        options={[
          { label: 'Ativo', value: 'active' },
          { label: 'Inativo', value: 'inactive' },
        ]}
        disabled
      />
      <InputMask label="CPF:" mask="999.999.999-99" value={user.cpf} disabled />
      <InputEmail initialEmail={user.email} disabled />
      <InputMask
        label="Celular*:"
        mask="(99) 99999-9999"
        value={user.phone}
        disabled
      />
      <CustomMultSelect
        variation="secondary"
        label="Perfil de Acesso:"
        value={user.accessProfile}
        disabled
      />
    </Container>
  )
}
