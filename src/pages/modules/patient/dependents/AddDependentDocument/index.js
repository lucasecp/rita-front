import React, { useState } from 'react'
import { Container } from './styles'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { AutoComplete } from 'antd'
import { Select } from '@/components/Form/Select'
import HoldingDocument from '../../components/Instruction/HoldingDocument'
import InstructionsOwnDocuments from '../../components/Instruction/OwnDocument'

const AddDependentDocument = (id) => {
  const [documentTypeSelected, setDocumentTypeSelected] = useState('')

  return (
    <DefaultLayout title="Dependentes">
      <Container>
        <div>
          <h1>Atualização de Dependentes</h1>
          <Select
            label="Escolha uma opção:"
            labelDefaultOption="Selecione"
            options={[
              {
                label: 'Certidão de Nascimento',
                value: 'certidao_de_nascimento',
              },
              {
                label: 'identidade',
                value: 'identidade',
              },
            ]}
            name="regional"
            setValue={setDocumentTypeSelected}
            value={documentTypeSelected}
          />
        </div>
        {documentTypeSelected === 'identidade' && <InstructionsOwnDocuments />}
        {documentTypeSelected === 'certidao_de_nascimento' && (
          <HoldingDocument />
        )}
      </Container>
    </DefaultLayout>
  )
}
export default AddDependentDocument
