import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import PrimaryComponent from '@/components/Button/Primary'

export default {
  title: 'Componentes/Button',
  component: PrimaryComponent,
} as ComponentMeta<typeof PrimaryComponent>

export const Primary: ComponentStory<typeof PrimaryComponent> = (args) => (
  <PrimaryComponent {...args} />
)

Primary.args = {
  small: false,
  medium: false,
  disabledWithEvents: false,
  children: 'Button',
}
