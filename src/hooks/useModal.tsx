import React, { createContext, useContext, useState } from 'react'
import { SimpleModal, MODAL_TYPES } from '@/components/Modal/SimpleModal'

interface IShowSimple {
  error: (message: string) => void
  warning: (message: string) => void
  success: (message: string) => void
}

interface ModalContextData {
  modalVisible: boolean
  message: JSX.Element | null
  closeable: boolean
  showMessage: (
    MessageComponent: React.FC<any>,
    props: { [x: string]: any },
    isCloseable?: boolean,
  ) => void
  closeModal: () => void
  showSimple: IShowSimple
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData)

const ModalProvider: React.FC = ({ children }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [closeable, setCloseable] = useState(false)

  const [message, setMessage] = useState<JSX.Element | null>(null)

  const showMessage = (
    MessageComponent: React.FC<any>,
    props: { [x: string]: any },
    isCloseable = false,
  ) => {
    setCloseable(isCloseable)
    setMessage(<MessageComponent {...props} />)
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  const error = (message: string) => {
    showMessage(SimpleModal, {
      type: MODAL_TYPES.ERROR,
      message,
    })
  }

  const warning = (message: string) => {
    showMessage(SimpleModal, {
      type: MODAL_TYPES.WARNING,
      message,
    })
  }

  const success = (message: string) => {
    showMessage(SimpleModal, {
      type: MODAL_TYPES.SUCCESS,
      message,
    })
  }

  const showSimple = {
    error,
    warning,
    success,
  }

  return (
    <ModalContext.Provider
      value={{
        modalVisible,
        message,
        closeable,
        showMessage,
        closeModal,
        showSimple,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

const useModal = () => {
  const context = useContext(ModalContext)

  return context
}

export { ModalProvider, useModal }
