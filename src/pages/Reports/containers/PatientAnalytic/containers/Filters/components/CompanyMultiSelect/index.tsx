import React, { useEffect, useMemo, useState } from 'react'

import { toast } from '@/styles/components/toastify'
import { fromApiCompanies } from './adapters/fromApiCompanies'

import { Container } from './styles'

import {
  Autocomplete,
  AutocompleteOptions,
} from '@/components/Form/Autocomplete'

import clearSpecialCaracter from '@/helpers/clear/SpecialCaracteres'
import { useAuth } from '@/hooks/login'
import { permissions } from '@/constants/permissions'
import apiAdmin from '@/services/apiAdmin'
import apiUser from '@/services/apiUser'

interface CompanyMultiSelectProps {
  onGetCompany: (company: AutocompleteOptions) => void
  companyError: string | undefined
}

export const CompanyMultiSelect: React.FC<CompanyMultiSelectProps> = ({
  onGetCompany,
  companyError,
}) => {
  const { user } = useAuth()

  const [company, setCompany] = useState({} as AutocompleteOptions)

  const [companiesOptions, setCompaniesOptions] = useState(
    [] as AutocompleteOptions[],
  )

  useEffect(() => {
    const loadCompanies = async () => {
      const hasPermissionToSeeAllCompanies = user.permissoes.find(
        (permission: string) => permission === permissions.LISTAR_EMPRESAS,
      )

      const api = hasPermissionToSeeAllCompanies ? apiAdmin : apiUser

      if (company.label?.length > 0) {
        try {
          const { data } = await api.get('/empresa', {
            params: {
              busca: company.label,
            },
          })

          const companyOptions = fromApiCompanies(data)

          setCompaniesOptions(companyOptions)
        } catch (error) {
          console.log(error)
          toast.error('Erro ao carregar empresas')
        }
      }

      if (company.label?.length === 0) {
        try {
          const { data } = await api.get('/empresa')

          const companyOptions = fromApiCompanies(data)

          setCompaniesOptions(companyOptions)
        } catch (error) {
          console.log(error)
          toast.error('Erro ao carregar empresas')
        }
      }
    }

    loadCompanies()

    onGetCompany(company)
  }, [company])

  const isCnpj = useMemo(() => {
    if (clearSpecialCaracter(company.label).match(/^[0-9]+$/)) {
      return true
    } else {
      if (!company.label?.includes(' - ')) {
        setCompany({ label: clearSpecialCaracter(company.label), value: 0 })
        return false
      }
    }
  }, [company.label])

  return (
    <Container>
      <Autocomplete
        mask={isCnpj ? '**.***.***/****-**' : ''}
        label="CNPJ/Razão Social: "
        placeholder="00.000.000/0000-00"
        value={company}
        setValue={setCompany}
        options={companiesOptions}
        setOptions={setCompaniesOptions}
        error={companyError || ''}
        hasError={!!companyError}
        variation="secondary"
      />
    </Container>
  )
}
