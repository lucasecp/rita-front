import React from 'react'
import { ErrorsI, ClinicProfileI } from '../types'

// const initialValue = {
//   isDisabled: true,
//   error: {} as ErrorsI,
//   isHasModificationField: false,
//   isHashModificationSelectAndMultSelect: false,
//   data: {} as ClinicProfileI,
//   photo: {} as File,
//   setPhoto: () => {},
//   setIsDisabled: () => {},
//   setError: () => {},
//   setIsHashModificationField: () => {},
//   setIsHashModificationSelectAndMultSelect: () => {},
//   setData: () => {},
// }

type ClinicEditContextType = {
  setIsDisabled: (newState: boolean) => void
  setError: (data: ErrorsI) => void
  setIsHashModificationField: (newState: boolean) => void
  setIsHashModificationSelectAndMultSelect: (newState: boolean) => void
  setData: (data: ClinicProfileI) => void
  isDisabled: boolean
  error: ErrorsI
  isHasModificationField: boolean
  isHashModificationSelectAndMultSelect: boolean
  data: ClinicProfileI
  photo: File
  setPhoto: (data: File) => void
}

export const ClinicEditContext = React.createContext<ClinicEditContextType>(
  {} as ClinicEditContextType,
)

export const ClinicEditContextProvider: React.FC = ({ children }) => {
  const [isDisabled, setIsDisabled] = React.useState(false)
  const [error, setError] = React.useState<ErrorsI>({} as ErrorsI)
  const [isHasModificationField, setIsHashModificationField] =
    React.useState(false)
  const [
    isHashModificationSelectAndMultSelect,
    setIsHashModificationSelectAndMultSelect,
  ] = React.useState(false)
  const [data, setData] = React.useState< ClinicProfileI>({} as ClinicProfileI)
  const [photo, setPhoto] = React.useState<File>({ size: 0 } as File)

  return (
    <ClinicEditContext.Provider
      value={{
        isDisabled,
        setIsDisabled,
        error,
        setError,
        isHasModificationField,
        setIsHashModificationField,
        data,
        setData,
        photo,
        setPhoto,
        isHashModificationSelectAndMultSelect,
        setIsHashModificationSelectAndMultSelect,
      }}
    >
      {children}
    </ClinicEditContext.Provider>
  )
}
