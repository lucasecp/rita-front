import React from 'react'

import { Container } from './styles'
import { AddArea } from './components/AddArea'

import { PlaceOfSaleList } from './components/PlaceOfSaleList'

export interface PlaceOfSale {
  regional: {
    label: string
    id: number
  }
  uf: {
    label: string
    id: number
  }

  cities: {
    id: number
    name: string
  }[]
  showCities: boolean
}

interface PlaceOfSaleProps {
  idPlan: number
  hasError: boolean
  placeOfSale: PlaceOfSale[]
  setPlaceOfSale: (placeOfSale: PlaceOfSale[]) => void
}

export const PlaceOfSaleComponent: React.FC<PlaceOfSaleProps> = ({
  idPlan,
  hasError,
  placeOfSale,
  setPlaceOfSale,
}) => {
  return (
    <Container
    // viewMode={viewMode}
    >
      <header>
        Local de Venda*: <span />
      </header>

      {/* {!viewMode && ( */}
      <>
        <AddArea
          idPlan={idPlan}
          placeOfSale={placeOfSale}
          onGetPlaceOfSale={setPlaceOfSale}
        />
        {hasError && (
          <small>
            Ao menos a seleção de um item da Abrangência de Utilização é
            obrigatório.
          </small>
        )}
      </>
      {/* )} */}
      <PlaceOfSaleList
        placeOfSale={placeOfSale}
        setPlaceOfSale={setPlaceOfSale}
      />
    </Container>
  )
}
