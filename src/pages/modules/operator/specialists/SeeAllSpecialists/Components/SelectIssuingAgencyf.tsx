import { Select } from '@/components/Form/Select'
import React, { useEffect, useState } from 'react'
import apiAdmin from '@/services/apiAdmin'

interface SelectIssuingAgencyProps {
  issuingAgency: string
  setIssuingAgency: (value: string) => void
}

const SelectIssuingAgency: React.FC<SelectIssuingAgencyProps> = ({
  issuingAgency,
  setIssuingAgency,
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
    const getUf = async () => {
      try {
        const { data } = await apiAdmin.get(`/orgao-emissor`)
        const dataMapped = mapIssuingAgency(data)

        setIssuingAgencyOptions(dataMapped)
      } catch (error) {}
    }

    getUf()
  }, [])

  return (
    <Select
      options={issuingAgencyOptions}
      label="Órgão Emissor:"
      labelDefaultOption="Selecione:"
      variation="secondary"
      value={issuingAgency}
      setValue={setIssuingAgency}
    />
  )
}

export default SelectIssuingAgency
