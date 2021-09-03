import React, { useState } from 'react'
import InputMask from '../../../../components/Form/InputMask'
// import cardImg from '../../../../assets/img/cardSabin.png'
import LayoutCenter from '../../../../components/Layout/LayoutCenter'
import validatorCpf from '../../../../helpers/validateCpf'
import { Container } from './styles'
import Modal from '../../../../components/Modal'
import hiddenPhoneAndEmail from '../helpers/hiddenPhoneAndEmail'
import { useHistory } from 'react-router-dom'
import ButtonPrimary from '../../../../components/Button/Primary'

function Initial() {
  const [cpf, setCpf] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [modalTitle, setTitleModal] = useState('')
  const [modalType, setModalType] = useState('')
  const [modalContent, setModalContent] = useState('')
  const [optionsConfirm, setOptions] = useState([])
  const [originalValue, setOriginalValue] = useState([])
  const history = useHistory()

  const fetchData = (data) => {
    if (data.email || data.phone) {
      setShowModal(true)
      setModalType('error')
      setTitleModal('Desculpe')
      setModalContent(
        'Os seus dados não foram encontrados na nossa base. Isso não significa que seu cadastro do cartão Sabin Saúde não exista.'
      )
    } else {
      setShowModal(true)
      setModalType('warning')
      setTitleModal('Atenção')
      setModalContent(
        'Autoriza importar seus dados cadastrais do Cartão Sabin Saúde?'
      )
    }
  }

  const onSendCpf = (e) => {
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
      const fakeOriginalData = {
        email: `lucasecp@email.com`,
        phone: `21993371281`,
      }
      setOriginalValue(fakeOriginalData)
      const fakeHashData = {
        email: `${hiddenPhoneAndEmail('email', 'lucasecp@email.com')}`,
        phone: `${hiddenPhoneAndEmail('celular', '21993371281')}`,
      }

      setOptions(fakeHashData)
      fetchData(fakeHashData)
      setTimeout(() => {
        fetchData([])
      }, 300)
    }
  }
  const setModalErrors = () => {
    setShowModal(true)
    setModalType('error')
    setTitleModal('Preenchimento incorreto')
  }
  const closeModal = () => {
    setShowModal(false)
  }
  const pushToConfirmData = () => {
    closeModal()
    history.push({
      pathname: '/confirmar-dados',
      state: { hiddenData: optionsConfirm, originalData: originalValue },
    })
  }

  const templateModalButton = () => {
    if (modalType === 'error')
      return <ButtonPrimary onClick={closeModal}>Entendi</ButtonPrimary>
    if (modalType === 'success')
      return <ButtonPrimary onClick={closeModal}>Ok</ButtonPrimary>
    if (modalType === 'warning')
      return (
        <>
          <ButtonPrimary onClick={pushToConfirmData}>Sim</ButtonPrimary>
          <ButtonPrimary onClick={closeModal}>Não</ButtonPrimary>
        </>
      )
  }
  return (
    <LayoutCenter>
      <Container onSubmit={onSendCpf}>
        {/* <img src={cardImg} alt="Cartão Sabin" /> */}
        <InputMask
          maxLength={14}
          // typeMask={'cpf'}
          value={cpf}
          setValue={setCpf}
          mask="###.###.###-##"
          label="Insira seu CPF: *"
          placeHolder="123.456.789-00"
        />
        <ButtonPrimary>Encaminhar</ButtonPrimary>
      </Container>
      {showModal && (
        <Modal
          type={modalType}
          title={modalTitle}
          content={modalContent}
          onClickModal={(e) =>
            e.target === e.currentTarget && setShowModal(false)
          }
          footer={templateModalButton()}
        />
      )}
    </LayoutCenter>
  )
}

export default Initial
