import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import { Autocomplete as AutocompleteComponent } from '@/components/Form/Autocomplete'

export default {
  title: 'Componentes/Form',
  component: AutocompleteComponent,
  argTypes: {
    setValue: {
      control: false,
    },
    setOptions: {
      control: false,
    },
  },
} as ComponentMeta<typeof AutocompleteComponent>

export const Autocomplete: ComponentStory<typeof AutocompleteComponent> = (
  args,
) => <AutocompleteComponent {...args} />

Autocomplete.args = {
  label: 'Label',
  value: { label: 'Opção 1', value: 1 },
  options: [
    { label: 'Opção 1', value: 1 },
    { label: 'Opção 2', value: 2 },
  ],
}
