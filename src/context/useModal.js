import React, { createContext, useContext, useState } from 'react'

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

  return (
    <ModalContext.Provider
      value={{ modalVisible, message, closeable, showMessage, closeModal }}
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
