import React from 'react'

import { Container } from './styles'
import { ReactComponent as VerifiedIcon } from '@/assets/icons/verified.svg'
import { ReactComponent as ZoomIcon } from '@/assets/icons/zoom.svg'
import { SeeDocumentFile } from './SeeDocumentFile'
import { Select } from '@/components/Form/Select'
import InputText from '@/components/Form/InputText'

export const Documents = ({
  data,
  dependentDocument,
  dependentDocumentName,
}) => {
  console.log(data)
  return (
    <Container>
      <h1>Documentos Cadastrados</h1>
      <section>
        <InputText label="Renda:" value={data?.income} disabled />

        {/* <Select labelDefaultOption={data?.income} /> */}
        <aside>
          <SeeDocumentFile
            title={dependentDocumentName}
            document={dependentDocument}
          />
        </aside>
      </section>
    </Container>
  )
}
