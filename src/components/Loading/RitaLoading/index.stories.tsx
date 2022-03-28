import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import { RitaLoading as RitaLoadingComponent } from '@/components/Loading/RitaLoading'

export default {
  title: 'Componentes/Loading',
  component: RitaLoadingComponent,
} as ComponentMeta<typeof RitaLoadingComponent>

export const RitaLoading: ComponentStory<typeof RitaLoadingComponent> = () => (
  <RitaLoadingComponent />
)
