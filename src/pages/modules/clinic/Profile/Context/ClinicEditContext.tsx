import React from 'react'
import _ from 'lodash'
import { ErrorsI, ClinicProfileI } from '../types'

const initialValue = {
  isDisabled: true,
  error: {} as ErrorsI,
  isHasModificationField: false,
  data: {} as ClinicProfileI,
  photo: {} as File,
  setPhoto: () => { },
  setIsDisabled: () => { },
  setError: () => { },
  setIsHashModificationField: () => { },
  setData: () => { },
}

type ClinicEditContextType = {
  setIsDisabled: (newState: boolean) => void,
  setError: (data: ErrorsI) => void,
  setIsHashModificationField: (newState: boolean) => void,
  setData: (data: ClinicProfileI) => void,
  isDisabled: boolean,
  error: ErrorsI,
  isHasModificationField: boolean,
  data: ClinicProfileI,
  photo: File,
  setPhoto: (data: File) => void
}

export const ClinicEditContext = React.createContext<ClinicEditContextType>(initialValue)

export const ClinicEditContextProvider: React.FC = ({ children }) => {
  const [isDisabled, setIsDisabled] = React.useState(initialValue.isDisabled)
  const [error, setError] = React.useState<ErrorsI>({} as ErrorsI)
  const [isHasModificationField, setIsHashModificationField] = React.useState(initialValue.isHasModificationField)
  const [data, setData] = React.useState(initialValue.data)
  const [photo, setPhoto] = React.useState<File>({ size: 0 } as File)

  return (
    <ClinicEditContext.Provider value={{
      isDisabled, setIsDisabled,
      error, setError,
      isHasModificationField, setIsHashModificationField,
      data, setData,
      photo, setPhoto
    }}>

      {children}

    </ClinicEditContext.Provider>
  )
}
