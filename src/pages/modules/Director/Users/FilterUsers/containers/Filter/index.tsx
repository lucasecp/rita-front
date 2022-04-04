import React, { useEffect, useMemo, useState } from 'react'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import InputText from '@/components/Form/InputText'
import CustomMultSelect, {
  MultiSelectOption,
} from '@/components/Form/MultSelect'
import { profilesFromApi, ProfilesFromApi } from './adapters/profilesFromApi'
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
      name: '',
      login: '',
      profiles: [],
      status: [],
    },
  )
  const [profilesOptions, setProfilesOptions] = useState<MultiSelectOption[]>(
    [],
  )

  useEffect(() => {
    const loadProfilesOptions = async () => {
      const response = await apiUser.get<ProfilesFromApi[]>('/perfil?tipo=1')

      const profilesMappedFromApi = profilesFromApi(response.data)

      setProfilesOptions(profilesMappedFromApi)
    }

    loadProfilesOptions()
  }, [])

  const onClearFields = () => {
    setFilters({
      name: '',
      login: '',
      profiles: [],
      status: [],
    })

    onGetFilters({
      name: undefined,
      login: undefined,
      profiles: [],
      status: [],
    })
  }

  const onFilterResults = () => {
    onGetFilters({
      name: filters.name,
      login: filters.login,
      profiles: filters.profiles,
      status: filters.status,
    })
  }

  const onChangeInput = (
    field: string,
    value: string | MultiSelectOption[],
  ) => {
    // @ts-ignore
    setFilters((prevState) => ({
      ...prevState,
      [field]: value,
    }))
  }

  const maskCPF = (value: string) => {
    const regexIsNumber = /^[0-9]+$/
    let fieldLoginIsCPF

    if (value.match(regexIsNumber)) {
      fieldLoginIsCPF = true
    } else {
      fieldLoginIsCPF = false
    }

    if (fieldLoginIsCPF) {
      const secondReplaced = value.replace(
        /^(\d{3})(\d{3})(\d{3})(\d{2})/g,
        '$1.$2.$3-$4',
      )

      return secondReplaced
    } else {
      return value.replaceAll('.', '').replaceAll('-', '')
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
        />
        <InputText
          variation="secondary"
          label="Login:"
          value={filters.login}
          setValue={(value) => onChangeInput('login', maskCPF(value))}
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
            { id: '', name: 'Todos' },
            { id: 'A', name: 'Ativo' },
            { id: 'I', name: 'Inativo' },
          ]}
          value={filters.status}
          setValue={(value) => onChangeInput('status', value)}
        />
      </div>

      <footer>
        <OutlineButton small variation="red" onClick={onClearFields}>
          Limpar Filtro
        </OutlineButton>
        <ButtonPrimary medium onClick={onFilterResults}>
          Filtrar Resultados
        </ButtonPrimary>
      </footer>
    </Container>
  )
}
