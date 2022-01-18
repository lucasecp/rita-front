import React, { useState } from 'react'
import { Container } from './styles'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { AutoComplete } from 'antd'
import { Select } from '@/components/Form/Select'
import HoldingDocument from './components/Instruction/HoldingDocument'
import InstructionsOwnDocuments from './components/Instruction/OwnDocument'

interface MinorAgeProps {
  dependent: {
    id: number
    cpf: string
  }
}

export const MinorAge: React.FC<MinorAgeProps> = ({ dependent }) => {
  const [documentTypeSelected, setDocumentTypeSelected] = useState('')

  return (
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
      {/* {documentTypeSelected === 'identidade' && <InstructionsOwnDocuments />} */}
      {/* {documentTypeSelected === 'certidao_de_nascimento' && <HoldingDocument />} */}
    </Container>
  )
}
