import React, { useState, useEffect } from 'react'
import InputPass from '../../../components/Form/InputPassword'
import Modal from '../../../components/Modal'
import { Container, Mandatory, MandatoryItem, ContentModal } from './style'
const DefinePassword = () => {
  const [inputPassword, setInputPassword] = useState('')
  const [inputConfirmPassword, setinputConfirmPassword] = useState('')
  const [errorsPass, setErrors] = useState([])
  const [activeModal, setActiveModal] = useState(false)
  const [modalTitle, setTitleModal] = useState('')
  const [modalTitleContent, setModalTitleContent] = useState('')
  const [modalType, setModalType] = useState('')

  useEffect(() => {
    document.title = 'Definir Senha'
  }, [])

  useEffect(() => {
    validatePassword(inputPassword, inputConfirmPassword)
    // eslint-disable-next-line
  }, [inputConfirmPassword, inputPassword])

  const templateModalContent = () => {
    const errorCopy = [...errorsPass]
    const template = (
      <ContentModal>
        <h3>{modalTitleContent}</h3>
        {errorsPass.length ? (
          <ul>
            {errorCopy.map((el, i) => (
              <li key={i}>{el}</li>
            ))}
          </ul>
        ) : (
          ''
        )}
      </ContentModal>
    )
    return template
  }

  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) setActiveModal(false)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    validatePassword(inputPassword, inputConfirmPassword)
    if (modalType === 'error' || errorsPass.length) {
      setTitleModal('Preenchimento incorreto')
      return setActiveModal(true)
    }
    setActiveModal(true)
    setModalType('success')
    setTitleModal('Perfil criado com sucesso')
    setModalTitleContent('Seu login é seu CPF.')
  }

  const clearErrors = () => {
    setErrors([])
    setModalTitleContent('')
    setModalType('')
    setTitleModal('')
  }

  const validatePassword = (password, confirmPass) => {
    clearErrors()

    const anyLetter = /[a-zA-Z]/g
    const anySpecialCaracter = /[ `!@#$%^&*()_+\-=[\]{};`´':"\\|,.<>/?~]/
    const containNumber = new RegExp('[0-9]+')
    if (password.trim() !== confirmPass.trim()) {
      setModalType('error')
      setModalTitleContent('As senhas não conferem, favor revisar os campos.')
    }

    if (!password.trim().length && !confirmPass.trim().length) {
      setModalType('error')
      setModalTitleContent('Por favor confira o preenchimento dos campos.')
    }
    if (password.trim().length < 6 && confirmPass.trim().length < 6) {
      setErrors((errors) => [...errors, 'Mínimo 6 dígitos'])
      setModalType('error')
      setModalTitleContent('A senha não atende aos critérios de segurança:')
    }
    if (!containNumber.test(password) && !containNumber.test(confirmPass)) {
      setErrors((errors) => [...errors, 'Números'])
      setModalType('error')
      setModalTitleContent('A senha não atende aos critérios de segurança:')
    }
    if (!anyLetter.test(password) && !anyLetter.test(confirmPass)) {
      setErrors((errors) => [...errors, 'Letras'])
      setModalType('error')
      setModalTitleContent('A senha não atende aos critérios de segurança:')
    }
    if (
      !anySpecialCaracter.test(password) &&
      !anySpecialCaracter.test(confirmPass)
    ) {
      setErrors((errors) => [...errors, 'Caracteres especiais'])
      setModalType('error')
      setModalTitleContent('A senha não atende aos critérios de segurança:')
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h2>Definir senha</h2>
        <h3>Olá! Preencha os campos abaixo para definir sua senha:</h3>
        <InputPass
          setValue={setInputPassword}
          disabled={activeModal}
          value={inputPassword}
          label="Digite sua senha:"
        />
        <InputPass
          setValue={setinputConfirmPassword}
          disabled={activeModal}
          value={inputConfirmPassword}
          label="Confirme sua senha:"
        />
        <Mandatory>
          <MandatoryItem
            type={errorsPass.indexOf('Letras') !== -1 ? 'error' : 'success'}
          >
            Letras
          </MandatoryItem>
          <MandatoryItem
            type={errorsPass.indexOf('Números') !== -1 ? 'error' : 'success'}
          >
            Números
          </MandatoryItem>
          <MandatoryItem
            type={
              errorsPass.indexOf('Caracteres especiais') !== -1
                ? 'error'
                : 'success'
            }
          >
            Caracteres especiais
          </MandatoryItem>
          <MandatoryItem
            type={
              errorsPass.indexOf('Mínimo 6 dígitos') !== -1
                ? 'error'
                : 'success'
            }
          >
            Mínimo 6 dígitos{' '}
          </MandatoryItem>
        </Mandatory>
        <button>Confirmar</button>
      </form>
      {activeModal && (
        <Modal
          type={modalType}
          title={modalTitle}
          content={templateModalContent()}
          onClickModal={handleCloseModal}
          footer={
            <button onClick={handleCloseModal}>
              {modalType === 'success' ? 'ok' : 'Entendi'}
            </button>
          }
        />
      )}
    </Container>
  )
}
export default DefinePassword
