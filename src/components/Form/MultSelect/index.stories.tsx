import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import MultSelectComponent from '@/components/Form/MultSelect'

export default {
  title: 'Componentes/Form',
  component: MultSelectComponent,
  argTypes: {
    setValue: {
      control: false,
    },
  },
} as ComponentMeta<typeof MultSelectComponent>

export const MultSelect: ComponentStory<typeof MultSelectComponent> = (
  args,
) => <MultSelectComponent {...args} />

MultSelect.args = {
  label: 'Label',
  value: [{ id: 1, name: 'Opção 1' }],
  options: [
    { id: 1, name: 'Opção 1' },
    { id: 2, name: 'Opção 2' },
  ],
  hasError: false,
  messageError: '',
  disabled: false,
  variation: 'secondary',
  name: 'name',
}
