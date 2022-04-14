import React, { useState, useEffect } from 'react'

import apiWallet from '@/services/apiWallet'
import formatPrice from '@/helpers/formatPrice'

import { Select } from '@/components/Form/Select'
import { Container } from './styles'

function formatConsumptionType(type: string): string {
  return (
    {
      EXAM: 'Exames',
      APPOINTMENT: 'Consultas',
    }[type] || type
  )
}

export const Consumption: React.FC = () => {
  const periodOptions = [
    {
      label: 'Última semana',
      value: 1,
    },
    {
      label: 'Último mês',
      value: 2,
    },
    {
      label: 'Último ano',
      value: 3,
    },
  ]
  const [items, setItems] = useState<RitaWallet.API.Get.PaymentConsumption['transactions']>([])
  const [itemsTotalDiscountAmount, setItemsTotalDiscountAmount] = useState(0)
  const [itemsTotalSavedAmount, setItemsTotalSavedAmount] = useState(0)
  const [selectedPeriod, setSelectedPeriod] = useState(2)

  useEffect(() => {
    async function fetchData() {
      const { data } = await apiWallet.get<RitaWallet.API.Get.PaymentConsumption>(
        '/payment/consumption',
      )

      if (!data || !data.transactions || !Array.isArray(data.transactions)) {
        throw new Error('Resposta vazia ou inválida')
      }

      setItems(data.transactions)
      setItemsTotalDiscountAmount(
        data.transactions.reduce((carry, current) => {
          return carry + current.discountPriceAmount
        }, 0)
      )
      setItemsTotalSavedAmount(data.totalSavedAmount)
    }

    fetchData().catch(console.error)
  }, [])

  useEffect(() => {
    // console.log('selectedPeriod', selectedPeriod)
    // @TODO: api.get consumo
  }, [selectedPeriod])

  return (
    <Container>
      <h2>Consumo</h2>
      <div>
        <Select
          variation="highlight"
          options={periodOptions}
          value={selectedPeriod}
          setValue={setSelectedPeriod}
        />
      </div>

      <section>
        {items.map((item, index) => {
          return (
            <div key={index}>
              <strong>{formatPrice(item.discountPriceAmount)}</strong>
              <span>{formatConsumptionType(item.type)}</span>

              <div>
                <div
                  style={{
                    width: `${
                      (item.discountPriceAmount * 100) / itemsTotalDiscountAmount
                    }%`,
                  }}
                ></div>
              </div>
            </div>
          )
        })}
      </section>

      <p>
        Parabéns! Você já economizou{' '}
        <strong>{formatPrice(itemsTotalSavedAmount)}</strong> utilizando o Rita
        Saúde.
      </p>
    </Container>
  )
}
