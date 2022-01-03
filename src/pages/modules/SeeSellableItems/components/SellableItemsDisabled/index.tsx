import { useState } from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import { RangeOfUse } from '@/components/RangeOfUse'
import CustomMultSelect from '@/components/Form/MultSelect'

import { FormItem } from './FormItem'

import { Container, ArrowLeft } from './styles'

export const SellableItemsDisabled: React.FC = () => {
  const [services, setServices] = useState([])
  const [rangesOfUse, setRangesOfUse] = useState([])

  const isDirector = false

  return (
    <>
      <Container>
        <header>
          <ArrowLeft />
          <p>Voltar à Filtragem</p>
        </header>
        <main>
          <p>
            Plano Base <span />
          </p>

          <FormItem label="Código - Nome:" value="PPR - Plano Vida +50" />
          <FormItem label="Status" value="Ativo" />
          <FormItem
            label="Descrição"
            value="Plano Vida especialmente configurado para pessoas com mais de 50
              anos da região Centro Oeste"
          />

          <CustomMultSelect
            disabled
            label="Serviços*:"
            variation="secondary"
            value={services}
            setValue={setServices}
            hasError={false}
            messageError=""
            options={[]}
          />

          <p>
            Local de Venda <span />
          </p>

          <RangeOfUse rangesOfUse={rangesOfUse} viewMode />
        </main>
        {isDirector && (
          <ButtonPrimary onClick={() => console.log('Editar')}>
            Editar
          </ButtonPrimary>
        )}
      </Container>
    </>
  )
}
