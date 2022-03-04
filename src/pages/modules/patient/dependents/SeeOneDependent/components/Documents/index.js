import React from 'react'

import { Container } from './styles'
import { ReactComponent as VerifiedIcon } from '@/assets/icons/verified.svg'
import { ReactComponent as ZoomIcon } from '@/assets/icons/zoom.svg'
import { SeeDocumentFile } from './SeeDocumentFile'
import { Select } from '@/components/Form/Select'

export const Documents = ({ data, dependentDocument }) => {
  return (
    <Container>
      <h1>Documentos Cadastrados</h1>
      <section>
        <Select
          label="Renda:"
          labelDefaultOption={data?.income}
          value={data?.income}
          disabled
        />
        <aside>
          <SeeDocumentFile
            title="Comprovante de renda"
            document={dependentDocument}
          />
        </aside>
      </section>
    </Container>
  )
}
