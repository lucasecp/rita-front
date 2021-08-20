import React, { useState } from 'react'
import Modal from '../../../components/Modal'
import InputMask from '../../../components/Form/InputMask'
import validatorCpf from '../../../helpers/validatorCpf'
import InputText from '../../../components/Form/InputText'
import cardImg from '../../../assets/img/cardSabin.png'
import { Container, BtnGroup } from './style'

const CardSabin = () => {
  const [activeModal, setActiveModal] = useState(false)
  const [modalTitle, setTitleModal] = useState('')
  const [modalType, setModalType] = useState('')
  const [modalContent, setModalContent] = useState('')
  const [formContent, setcontent] = useState('contentCpf')
  const [cpf, setCpf] = useState('')
  const [optionsConfirm, setOptions] = useState([])
  const [inputRadio, setInputRadio] = useState('')
  const [modalLabelBtn, setModalLabelBtn] = useState('Entendi')

  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [originalValue, setOriginalValue] = useState([])

  // Apenas para teste (VERSÃO FINAL VAI BUSCAR NO SERVIDOR)
  const fetchData = (data) => {
    if (data.length) {
      setActiveModal(true)
      setModalType('error')
      setTitleModal('Desculpe')
      setModalContent(
        'Os seus dados não foram encontrados na nossa base. Isso não significa que seu cadastro do cartão Sabin Saúde não exista.'
      )
      setModalLabelBtn('Faça seu cadastro')
    } else {
      setActiveModal(true)
      setModalType('warning')
      setTitleModal('Atenção')
      setModalContent(
        'Autoriza importar seus dados cadastrais do Cartão Sabin Saúde?'
      )
    }
  }

  const setModalErrors = () => {
    setActiveModal(true)
    setModalType('error')
    setTitleModal('Preenchimento incorreto')
    setModalLabelBtn('Entendi')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    validateCpf()
  }
  const validateCpf = () => {
    const newCpf = [...cpf].toString().replace(/\D+/g, '')
    if (!newCpf.length) {
      setModalErrors()
      setModalContent('O campo CPF deve ser informado.')
    } else if (!validatorCpf(newCpf)) {
      setModalErrors()
      setModalContent('Informe um CPF válido.')
    } else {
      const fakeOriginalData = [
        {
          label: `Email: lucasecp@email.com`,
          value: `lucasecp@email.com`,
          target: 'Email',
        },
        {
          label: `Celular: 21993371281`,
          value: `21993371281`,
          target: 'Celular',
        },
      ]

      setOriginalValue(fakeOriginalData)
      const fakeHashData = [
        {
          label: `Email: ${hashData('email', 'lucasecp@email.com')}`,
          value: `${hashData('email', 'lucasecp@email.com')}`,
          target: 'Email',
        },
        {
          label: `Celular: ${hashData('celular', '21993371281')}`,
          value: `${hashData('celular', '21993371281')}`,
          target: 'Celular',
        },
      ]

      setOptions(fakeHashData)
      fetchData(fakeHashData)
      setTimeout(() => {
        fetchData([])
      }, 3000)
    }
  }
  const hashData = (type, data) => {
    if (type === 'email') {
      const emailArray = data.split('@')
      const firstTwoCaracteres = Array.from(emailArray[0]).splice(0, 2)
      const numHash = emailArray[0].slice(2)
      const hash = Array.from(numHash).map((el) => el.replace(el, '*'))
      const result = `${firstTwoCaracteres.join('')}${hash.join('')}@${
        emailArray[1]
      }`
      return result
    }
    if (type === 'celular') {
      const lastTwoCaracteres = data.slice(-2)
      const fistTwoCaracteres = data.slice(0, 2)
      const numHash = data.slice(2, -2)
      const hash = Array.from(numHash).map((el) => el.replace(el, '*'))
      const result = `${fistTwoCaracteres}${hash.join('')}${lastTwoCaracteres}`
      return result
    }
  }

  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) setActiveModal(false)
  }

  const handlePushToConfirm = () => {
    setActiveModal(false)
    setcontent('confirmData')
  }
  const handleSubmitData = (e) => {
    e.preventDefault()
    const anySpecialCaracter = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/
    const newPhone = [...phone]
      .map((str) => str.replace(anySpecialCaracter, ''))
      .join('')
    const optConfirmString =
      optionsConfirm.length === 2
        ? 'Email ou Celular'
        : optionsConfirm[0].target
    const isEqual = originalValue.filter(
      (el) => el.value === email || el.value === newPhone
    )

    if (!inputRadio.value || !isEqual.length) {
      setModalContent(
        `Selecione uma das opções ${optConfirmString} e preencha o dado corretamente.`
      )
      setModalErrors()
    }
    if (inputRadio.value && !email && !newPhone) {
      setModalContent(`Preencha o ${inputRadio.label} corretamente.`)
      setModalErrors()
    }
    if (isEqual.length) {
      setActiveModal(true)
      setModalType('success')
      setTitleModal('Encaminhado com sucesso')
      setModalContent(
        `Em breve você receberá um ${
          inputRadio.label === 'Celular' ? 'SMS' : 'E-mail'
        } para a conclusão do seu cadastro.`
      )
      setModalLabelBtn('ok')
    }
  }
  const templateModalButton = () => {
    if (modalType === 'error')
      return <button onClick={handleCloseModal}>{modalLabelBtn} </button>
    else if (modalType === 'success')
      return <a onClick={handleCloseModal}>{modalLabelBtn}</a>
    else if (modalType === 'warning')
      return (
        <>
          <a href="#" data-label-button="sim" onClick={handlePushToConfirm}>
            Sim
          </a>
          <a href="#" data-label-button="não" onClick={handleCloseModal}>
            Não
          </a>
        </>
      )
  }

  return (
    <Container>
      {formContent === 'contentCpf' ? (
        <form onSubmit={handleSubmit}>
          <img src={cardImg} alt="Cartão Sabin" />
          <InputMask
            maxLength={14}
            typeMask={'cpf'}
            value={cpf}
            setValue={setCpf}
            label="Insira seu CPF: *"
            placeHolder="123.456.789-00"
          />
          <button>Encaminhar</button>
        </form>
      ) : (
        <form onSubmit={handleSubmitData}>
          <img src={cardImg} alt="Cartão Sabin" />
          <h3>
            Para continuarmos, precisamos confirmar alguns dados. Escolha uma
            das opções abaixo.{' '}
            {optionsConfirm.length === 1
              ? `Reconhece este ${optionsConfirm[0].target}?`
              : ''}
          </h3>


              <label htmlFor={optionsConfirm[0].label}>
                <input
                  type="radio"
                  id={optionsConfirm[0].label}
                  value={optionsConfirm[0].value}
                  onChange={(e) => {
                    setInputRadio({ value: e.target.value, label: 'email' })
                    setPhone('')
                  }}
                  checked={inputRadio.value === optionsConfirm[0].value}
                />
                {optionsConfirm[0].label}
              </label>
              {inputRadio.value === optionsConfirm[0].value && (
                <InputText
                  setValue={setEmail}
                  value={email}
                  placeHolder={'xxxxxxxx@email.com'}
                />
              )}

          {optionsConfirm.length > 1 && (
            <>
              <label htmlFor={optionsConfirm[1].label}>
                <input
                  type="radio"
                  id={optionsConfirm[1].label}
                  value={optionsConfirm[1].value}
                  onChange={(e) => {
                    setInputRadio({ value: e.target.value, label: 'Celular' })
                    setEmail('')
                  }}
                  checked={inputRadio.value === optionsConfirm[1].value}
                />
                {optionsConfirm[1].label}
              </label>
              {inputRadio.value === optionsConfirm[1].value && (
                <InputMask
                  setValue={setPhone}
                  value={phone}
                  placeHolder={'(00) 00000-0000'}
                  maxLength={15}
                  typeMask="phone"
                />
              )}
  </>
          )}
          <BtnGroup>
            <a href="#">Não reconheço esses dados</a>
            <button>Encaminhar</button>
          </BtnGroup>
        </form>
      )}

      <Modal
        type={modalType}
        active={activeModal}
        title={modalTitle}
        content={modalContent}
        onClickModal={handleCloseModal}
        footer={templateModalButton()}
      />
    </Container>
  )
}

export default CardSabin
