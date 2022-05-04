import React, { useEffect, useState } from 'react'

import { Container } from './styles'

interface ImagePreviewProps {
  file: File | string
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({ file }) => {
  const [sourceFile, setSourceFile] = useState('')

  useEffect(() => {
    if (typeof file === 'object') {
      setSourceFile(URL.createObjectURL(file))
    }
  }, [])

  return (
    <Container>
      <img src={sourceFile} />
    </Container>
  )
}
