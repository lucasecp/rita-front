import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import InputText from '@/components/Form/InputText'
import CustomMultSelect from '@/components/Form/MultSelect'
import SelectComponent from '@/components/Form/Select'
import React, { useState } from 'react'
import { BtnGroup, Container } from './styles'

const Filter = () => {
  const [date, setdate] = useState('')

  return (
    <Container>
      <div>
        <InputText variation="secondary" label="Código:" />
        <InputText variation="secondary" label="Nome:" />
        <CustomMultSelect
          label="Período de Vigência"
          options={[{ name: 'teste', id: 'teste1' }]}
          value={date}
          setValue={setdate}
        />

        <SelectComponent
          label="Status"
          options={[{ label: 'teste', value: 'teste1' }]}
          variation="secondary"
        />
        <SelectComponent label="Serviços" variation="secondary" />
        <SelectComponent label="Regional" variation="secondary" />
        <SelectComponent label="UF" variation="secondary" />
        <SelectComponent label="Cidade" variation="secondary" />
      </div>
      <BtnGroup>
        <OutlineButton small variation='red'>Limpar Filtro</OutlineButton>
         <ButtonPrimary medium>Filtrar Resultados</ButtonPrimary>
      </BtnGroup>
    </Container>
  )
}

export default Filter
