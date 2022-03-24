import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import { ButtonOneBorder as OneBorderComponent } from '@/components/Button/OneBorder'

export default {
  title: 'Componentes/Button',
  component: OneBorderComponent,
  argTypes: {
    variation: {
      options: ['red'],
      control: {
        type: 'radio',
      },
    },
  },
} as ComponentMeta<typeof OneBorderComponent>

export const OneBorder: ComponentStory<typeof OneBorderComponent> = (args) => (
  <OneBorderComponent {...args} />
)

OneBorder.args = {
  small: false,
  children: 'Button',
}
