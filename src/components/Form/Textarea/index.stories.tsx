import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import TextareaComponent from '@/components/Form/Textarea'

export default {
  title: 'Componentes/Form',
  component: TextareaComponent,
  argTypes: {
    setValue: {
      control: false,
    },
  },
} as ComponentMeta<typeof TextareaComponent>

export const Textarea: ComponentStory<typeof TextareaComponent> = (args) => (
  <TextareaComponent {...args} />
)

Textarea.args = {
  label: 'Label',
  limit: 255,
  showCaractersInformation: false,
  hasError: false,
  messageError: '',
}
