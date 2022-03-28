import React from 'react';
/** Components */
import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
/** Styled */
import { Container } from './style'

type OwnerOfTheAccountType = {
  name?: string
  email?: string
  phone?: string
}
interface OwnerOfTheAccount {
  ownerOfTheAccount: OwnerOfTheAccountType
}

export const OwnerOfTheAccount: React.FC<OwnerOfTheAccount> = (data: OwnerOfTheAccount ) => {
  return (
    <Container>
        <h1>Dados do Titular</h1>
        <InputText label='Nome:' value={data?.ownerOfTheAccount?.name} disabled/>
        <section>
          <InputMask label='Celular:' value={data?.ownerOfTheAccount?.phone} mask={'(99) 99999-9999'} disabled/>
          <InputText label='E-mail:'value={data?.ownerOfTheAccount?.email} disabled/>
        </section>
    </Container>
  );
};

