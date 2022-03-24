import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import { Select as SelectComponent } from '@/components/Form/Select'

export default {
  title: 'Componentes/Form',
  component: SelectComponent,
  argTypes: {
    variation: {
      options: ['secondary', 'highlight'],
      control: {
        type: 'radio',
      },
    },
    setValue: {
      control: false,
    },
  },
} as ComponentMeta<typeof SelectComponent>

export const Select: ComponentStory<typeof SelectComponent> = (args) => (
  <SelectComponent {...args} />
)

Select.args = {
  label: 'Label',
  labelDefaultOption: '-- selecione --',
  options: [
    { value: 1, label: 'Opção 1' },
    { value: 2, label: 'Opção 2' },
  ],
  hasError: false,
  msgError: '',
  disabled: false,
}
