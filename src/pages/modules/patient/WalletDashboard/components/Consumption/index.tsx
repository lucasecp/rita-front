import React, { useState, useEffect } from 'react'

import { Container } from './styles'
import { Select } from '@/components/Form/Select'

import formatPrice from '@/helpers/formatPrice'

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
  const [items, setItems] = useState<any[]>([])
  const [selectedPeriod, setSelectedPeriod] = useState(2)

  useEffect(() => {
    // @TODO: api.get consumo
    const loadedItems = [
      {
        value: 352,
        text: 'Consultas',
        percent: 30,
      },
      {
        value: 532,
        text: 'Exames',
        percent: 50,
      },
      {
        value: 235,
        text: 'Vacinas',
        percent: 10,
      },
      {
        value: 145,
        text: 'Remédios',
        percent: 5,
      },
    ]

    setItems(loadedItems)
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
              <strong>{formatPrice(item.value)}</strong>
              <span>{item.text}</span>

              <div>
                <div style={{ width: `${item.percent}%` }}></div>
              </div>
            </div>
          )
        })}
      </section>
    </Container>
  )
}
