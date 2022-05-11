import React, { createContext, useContext, useState } from 'react'
import { DialogLayout } from '@/components/Dialog/Layout'
import { DialogConfirmation } from '@/components/Dialog/Confirmation'

interface DialogContextData {
  dialogIsVisible: boolean
  dialogComponent: JSX.Element | null
  dialogIsCloseable: boolean
  dialogOpen: (
    Component: React.FC<any>,
    props?: Record<string, unknown>,
    isCloseable?: boolean,
  ) => void
  dialogClose: () => void
  dialogLayout: (
    options: RitaComponents.DialogLayoutProps,
    isCloseable?: boolean
  ) => void
  dialogConfirmation: (
    options: RitaComponents.DialogConfirmationProps,
    isCloseable?: boolean
  ) => void
}

const DialogContext = createContext<DialogContextData>({} as DialogContextData)

const DialogProvider: React.FC = ({ children }) => {
  const [dialogIsVisible, setDialogIsVisible] = useState(false)
  const [dialogComponent, setDialogComponent] = useState<JSX.Element | null>(null)
  const [dialogIsCloseable, setCloseable] = useState(false)

  function dialogOpen(
    Component: React.FC<any>,
    props: Record<string, unknown>,
    isCloseable = false
  ) {
    setCloseable(isCloseable)
    setDialogComponent(<Component {...props} />)
    setDialogIsVisible(true)
  }

  function dialogClose() {
    setDialogIsVisible(false)

    setTimeout(() => {
      setDialogComponent(null)
    }, 300)
  }

  function dialogLayout(
    options: RitaComponents.DialogLayoutProps,
    isCloseable = false
  ) {
    dialogOpen(DialogLayout, options, isCloseable)
  }

  function dialogConfirmation(
    options: RitaComponents.DialogConfirmationProps,
    isCloseable = false
  ) {
    dialogOpen(DialogConfirmation, options, isCloseable)
  }

  return (
    <DialogContext.Provider
      value={{
        dialogIsVisible,
        dialogComponent,
        dialogIsCloseable,
        dialogOpen,
        dialogClose,
        dialogLayout,
        dialogConfirmation,
      }}
    >
      {children}
    </DialogContext.Provider>
  )
}

function useDialog (): DialogContextData {
  return useContext(DialogContext)
}

export { DialogProvider, useDialog }
