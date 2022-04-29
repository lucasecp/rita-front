import type { FinancialListItemModel } from '../FinancialListItem'
import React, { useState, useEffect } from 'react'

import apiWallet from '@/services/apiWallet'
import { ReactComponent as KeyIcon } from '@/assets/icons/key.svg'
import { Container } from './styles'
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import FinancialList from '@/pages/modules/operator/WalletSettings/components/FinancialList'

type PixKeyAvailableListProps = {
  selectedItems?: FinancialListItemModel[]
  onSubmit?: (selected: FinancialListItemModel[]) => void
  onCancel?: () => void
}

const PixKeyAvailableList: React.FC<PixKeyAvailableListProps> = ({
  selectedItems: selectedItemsFromProps = [],
  onSubmit,
  onCancel,
}) => {
  const [items, setItems] = useState<FinancialListItemModel[]>([])
  const [selectedItems, setSelectedItems] = useState<FinancialListItemModel[]>(
    selectedItemsFromProps,
  )

  useEffect(() => {
    async function fetchData() {
      const { data } = await apiWallet.get<RitaWallet.API.Get.UserPixKey>(
        '/user/pix-key',
        {
          params: {
            activeOnly: false,
          },
        },
      )

      if (data && Array.isArray(data)) {
        const loadedItems = []

        for (const row of data) {
          loadedItems.push({
            id: row.id,
            title: row.alias,
            data: [`Chave: ${row.key}`],
            active: selectedItems.some((selected) => selected.id === row.id),
          })
        }

        setItems(loadedItems)
      }
    }

    fetchData().catch(console.error)
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

  function handleItemSelect(item: FinancialListItemModel) {
    const itemFound = selectedItems.find((selected) => {
      return selected.id === item.id
    })

    if (!itemFound) {
      setSelectedItems([...selectedItems, { ...item, active: true }])
    }
  }

  function handleItemRemove(item: FinancialListItemModel) {
    const newSelectedItems = selectedItems.filter((selectedItem) => {
      return selectedItem.id !== item.id
    })

    setSelectedItems(newSelectedItems)
  }

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()

    onSubmit && onSubmit(selectedItems)
  }

  return (
    <Container onSubmit={handleSubmit} onReset={onCancel}>
      <FinancialList
        icon={<KeyIcon />}
        items={items}
        onItemClick={handleItemSelect}
        onItemRemove={handleItemRemove}
      />
      <footer>
        <OutlineButton type="reset">Cancelar</OutlineButton>
        <ButtonPrimary type="submit">Salvar Alterações</ButtonPrimary>
      </footer>
    </Container>
  )
}

export default PixKeyAvailableList
