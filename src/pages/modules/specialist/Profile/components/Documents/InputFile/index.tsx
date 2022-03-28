import React from 'react'
import { Container, Button } from './styles'

interface InputDocumentProps {}

const InputDocument: React.FC<InputDocumentProps> = () => {
  return (
    <Container>
      <label>Documentos de comprovação:</label>
      <div>
        <Button>Inserir arquivo</Button>
      </div>
    </Container>
  )
}

export default InputDocument
