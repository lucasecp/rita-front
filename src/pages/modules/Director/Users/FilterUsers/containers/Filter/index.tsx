import React, { useState } from 'react'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import InputText from '@/components/Form/InputText'

import { SellableItemsFilters } from '../../@types'

import { Container } from './styles'

interface FilterProps {
  onGetFilters: React.Dispatch<React.SetStateAction<SellableItemsFilters>>
}

export const Filter: React.FC<FilterProps> = ({ onGetFilters }) => {
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [profile, setProfile] = useState('')
  const [status, setStatus] = useState('')

  return (
    <Container>
      <div>
        <InputText
          variation="secondary"
          label="Nome:"
          value={name}
          setValue={(value) => setName(value)}
          maxLength={10}
        />
        <InputText
          variation="secondary"
          label="CPF:"
          value={cpf}
          setValue={(value) => setCpf(value)}
          maxLength={10}
        />
        <InputText
          variation="secondary"
          label="Perfis:"
          value={profile}
          setValue={(value) => setProfile(value)}
          maxLength={10}
        />
        <InputText
          variation="secondary"
          label="Status:"
          value={status}
          setValue={(value) => setStatus(value)}
          maxLength={10}
        />
      </div>

      <footer>
        <OutlineButton small variation="red">
          Limpar Filtro
        </OutlineButton>
        <ButtonPrimary medium>Filtrar Resultados</ButtonPrimary>
      </footer>
    </Container>
  )
}
