import React from 'react'

import { useDialog } from '@/hooks/useDialog'
// import ButtonOutline from '@/components/Button/Outline'
// import ButtonPrimary from '@/components/Button/Primary'

import { Container } from './styles'

export const DialogLayout: React.FC<
  RitaComponents.DialogLayoutProps
> = ({ header, body, footer }) => {
  const { dialogClose } = useDialog()

  return (
    <Container>
      <header>{header}</header>

      <section>{body}</section>

      <footer>{footer}</footer>
    </Container>
  )
}
