export interface CompleteProps {
  setValue: (value: string) => void
  hasErrors?: () => void
  value: string,
  errors?: ErrorI
}

export type OptionsI = {
  value: string
  label: JSX.Element | null
}

export type ErrorI = {
  specialist: string,
  startTime: string,
  endTime: string,
  patient: string,
  date: string
}

export type setOptionsType = (value: { options: OptionsI[] }[]) => void
