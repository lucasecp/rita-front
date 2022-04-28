import { Select } from '@/components/Form/Select'
import React, { useEffect, useState } from 'react'
import apiAdmin from '@/services/apiAdmin'

interface SelectIssuingAgencyProps {
  issuingAgency: string
  setIssuingAgency: (value: string) => void
  setIssuingAgencyToApi?: (value: string) => void
  error?: string
  variation?: string
  [x: string]: any
}

const SelectIssuingAgency: React.FC<SelectIssuingAgencyProps> = ({
  issuingAgency,
  setIssuingAgency,
  setIssuingAgencyToApi,
  error,
  variation,
  ...rest
}) => {
  const [issuingAgencyOptions, setIssuingAgencyOptions] = useState<any[]>([])
  const [labelLoading, setLabelLoading] = useState('Selecione:')

  const mapIssuingAgency = (array: any[]) => {
    if (!array) return []

    return array.map((obj) => ({
      value: obj.id,
      label: obj.descricao,
    }))
  }

  useEffect(() => {
    const getIssuingAgency = async () => {
      try {
        setLabelLoading('Carregando...')

        const { data } = await apiAdmin.get(`/orgao-emissor`)
        const dataMapped = mapIssuingAgency(data)
        setIssuingAgencyOptions(dataMapped)
      } catch (error) {}
      finally{setLabelLoading('Selecione:')}
    }
     

    getIssuingAgency()
  }, [])
 

  useEffect(() => {
    if (!setIssuingAgencyToApi) {
      return
    }

    const issuingAgencyOpt = issuingAgencyOptions.find(
      (data) =>
        data.label === issuingAgency || data.value === Number(issuingAgency),
    )

    if (!issuingAgencyOpt?.value || !issuingAgencyOpt?.label) {
      return
    }

    setIssuingAgency(issuingAgencyOpt.value)

    setIssuingAgencyToApi(issuingAgencyOpt.label)
  }, [issuingAgency, issuingAgencyOptions])

  return (
    <Select
      options={issuingAgencyOptions}
      label="Órgão Emissor:"
      labelDefaultOption={labelLoading}
      value={issuingAgency}
      setValue={setIssuingAgency}
      hasError={!!error}
      msgError={error}
      name="issuingAgency"
      variation={variation}
      {...rest}
    />
  )
}

export default SelectIssuingAgency
