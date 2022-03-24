import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import InputMaskComponent from '@/components/Form/InputMask'

export default {
  title: 'Componentes/Form',
  component: InputMaskComponent,
  argTypes: {
    setValue: {
      control: false,
    },
  },
} as ComponentMeta<typeof InputMaskComponent>

export const InputMask: ComponentStory<typeof InputMaskComponent> = (args) => (
  <InputMaskComponent {...args} />
)

InputMask.args = {
  label: 'Label',
  hasError: false,
  msgError: '',
  variation: 'secondary',
  mask: '(99) 99999-9999',
  value: '',
  disabled: false,
  useIMask: false,
}
