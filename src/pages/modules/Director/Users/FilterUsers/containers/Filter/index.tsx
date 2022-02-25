import React, { useEffect, useMemo, useState } from 'react'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import InputText from '@/components/Form/InputText'
import CustomMultSelect, {
  MultiSelectOption,
} from '@/components/Form/MultSelect'
import { ProfilesFromApi } from './adapters/profilesFromApi'
import useLocalStorage from 'use-local-storage'

import { UsersFilters } from '../../@types'

import { Container } from './styles'
import apiUser from '@/services/apiUser'
interface FilterProps {
  onGetFilters: React.Dispatch<React.SetStateAction<UsersFilters>>
}

export const Filter: React.FC<FilterProps> = ({ onGetFilters }) => {
  const [filters, setFilters] = useLocalStorage<UsersFilters>(
    '@Rita/Users/Filters',
    {
      cpf: '',
      name: '',
      profiles: [],
      status: [],
    },
  )
  const [profilesOptions, setProfilesOptions] = useState<MultiSelectOption[]>(
    [],
  )

  useEffect(() => {
    const loadProfilesOptions = async () => {
      const response = await apiUser.get<ProfilesFromApi[]>('/perfil')

      const profilesMappedFromApi = response.data.map((profile) => {
        return {
          id: profile.id,
          name: profile.nome,
        }
      })

      setProfilesOptions(profilesMappedFromApi)
    }

    loadProfilesOptions()
  }, [])

  const hasNoFilterSelected = useMemo(() => {
    return (
      filters.name === '' &&
      filters.cpf === '' &&
      !filters.profiles.length &&
      !filters.status.length
    )
  }, [filters])

  const onClearFields = () => {
    setFilters({
      name: '',
      cpf: '',
      profiles: [],
      status: [],
    })

    onGetFilters({
      cpf: '',
      name: '',
      profiles: [],
      status: [],
    })
  }

  const onFilterResults = () => {
    onGetFilters({
      name: filters.name,
      cpf: filters.cpf,
      profiles: filters.profiles,
      status: filters.status,
    })
  }

  const onChangeInput = (field: string, value: any) => {
    switch (field) {
      case 'name':
        setFilters((prevState) => ({
          ...prevState,
          name: value,
        }))
        break
      case 'cpf':
        setFilters((prevState) => ({
          ...prevState,
          cpf: value,
        }))
        break
      case 'profiles':
        setFilters((prevState) => ({
          ...prevState,
          profiles: value,
        }))
        break
      case 'status':
        setFilters((prevState) => ({
          ...prevState,
          status: value,
        }))
        break
      default:
        break
    }
  }

  return (
    <Container>
      <div>
        <InputText
          variation="secondary"
          label="Nome:"
          value={filters.name}
          setValue={(value) => onChangeInput('name', value)}
          maxLength={10}
        />
        <InputText
          variation="secondary"
          label="CPF:"
          value={filters.cpf}
          setValue={(value) => onChangeInput('cpf', value)}
          maxLength={10}
        />
        <CustomMultSelect
          label="Perfis:"
          options={profilesOptions}
          value={filters.profiles}
          setValue={(value) => onChangeInput('profiles', value)}
        />
        <CustomMultSelect
          label="Status:"
          options={[
            { id: 1, name: 'Todos' },
            { id: 2, name: 'Ativo' },
            { id: 3, name: 'Inativo' },
          ]}
          value={filters.status}
          setValue={(value) => onChangeInput('status', value)}
        />
      </div>

      <footer>
        <OutlineButton
          small
          variation="red"
          onClick={onClearFields}
          disabled={hasNoFilterSelected}
        >
          Limpar Filtro
        </OutlineButton>
        <ButtonPrimary
          medium
          onClick={onFilterResults}
          disabled={hasNoFilterSelected}
        >
          Filtrar Resultados
        </ButtonPrimary>
      </footer>
    </Container>
  )
}
