export interface CompleteProps {
  setValue: (value: string) => void
}

export type OptionsI = {
  value: string
  label: JSX.Element | null
}

export type setOptionsType = (value: { options: OptionsI[] }[]) => void
