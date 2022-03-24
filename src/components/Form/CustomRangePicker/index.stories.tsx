import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import CustomRangePickerComponent from '@/components/Form/CustomRangePicker'

export default {
  title: 'Componentes/Form',
  component: CustomRangePickerComponent,
  argTypes: {
    setValue: {
      control: false,
    },
  },
} as ComponentMeta<typeof CustomRangePickerComponent>

export const CustomRangePicker: ComponentStory<
  typeof CustomRangePickerComponent
> = (args) => <CustomRangePickerComponent {...args} />

CustomRangePicker.args = {
  label: 'Label',
  value: [],
  hasError: false,
  msgError: '',
}
