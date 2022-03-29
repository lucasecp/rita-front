import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import { Modal as ModalComponent } from '@/components/Modal'

export default {
  title: 'Componentes/Modal',
  component: ModalComponent,
} as ComponentMeta<typeof ModalComponent>

export const Modal: ComponentStory<typeof ModalComponent> = () => (
  <ModalComponent />
)
