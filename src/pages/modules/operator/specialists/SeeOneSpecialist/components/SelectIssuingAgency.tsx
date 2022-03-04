import { Select } from '@/components/Form/Select'
import React, { useEffect, useState } from 'react'
import apiAdmin from '@/services/apiAdmin'

interface SelectIssuingAgencyProps {
  issuingAgency: string
  setIssuingAgency: (value: string) => void
  error?: string
}

const SelectIssuingAgency: React.FC<SelectIssuingAgencyProps> = ({
  issuingAgency,
  setIssuingAgency,
  error
}) => {

  const [issuingAgencyOptions, setIssuingAgencyOptions] = useState<any[]>([])

  const mapIssuingAgency = (array: any[]) => {
    if (!array) return []
    return array.map((obj) => ({
      value: obj.idOrgaoEmissor,
      label: obj.descricao,
    }))
  }

  useEffect(() => {
    const getIssuingAgency = async () => {
      try {
        const { data } = await apiAdmin.get(`/orgao-emissor`)
        const dataMapped = mapIssuingAgency(data)

        setIssuingAgencyOptions(dataMapped)
      } catch (error) {}
    }

    getIssuingAgency()
  }, [])

  return (
    <Select
      options={issuingAgencyOptions}
      label="Órgão Emissor:"
      labelDefaultOption="Selecione:"
      value={issuingAgency}
      setValue={setIssuingAgency}
      hasError={!!error}
      msgError={error}
      name="issuingAgency"
    />
  )
}

export default SelectIssuingAgency
