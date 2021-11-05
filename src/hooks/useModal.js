import React, { createContext, useContext, useState } from 'react'
import SimpleModal, { MODAL_TYPES } from '@/components/Modal/SimpleModal'

const ModalContext = createContext({})

const ModalProvider = ({ children }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [closeable, setCloseable] = useState(false)

  const [message, setMessage] = useState(null)

  const showMessage = (MessageComponent, props, isCloseable = false) => {
    setCloseable(isCloseable)
    setMessage(<MessageComponent {...props} />)
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  const error = (message) => {
    showMessage(SimpleModal, {
      type: MODAL_TYPES.ERROR,
      message,
    })
  }

  const warning = (message) => {
    showMessage(SimpleModal, {
      type: MODAL_TYPES.WARNING,
      message,
    })
  }

  const success = (message) => {
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
