import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import ButtonPrimary from '@/components/Button/Primary'
import { Table as TableComponent } from '@/components/Table'

export default {
  title: 'Componentes/Table',
  component: TableComponent,
} as ComponentMeta<typeof TableComponent>

export const Table: ComponentStory<typeof TableComponent> = (args) => (
  <TableComponent {...args} />
)

Table.args = {
  columns: [
    { path: 'name' },
    { path: 'createdAt', fit: true },
    {
      path: 'actions',
      fit: true,
      custom: (row) => <ButtonPrimary>Ação {row.name}</ButtonPrimary>,
    },
  ],
  data: [
    { name: 'Item 1', createdAt: '10/10/2010' },
    { name: 'Item 2', createdAt: '10/10/2010' },
  ],
}
