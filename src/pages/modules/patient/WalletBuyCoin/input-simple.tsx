import React, { useState, useEffect } from 'react'

import apiWallet from '@/services/apiWallet'
import formatPrice from '@/helpers/formatPrice'
import { useModal } from '@/hooks/useModal'
import { useLoading } from '@/hooks/useLoading'
import ButtonPrimary from '@/components/Button/Primary'

import { ReactComponent as CrownIcon } from '@/assets/icons/crown.svg'
import { MessageContainer, Values } from './styles'
import { WalletBuyCoinInputCustom } from './input-custom'
import { WalletBuyCoinSelectPayment } from './select-payment'

export const WalletBuyCoinInputSimple: React.FC = () => {
  const { showMessage } = useModal()
  const { Loading } = useLoading()
  const [walletBalance, setWalletBalance] = useState(0)
  const [selectedOption, setSelectedOption] = useState(0)
  const [hasError, setHasError] = useState(false)
  const crownAvailableValues = [50, 100, 500]

  function handleSelectPaymentOptionClick(option: number) {
    setSelectedOption(option)
    setHasError(false)
  }

  function handleCustomValueClick() {
    showMessage(WalletBuyCoinInputCustom, { walletBalance }, true)
  }

  function handleForwardClick() {
    if (selectedOption) {
      showMessage(WalletBuyCoinSelectPayment, {
        value: selectedOption
      }, true)
    } else {
      setHasError(true)
    }
  }

  useEffect(() => {
    async function fetchData() {
      const { data } = await apiWallet.get<RitaWallet.Wallet>('/wallet-balance')

      if (!data) {
        throw new Error('Resposta vazia')
      }

      setWalletBalance(data.crownBalance + data.cashbackBalance)
    }

    Loading.turnOn()
    fetchData().catch(console.error).finally(() => {
      Loading.turnOff()
    })
  }, [])

  return (
    <MessageContainer>
      <header>
        <h3>Quantas moedas deseja comprar?</h3>
        <p>
          O saldo atual na carteira é de{' '}
          <strong>
            {formatPrice(walletBalance)}{' '}
            <small>
              (
                <CrownIcon height="12" style={{ verticalAlign: 'text-top' }} />
                {walletBalance * 100}
              )
            </small>
          </strong>
        </p>
      </header>

      <Values>
        <div>
          {crownAvailableValues.map((value) => (
            <div
              className={selectedOption === value ? 'active' : ''}
              onClick={() => handleSelectPaymentOptionClick(value)}
            >
              <h4>{formatPrice(value)}</h4>
              <p>
                Equivalentes a{' '}
                <em>
                  <CrownIcon /> {value * 100}
                </em>
              </p>
            </div>
          ))}
        </div>

        <button type="button" onClick={handleCustomValueClick}>
          + Adicionar outro valor
        </button>

        {hasError && <p>Por favor, selecione um valor.</p>}
      </Values>

      <footer>
        <ButtonPrimary onClick={handleForwardClick}>
          Avançar
        </ButtonPrimary>
      </footer>
    </MessageContainer>
  )
}
