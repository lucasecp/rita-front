import React, { useState,useEffect } from 'react'
import Modal from '../../../../components/Modal'
import InputMask from '../../../../components/Form/InputMask'
import InputText from '../../../../components/Form/InputText'
import cardImg from '../../../../assets/img/cardSabin.png'
import { Container, BtnGroup } from './style'
import ButtonPrimary from '../../../../components/Button/Primary'
import { Link, useHistory, useLocation } from 'react-router-dom'


const CardSabin = () => {
  const [showModal, setShowModal] = useState(false)
  const [modalTitle, setTitleModal] = useState('')
  const [modalType, setModalType] = useState('')
  const [modalContent, setModalContent] = useState('')
  const [inputRadio, setInputRadio] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const [optionsConfirm, setOptions] = useState('')
  const [originalValue, setOriginalValue] = useState('')

  const history = useHistory()
  const location = useLocation()

  useEffect(()=>{
    if(!location.state) return history.push('cadastro-cartao-sabin')
    setOriginalValue(location.state.originalData)
    setOptions(location.state.hiddenData)
  })


  const handleSubmitData = (e) => {
    e.preventDefault()
    const anySpecialCaracter = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/
    const newPhone = [...phone]
      .map((str) => str.replace(anySpecialCaracter, ''))
      .join('')



    const isEqual = Object.values(originalValue).filter(
      (el) => el === email || el === newPhone
    )

    if (!inputRadio || !isEqual.length) {
      setModalContent(
        `Selecione uma das opções E-mail ou Celular e preencha o dado corretamente.`
      )
      setModalErrors()
    }
    if (inputRadio && !email && !newPhone) {
      setModalContent(`Preencha o ${inputRadio === 'phone' ? 'celular' : 'E-mail'} corretamente.`)
      setModalErrors()
    }
    if (isEqual.length) {
      setShowModal(true)
      setModalType('success')
      setTitleModal('Encaminhado com sucesso')
      setModalContent(
        `Em breve você receberá um ${
          inputRadio === 'phone' ? 'SMS' : 'E-mail'
        } para a conclusão do seu cadastro.`
      )
    }
  }
  const templateModalButton = () => {
    if (modalType === 'error')
      return <ButtonPrimary onClick={closeModal}>Entendi</ButtonPrimary>
    if (modalType === 'success')
      return <ButtonPrimary onClick={closeModal}>Ok</ButtonPrimary>
  }
  const closeModal = () => {
    setShowModal(false)
  }
  const setModalErrors = () => {
    setShowModal(true)
    setModalType('error')
    setTitleModal('Preenchimento incorreto')
  }


  return (
    <Container>
      <form onSubmit={handleSubmitData}>
        <img src={cardImg} alt="Cartão Sabin" />
        <h3>
          Para continuarmos, precisamos confirmar alguns dados. Escolha uma das
          opções abaixo.{' '}
          {Object.keys(optionsConfirm).length === 1
            ? `Reconhece este ${Object.keys(optionsConfirm)[0] === 'phone' ? 'celular' : 'email'}?`
            : null}
        </h3>

        {optionsConfirm.email && (
          <>
            <label htmlFor='email'>
              <input
                type="radio"
                id='email'
                value='email'
                onChange={() => {
                  setInputRadio('email')
                  setPhone('')
                }}
                checked={inputRadio === 'email'}
              />
              {`E-mail: ${optionsConfirm.email}`}
            </label>

            {inputRadio === 'email' && (
              <InputText
                setValue={setEmail}
                value={email}
                placeHolder={'xxxxxxxx@email.com'}
              />
            )}
          </>
        )}

        {optionsConfirm.phone && (
          <>
            <label htmlFor="celular">
              <input
                type="radio"
                id="celular"
                value='phone'
                onChange={() => {
                  setInputRadio('phone')
                  setEmail('')
                }}
                checked={inputRadio === 'phone'}
              />
              {`Celular: ${optionsConfirm.phone}`}
            </label>
            {inputRadio === 'phone' && (
              <InputMask
                setValue={setPhone}
                value={phone}
                placeHolder='(00) 00000-0000'
                maxLength={15}
                typeMask="phone"
              />
            )}
          </>
        )}
        <BtnGroup>
          <Link to='/'>Não reconheço esses dados</Link>
          <ButtonPrimary>Encaminhar</ButtonPrimary>
        </BtnGroup>
      </form>
      {showModal &&
      <Modal
        type={modalType}
        title={modalTitle}
        content={modalContent}
        onClickModal={(e) => e.target === e.currentTarget && setShowModal(false)}
        footer={templateModalButton()} />
      }
    </Container>
  )
}

export default CardSabin
