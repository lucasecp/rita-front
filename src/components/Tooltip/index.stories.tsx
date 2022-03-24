import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import TooltipComponent from '@/components/Tooltip'

export default {
  title: 'Componentes/Tooltip',
  component: TooltipComponent,
} as ComponentMeta<typeof TooltipComponent>

export const Tooltip: ComponentStory<typeof TooltipComponent> = (args) => (
  <TooltipComponent {...args} />
)

Tooltip.args = {
  label: 'Label',
  children: 'Tooltip',
}
