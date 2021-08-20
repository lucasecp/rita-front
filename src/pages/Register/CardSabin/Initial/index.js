import React, { useState } from 'react'
import InputMask from '../../../../components/Form/InputMask'
import cardImg from '../../../../assets/img/cardSabin.png'

import LayoutCenter from '../../../../components/Layout/LayoutCenter'

import { Container } from './styles'
import Modal from '../../../../components/Modal'

function Initial() {
  const [cpf, setCpf] = useState('')
  const [showModal, setShowModal] = useState(false)



  const onSendCpf = (e) => {
    e.preventDefault()
    // validateCpf()
    setShowModal(true)
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
      // const fakeOriginalData = [
      //   {
      //     label: `Email: lucasecp@email.com`,
      //     value: `lucasecp@email.com`,
      //     target: 'Email',
      //   },
      //   {
      //     label: `Celular: 21993371281`,
      //     value: `21993371281`,
      //     target: 'Celular',
      //   },
      // ]

      // setOriginalValue(fakeOriginalData)
      // const fakeHashData = [
      //   {
      //     label: `Email: ${hashData('email', 'lucasecp@email.com')}`,
      //     value: `${hashData('email', 'lucasecp@email.com')}`,
      //     target: 'Email',
      //   },
      //   {
      //     label: `Celular: ${hashData('celular', '21993371281')}`,
      //     value: `${hashData('celular', '21993371281')}`,
      //     target: 'Celular',
      //   },
      // ]

      // setOptions(fakeHashData)
      // fetchData(fakeHashData)
      // setTimeout(() => {
      //   fetchData([])
      // }, 3000)
    }
  }

  return (
    <LayoutCenter>
      <Container onSubmit={onSendCpf}>
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
      </Container>
      <Modal
        type={'success'}
        active={showModal}
        title={'CPF'}
        content={'O CPF esta certo'}
        onClickModal={() => setShowModal(false)}
        // footer={templateModalButton()}
      />
    </LayoutCenter>
  )
}

export default Initial
