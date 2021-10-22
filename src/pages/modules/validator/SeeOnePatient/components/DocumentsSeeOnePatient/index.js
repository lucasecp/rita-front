import React from 'react'
import SelectComponent from '@/components/Form/Select'
import { incomeOptions } from '../../constants/income'
import SeeDocumentFile from './SeeDocumentFile'

import { Container } from './styles'
import formatIncome from '../../helpers/formatIncome'

function DocumentsSeeOnePatient({ documents }) {
  return (
    <Container>
      <h2>Documentos</h2>
      <SeeDocumentFile
        title="Foto segurando o documento de identificação"
        document={documents.holdingDocument}
        disabled={!documents.holdingDocument}
      />
      <SeeDocumentFile
        title="Foto do documento de identificação"
        document={documents.identifyDocument}
        disabled={!documents.identifyDocument}
      />
      <section>
        <SelectComponent
          label="Renda:"
          labelDefaultOption={formatIncome(documents?.incomeDocumentType)}
          disabled
        />
        <aside>
          <SeeDocumentFile
            title="Comprovante de renda"
            document={documents.incomeDocument}
            disabled={!documents.incomeDocument}
          />
        </aside>
      </section>
    </Container>
  )
}

export default DocumentsSeeOnePatient
