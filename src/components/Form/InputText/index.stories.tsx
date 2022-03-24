import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import InputTextComponent from '@/components/Form/InputText'

export default {
  title: 'Componentes/Form',
  component: InputTextComponent,
  argTypes: {
    setValue: {
      control: false,
    },
  },
} as ComponentMeta<typeof InputTextComponent>

export const InputText: ComponentStory<typeof InputTextComponent> = (args) => (
  <InputTextComponent {...args} />
)

InputText.args = {
  label: 'Label',
  hasError: false,
  msgError: '',
  variation: 'secondary',
  onlyLetter: false,
  onlyNumber: false,
}
