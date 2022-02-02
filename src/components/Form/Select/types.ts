import { SelectHTMLAttributes } from 'react'

interface OptionsI {
  value:  string | number
  label: string | number
}
interface OnChangeProps {
  target: {
    value: any
  }
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options?: OptionsI[]
  label?: string
  setValue?: (value: any) => void
  value: string | number
  labelDefaultOption?: string
  msgError?: string
  variation?: string
  hasError?: string | boolean
  onChange?: (props: OnChangeProps) => void
  disabled?: boolean
  onBlur?: () => void
  [x: string]: any
}
