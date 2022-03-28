import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import LinkComponent from '@/components/Button/Link'

export default {
  title: 'Componentes/Button',
  component: LinkComponent,
} as ComponentMeta<typeof LinkComponent>

export const Link: ComponentStory<typeof LinkComponent> = (args) => (
  <LinkComponent {...args} />
)

Link.args = {
  children: 'Button',
}
