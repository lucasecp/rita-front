import React, { useState, useEffect } from 'react'

import onlyNumbers from '@/helpers/clear/onlyNumbers'
import formatPrice from '@/helpers/formatPrice'
import { useModal } from '@/hooks/useModal'
import InputMask from '@/components/Form/InputMask'
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { ReactComponent as CrownIcon } from '@/assets/icons/crown.svg'
import { MessageContainer, InputAndValues } from './styles'
import { WalletPatientBuyCoinInputSimple } from './input-simple'
import { WalletPatientBuyCoinSelectPayment } from './select-payment'

type WalletPatientBuyCoinInputCustomProps = {
  walletBalance: number
  initialValue?: number
}

function validateRequired(value?: string | null) {
  return [null, undefined, ''].includes(value) ? 'Campo obrigatório.' : ''
}

export const WalletPatientBuyCoinInputCustom: React.FC<
  WalletPatientBuyCoinInputCustomProps
> = ({ walletBalance, initialValue = 0 }) => {
  const { showMessage } = useModal()

  const [value, setValue] = useState(String(initialValue))
  const [crownValue, setCrownValue] = useState(0)
  const [errors, setErrors] = useState<{ value?: string }>({})

  useEffect(() => {
    const newCrownValue = value ? Number(onlyNumbers(value)) * 100 : 0
    setCrownValue(newCrownValue)
  }, [value])

  function handleAddValueClick(amount: number) {
    const newValue = Number(value) + amount
    setValue(String(newValue))
  }

  function handleBackClick() {
    showMessage(WalletPatientBuyCoinInputSimple, {}, true)
  }

  function handleForwardClick() {
    const newErrors = {
      value: validateRequired(value),
    }
    const hasErrors = Object.values(newErrors).some((value) => value !== '')

    setErrors(newErrors)

    if (!hasErrors) {
      showMessage(
        WalletPatientBuyCoinSelectPayment,
        {
          value: Number(value),
        },
        true,
      )
    }
  }

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
              {walletBalance * 100})
            </small>
          </strong>
        </p>
      </header>

      <section>
        <InputAndValues>
          <section>
            <InputMask
              value={value}
              setValue={setValue}
              name="value"
              useIMask={true}
              mask="R$ num\,\0\0"
              eager={true}
              blocks={{
                num: {
                  mask: Number,
                  thousandsSeparator: '',
                  scale: 0,
                  signed: false,
                  min: 1,
                  max: 99999,
                },
              }}
              hasError={Boolean(errors.value)}
              msgError={errors.value}
              onBlur={() =>
                setErrors({
                  ...errors,
                  value: validateRequired(value),
                })
              }
              onKeyUp={() =>
                setErrors({
                  ...errors,
                  value: validateRequired(value),
                })
              }
            />

            {crownValue > 0 && (
              <p>
                Equivalentes a{' '}
                <strong>
                  <CrownIcon /> {crownValue}
                </strong>
              </p>
            )}
          </section>

          <footer>
            <button type="button" onClick={() => handleAddValueClick(1)}>
              + R$ 1
            </button>
            <button type="button" onClick={() => handleAddValueClick(5)}>
              + R$ 5
            </button>
            <button type="button" onClick={() => handleAddValueClick(10)}>
              + R$ 10
            </button>
            <button type="button" onClick={() => handleAddValueClick(50)}>
              + R$ 50
            </button>
            <button type="button" onClick={() => handleAddValueClick(100)}>
              + R$ 100
            </button>
          </footer>
        </InputAndValues>
      </section>

      <footer>
        <OutlineButton onClick={handleBackClick}>Voltar</OutlineButton>
        <ButtonPrimary onClick={handleForwardClick}>Avançar</ButtonPrimary>
      </footer>
    </MessageContainer>
  )
}
