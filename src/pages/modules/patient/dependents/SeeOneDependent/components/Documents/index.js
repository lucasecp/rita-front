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
        <InputText
          label="Comprovante de Renda:"
          value={data?.income}
          disabled
        />

        {/* <Select labelDefaultOption={data?.income} /> */}

        <SeeDocumentFile
          title={'Comprovante de Renda'}
          document={dependentDocument}
        />
      </section>
    </Container>
  )
}
