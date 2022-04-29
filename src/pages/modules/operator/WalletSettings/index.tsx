import type { FinancialListItemModel } from '@/pages/modules/operator/WalletSettings/components/FinancialListItem'
import React, { useState, useEffect } from 'react'

import apiWallet from '@/services/apiWallet'
import { ReactComponent as KeyIcon } from '@/assets/icons/key.svg'
import { ReactComponent as BankIcon } from '@/assets/icons/bank.svg'
import { Container } from './styles'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import FinancialList from '@/pages/modules/operator/WalletSettings/components/FinancialList'
import FinancialListItem from '@/pages/modules/operator/WalletSettings/components/FinancialListItem'
import PixKeySelectForm from '@/pages/modules/operator/WalletSettings/components/PixKeySelectForm'
import BankAccountForm from '@/pages/modules/operator/WalletSettings/components/BankAccountForm'

const WalletSettings: React.FC = () => {
  const [pixKeysActivatedItems, setPixKeysActivatedItems] = useState<
    FinancialListItemModel[]
  >([])
  const [bankAccountItems, setBankAccountItems] = useState<
    FinancialListItemModel[]
  >([])
  const [visibleFormId, setVisibleFormId] = useState<'none' | 'pix' | 'bank'>()

  async function fetchData() {
    const [{ data: dataPixKeys }, { data: dataBankAccounts }] =
      await Promise.all([
        apiWallet.get<RitaWallet.API.Get.UserPixKey>('/user/pix-key', {
          params: {
            activeOnly: true,
          },
        }),
        apiWallet.get<RitaWallet.API.Get.UserBankAccount>(
          '/user/bank-account',
          {
            params: {
              activeOnly: true,
            },
          },
        ),
      ])

    if (dataPixKeys && Array.isArray(dataPixKeys)) {
      const loadedItems: FinancialListItemModel[] = []

      for (const row of dataPixKeys) {
        loadedItems.push({
          id: row.id,
          title: row.alias,
          data: [`Chave: ${row.key}`],
          active: true,
        })
      }

      setPixKeysActivatedItems(loadedItems)
    }

    if (dataBankAccounts && Array.isArray(dataBankAccounts)) {
      const loadedItems: FinancialListItemModel[] = []

      for (const row of dataBankAccounts) {
        loadedItems.push({
          id: row.id,
          title: row.bank.name.toUpperCase(),
          data: [`Agência: ${row.agencyNumber}`, `Conta: ${row.accountNumber}`],
          active: true,
        })
      }

      setBankAccountItems(loadedItems)
    }
  }

  async function handlePixKeyActivatedRemove(
    itemRemoved: FinancialListItemModel,
  ) {
    await apiWallet.delete(`/user/pix-key/${itemRemoved.id}`)

    const newItems = pixKeysActivatedItems.filter((item) => {
      return item.id !== itemRemoved.id
    })

    setPixKeysActivatedItems(newItems)
  }

  async function handleBankAccountRemove(itemRemoved: FinancialListItemModel) {
    await apiWallet.delete(`/user/bank-account/${itemRemoved.id}`)

    fetchData().catch(console.error)
  }

  async function handlePixKeySelectFormSubmit(items: FinancialListItemModel[]) {
    await apiWallet.post('/user/pix-key', {
      ids: items.map((item) => item.id),
    })

    setVisibleFormId('none')
    fetchData().catch(console.error)
  }

  async function handleBankAccountFormSubmit(item: FinancialListItemModel) {
    await apiWallet.post('/user/bank-account', {
      bankName: item.bankName,
      agency: item.agency,
      number: item.number,
    })

    setVisibleFormId('none')
    fetchData().catch(console.error)
  }

  useEffect(() => {
    fetchData().catch(console.error)
  }, [])

  return (
    <DefaultLayout title="Carteira Digital">
      <Container>
        {pixKeysActivatedItems.length === 0 && bankAccountItems.length === 0 ? (
          <section className="empty">
            <p>
              Você ainda não tem uma forma de recebimento cadastrada.
              <a href="#form">Cadastre abaixo.</a>
            </p>
          </section>
        ) : (
          <section className="activated">
            <h3>Seus métodos de recebimento</h3>
            <div>
              {pixKeysActivatedItems.length > 0 && (
                <section>
                  <h4>PIX</h4>
                  <FinancialList
                    icon={<KeyIcon />}
                    items={pixKeysActivatedItems}
                    onItemRemove={handlePixKeyActivatedRemove}
                  />
                </section>
              )}
              {bankAccountItems.length > 0 && (
                <section>
                  <h4>Conta Corrente</h4>
                  <FinancialList
                    icon={<BankIcon />}
                    items={bankAccountItems}
                    onItemRemove={handleBankAccountRemove}
                  />
                </section>
              )}
            </div>
          </section>
        )}

        <section id="form" className="configure">
          <h3>Configurar Recebimento</h3>
          <p>
            Selecione uma chave PIX ou cadastre uma conta bancária para realizar
            recebimentos.
          </p>

          <section className="triggers">
            <FinancialListItem
              icon={<KeyIcon />}
              title="Selecionar Chave PIX para recebimentos"
              onClick={() => setVisibleFormId('pix')}
            />
            <FinancialListItem
              icon={<BankIcon />}
              title="Cadastrar Conta Bancária para recebimentos"
              onClick={() => setVisibleFormId('bank')}
            />
          </section>

          <section className="content">
            {visibleFormId === 'pix' && (
              <PixKeySelectForm
                selectedItems={pixKeysActivatedItems}
                onSubmit={handlePixKeySelectFormSubmit}
                onCancel={() => setVisibleFormId('none')}
              />
            )}
            {visibleFormId === 'bank' && (
              <BankAccountForm
                onSubmit={handleBankAccountFormSubmit}
                onCancel={() => setVisibleFormId('none')}
              />
            )}
          </section>
        </section>
      </Container>
    </DefaultLayout>
  )
}

export default WalletSettings
