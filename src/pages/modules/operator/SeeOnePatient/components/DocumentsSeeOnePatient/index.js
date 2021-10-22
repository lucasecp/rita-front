import React, { useEffect } from 'react'

import SelectComponent from '@/components/Form/Select'
import SeeDocumentFile from './SeeDocumentFile'

import { incomeOptions } from '../../constants/income'

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
          value={''}
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
