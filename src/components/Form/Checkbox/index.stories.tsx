import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import { Checkbox as CheckboxComponent } from '@/components/Form/Checkbox'

export default {
  title: 'Componentes/Form',
  component: CheckboxComponent,
  argTypes: {
    setValue: {
      control: false,
    },
  },
} as ComponentMeta<typeof CheckboxComponent>

export const Checkbox: ComponentStory<typeof CheckboxComponent> = (args) => (
  <CheckboxComponent {...args} />
)

Checkbox.args = {
  checked: false,
  label: 'Label',
  hasError: false,
  messageError: '',
  colorLight: false,
  disabled: false,
}
