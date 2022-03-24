import React, { useState, useEffect } from 'react'
import { Container } from './styles'

import { ReactComponent as KeyIcon } from '@/assets/icons/key.svg'
import { ReactComponent as BankIcon } from '@/assets/icons/bank.svg'
import { FinancialList } from '../FinancialList'
import { PixKeyForm, BankAccountForm } from '../ReceptionForm'

export const PixKeyList = ({ onFormToggle }) => {
  const [items, setItems] = useState([])
  const [formIsVisible, setFormIsVisible] = useState(false)

  useEffect(() => {
    // @TODO: api.get pix keys
    const pixKeys = [
      {
        id: 1,
        type: 'cpf',
        value: '000.000.000-00',
      },
      {
        id: 2,
        type: 'phone',
        value: '(99) 99999-9999',
      },
    ]
    const loadedItems = []

    for (const pixKey of pixKeys) {
      loadedItems.push({
        id: pixKey.id,
        title:
          {
            cpf: 'CPF',
            phone: 'TELEFONE CELULAR',
            email: 'E-MAIL',
          }[pixKey.type] || pixKey.type,
        data: [`Chave: ${pixKey.value}`],
        active: true,
      })
    }

    setItems(loadedItems)
  }, [])

  useEffect(() => {
    onFormToggle && onFormToggle(formIsVisible)
  }, [formIsVisible])

  function handleFormSubmit(items) {
    // console.log('handleFormSubmit pix key items', items)
    // @TODO: api.post add pix key
    setItems(items.map((item) => ({ ...item, active: true })))
    setFormIsVisible(false)
  }

  function handleItemRemove(itemRemoved) {
    // console.log('handleItemRemove pix key itemRemoved', itemRemoved)
    // @TODO: api.delete pix key
    const newItems = items.filter((item) => item.id !== itemRemoved.id)
    setItems(newItems)
  }

  return (
    <>
      {formIsVisible ? (
        <PixKeyForm
          selectedItems={items}
          onSubmit={handleFormSubmit}
          onCancel={() => setFormIsVisible(false)}
        />
      ) : (
        <FinancialList
          icon={<KeyIcon />}
          items={items}
          textAdd="Selecionar Chave PIX para recebimentos"
          onItemAdd={() => setFormIsVisible(true)}
          onItemClick={(item) => [...items, item]}
          onItemRemove={handleItemRemove}
        />
      )}
    </>
  )
}

export const BankAccountList = ({ onFormToggle }) => {
  const [items, setItems] = useState([])
  const [formIsVisible, setFormIsVisible] = useState(false)

  useEffect(() => {
    // @TODO: api.get bank accounts
    const bankAccounts = [
      {
        bankName: 'Banco Investimentos S.A.',
        agency: '0000-0',
        number: '00000-0',
      },
    ]
    const loadedItems = []

    for (const account of bankAccounts) {
      loadedItems.push({
        title: account.bankName.toUpperCase(),
        data: [`Agência: ${account.agency}`, `Conta: ${account.number}`],
        active: true,
      })
    }

    setItems(loadedItems)
  }, [])

  useEffect(() => {
    onFormToggle && onFormToggle(formIsVisible)
  }, [formIsVisible])

  function handleFormSubmit(model) {
    // console.log('handleFormSubmit bank account model', model)
    // @TODO: api.post add bank account
    setItems([
      ...items,
      {
        title: model.bank,
        data: [`Agência: ${model.agency}`, `Conta: ${model.number}`],
        active: true,
      },
    ])
    setFormIsVisible(false)
  }

  function handleItemRemove(item) {
    // console.log('handleItemRemove bank account itemRemoved', itemRemoved)
    // @TODO: api.delete bank account
    const newItems = items.filter((paymentItem) => paymentItem !== item)
    setItems(newItems)
  }

  return (
    <>
      {formIsVisible ? (
        <BankAccountForm
          onSubmit={handleFormSubmit}
          onCancel={() => setFormIsVisible(false)}
        />
      ) : (
        <FinancialList
          icon={<BankIcon />}
          items={items}
          textAdd="Cadastrar Conta Bancária para recebimentos"
          onItemAdd={() => setFormIsVisible(true)}
          onItemRemove={handleItemRemove}
        />
      )}
    </>
  )
}

export const ReceptionData = () => {
  const [pixKeyFormIsVisible, setPixKeyFormIsVisible] = useState(false)
  const [bankAccountFormIsVisible, setBankAccountFormIsVisible] =
    useState(false)

  return (
    <Container formIsVisible={bankAccountFormIsVisible || pixKeyFormIsVisible}>
      <h4>Recebimento</h4>
      <section>
        {!bankAccountFormIsVisible && (
          <PixKeyList
            onFormToggle={(isVisible) => setPixKeyFormIsVisible(isVisible)}
          />
        )}
        {!pixKeyFormIsVisible && (
          <BankAccountList
            onFormToggle={(isVisible) => setBankAccountFormIsVisible(isVisible)}
          />
        )}
      </section>
    </Container>
  )
}
