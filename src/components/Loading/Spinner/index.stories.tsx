import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import SpinnerComponent from '@/components/Loading/Spinner'

export default {
  title: 'Componentes/Loading',
  component: SpinnerComponent,
} as ComponentMeta<typeof SpinnerComponent>

export const Spinner: ComponentStory<typeof SpinnerComponent> = () => (
  <SpinnerComponent />
)
