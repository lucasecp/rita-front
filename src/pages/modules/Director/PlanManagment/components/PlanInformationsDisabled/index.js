import React, { useState } from 'react'
import ButtonPrimary from '@/components/Button/Primary'
import OutilineButton from '@/components/Button/Outline'
import InputText from '@/components/Form/InputText'
import CustomMultSelect from '@/components/Form/MultSelect'
import SelectComponent from '@/components/Form/Select'
import Textarea from '@/components/Form/Textarea'
import { ButtonGroup, Container } from './styles'

const PlanInformationsDisabled = ({data}) => {
  const [d, setD] = useState([])
  const [description, setDescription] = useState('')

  return (
      <>
        <Container>
          <InputText label="Código*:" disabled value={data.codigo} />

          <InputText label="Nome*:" disabled />

          <Textarea
            label="Descrição*:"
            value={description}
            disabled
            setValue={setDescription}
            limit="150"
            showCaractersInformation
          />
          <CustomMultSelect
            disabled
            label="Serviços*:"
            variation="secondary"
            options={[
              { id: 1, name: 'testejbbjbjbjbjbjjbj1' },
              { id: 4, name: 'teste2' },
            ]}
            value={d}
            setValue={setD}
          />
          <SelectComponent label="Status*:" disabled value={data.status} />
        </Container>
        <ButtonGroup>
          <OutilineButton>Cancelar</OutilineButton>
          <ButtonPrimary>Editar</ButtonPrimary>
        </ButtonGroup>
      </>
  )
}

export default PlanInformationsDisabled
