import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import OutlineComponent from '@/components/Button/Outline'

export default {
  title: 'Componentes/Button',
  component: OutlineComponent,
} as ComponentMeta<typeof OutlineComponent>

export const Outline: ComponentStory<typeof OutlineComponent> = (args) => (
  <OutlineComponent {...args} />
)

Outline.args = {
  small: false,
  medium: false,
  children: 'Button',
}
