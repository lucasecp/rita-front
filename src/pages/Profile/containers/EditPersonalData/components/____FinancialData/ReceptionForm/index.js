import React, { useState, useEffect } from 'react'
import { Container } from './styles'

import { ReactComponent as KeyIcon } from '@/assets/icons/key.svg'

import InputText from '@/components/Form/InputText'
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import { FinancialList } from '../FinancialList'

import { validateName } from '@/pages/Profile/containers/EditPersonalData/helpers/validatorFields'

export const BankAccountForm = ({ onSubmit, onCancel }) => {
  const [bank, setBank] = useState('')
  const [agency, setAgency] = useState('')
  const [number, setNumber] = useState('')
  const [errors, setErrors] = useState({})

  function handleSubmit(event) {
    event.preventDefault()

    const newErrors = {
      bank: validateName(bank),
      agency: validateName(agency),
      number: validateName(number),
    }
    const hasErrors = Object.values(newErrors).some((value) => value !== '')

    setErrors(newErrors)

    !hasErrors &&
      onSubmit &&
      onSubmit({
        bank,
        agency,
        number,
      })
  }

  return (
    <Container>
      <h5>Cadastro de Conta Bancária para Recebimentos</h5>
      <form onSubmit={handleSubmit} onReset={onCancel}>
        <section>
          <InputText
            label="Banco:"
            value={bank}
            setValue={setBank}
            name="bank"
            hasError={errors.bank}
            msgError={errors.bank}
            onBlur={() => setErrors({ ...errors, bank: validateName(bank) })}
            onKeyUp={() => setErrors({ ...errors, bank: validateName(bank) })}
          />
        </section>
        <InputText
          label="Agência:"
          value={agency}
          setValue={setAgency}
          name="agency"
          hasError={errors.agency}
          msgError={errors.agency}
          onBlur={() => setErrors({ ...errors, agency: validateName(agency) })}
          onKeyUp={() => setErrors({ ...errors, agency: validateName(agency) })}
        />
        <InputText
          label="Conta:"
          value={number}
          setValue={setNumber}
          name="number"
          hasError={errors.number}
          msgError={errors.number}
          onBlur={() => setErrors({ ...errors, number: validateName(number) })}
          onKeyUp={() => setErrors({ ...errors, number: validateName(number) })}
        />
        <footer>
          <OutlineButton type="reset">Cancelar</OutlineButton>
          <ButtonPrimary type="submit">Salvar Alterações</ButtonPrimary>
        </footer>
      </form>
    </Container>
  )
}

export const PixKeyForm = ({
  selectedItems: selectedItemsFromProps = [],
  onSubmit,
  onCancel,
}) => {
  const [items, setItems] = useState([])
  const [selectedItems, setSelectedItems] = useState(selectedItemsFromProps)

  useEffect(() => {
    // @TODO: api.get pix key available
    const pixKeysAvailable = [
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
      {
        id: 3,
        type: 'email',
        value: 'nome.sobrenome@gmail.com',
      },
      {
        id: 4,
        type: 'random',
        value: '151DS51DSD15D1F1FD514GFG1H561TH1D',
      },
    ]
    const loadedItems = []

    for (const pixKey of pixKeysAvailable) {
      loadedItems.push({
        id: pixKey.id,
        title:
          {
            cpf: 'CPF',
            phone: 'TELEFONE CELULAR',
            email: 'E-MAIL',
            random: 'CHAVE ALEATÓRIA',
          }[pixKey.type] || pixKey.type,
        data: [`Chave: ${pixKey.value}`],
        active: selectedItems.some((item) => {
          return item.id === pixKey.id
        }),
      })
    }

    setItems(loadedItems)
  }, [])

  useEffect(() => {
    if (items.length) {
      const newItems = items.map((item) => {
        return {
          ...item,
          active: selectedItems.some((selectedItem) => {
            return selectedItem.id === item.id
          }),
        }
      })

      setItems(newItems)
    }
  }, [selectedItems])

  function handleItemRemove(item) {
    const newSelectedItems = selectedItems.filter((selectedItem) => {
      return selectedItem.id !== item.id
    })

    setSelectedItems(newSelectedItems)
  }

  return (
    <Container>
      <h5>Seleção de Chave PIX para recebimentos</h5>
      <form>
        <FinancialList
          direction="horizontal"
          icon={<KeyIcon />}
          items={items}
          onItemClick={(item) => setSelectedItems([...selectedItems, item])}
          onItemRemove={handleItemRemove}
        />
        <footer>
          <OutlineButton type="button" onClick={onCancel}>
            Cancelar
          </OutlineButton>
          <ButtonPrimary type="button" onClick={() => onSubmit(selectedItems)}>
            Salvar Alterações
          </ButtonPrimary>
        </footer>
      </form>
    </Container>
  )
}
