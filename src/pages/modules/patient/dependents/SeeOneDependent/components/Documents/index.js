import React from 'react'

import { Container } from './styles'
import { SeeDocumentFile } from './SeeDocumentFile'
// import { Select } from '@/components/Form/Select'
import InputText from '@/components/Form/InputText'

export const Documents = ({
  data,
  dependentDocument,
  dependentDocumentName,
}) => {
  console.log(data)
  return (
    <Container>
      <div>
        <h1>Documentos Cadastrados</h1>
      </div>
      <section>
        <InputText label="Renda:" value={data?.income} disabled />

        {/* <Select labelDefaultOption={data?.income} /> */}

        <SeeDocumentFile
          title={dependentDocumentName}
          document={dependentDocument}
        />
      </section>
    </Container>
  )
}
