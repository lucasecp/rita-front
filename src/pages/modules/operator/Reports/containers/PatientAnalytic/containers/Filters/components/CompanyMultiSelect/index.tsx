import React, { useEffect, useMemo, useState } from 'react'

import { toast } from '@/styles/components/toastify'
import { fromApiCompanies } from './adapters/fromApiCompanies'

import { Container } from './styles'

import {
  Autocomplete,
  AutocompleteOptions,
} from '@/components/Form/Autocomplete'
import apiAdmin from '@/services/apiAdmin'
import clearSpecialCaracter from '@/helpers/clear/SpecialCaracteres'

interface CompanyMultiSelectProps {
  onGetCompany: (company: AutocompleteOptions) => void
  companyError: string | undefined
}

const CompanyMultiSelect: React.FC<CompanyMultiSelectProps> = ({
  onGetCompany,
  companyError,
}) => {
  const [company, setCompany] = useState({} as AutocompleteOptions)

  const [companiesOptions, setCompaniesOptions] = useState(
    [] as AutocompleteOptions[],
  )

  useEffect(() => {
    const loadCompanies = async () => {
      if (company.label?.length > 0) {
        try {
          const response = await apiAdmin.get('/empresa', {
            params: {
              busca: company.label,
            },
          })

          const companyOptions = fromApiCompanies(response.data.dados)
          setCompaniesOptions(companyOptions)
        } catch (error) {
          toast.error('Erro ao carregar empresas')
        }
      }

      if (company.label?.length === 0) {
        try {
          const response = await apiAdmin.get('/empresa')
          const companyOptions = fromApiCompanies(response.data.dados)
          setCompaniesOptions(companyOptions)
        } catch (error) {
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
        mask={isCnpj ? '***.***.***/** **-**' : ''}
        label="CNPJ/Razão Social: "
        placeholder="000.000.000/0000-00"
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
export default CompanyMultiSelect
