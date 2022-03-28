import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import { InputPassword as InputPasswordComponent } from '@/components/Form/InputPassword'

export default {
  title: 'Componentes/Form',
  component: InputPasswordComponent,
  argTypes: {
    setValue: {
      control: false,
    },
  },
} as ComponentMeta<typeof InputPasswordComponent>

export const InputPassword: ComponentStory<typeof InputPasswordComponent> = (
  args,
) => <InputPasswordComponent {...args} />

InputPassword.args = {
  label: 'Label',
  hasError: false,
  messageError: '',
}
