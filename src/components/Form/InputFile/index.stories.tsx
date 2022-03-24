import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import { InputFile as InputFileComponent } from '@/components/Form/InputFile'

export default {
  title: 'Componentes/Form',
  component: InputFileComponent,
  argTypes: {
    setValue: {
      control: false,
    },
  },
} as ComponentMeta<typeof InputFileComponent>

export const InputFile: ComponentStory<typeof InputFileComponent> = (args) => (
  <InputFileComponent {...args} />
)

InputFile.args = {
  children: 'Label',
  clearOnClick: false,
}
