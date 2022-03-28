import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import PaginationComponent from '@/components/Pagination'

export default {
  title: 'Componentes/Pagination',
  component: PaginationComponent,
} as ComponentMeta<typeof PaginationComponent>

export const Pagination: ComponentStory<typeof PaginationComponent> = (args) => (
  <PaginationComponent {...args} />
)

Pagination.args = {
  total: 10,
  restQuery: '',
  range: [
    { label: '10', value: 10 },
    { label: '25', value: 25 },
    { label: '50', value: 50 },
    { label: '100', value: 100 },
  ],
}
