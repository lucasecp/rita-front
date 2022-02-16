import { Select } from '@/components/Form/Select'
import React, { useEffect, useState } from 'react'
import apiAdmin from '@/services/apiAdmin'

interface SelectIssuingAgencyProps {
  setUf: (value: string) => void
  uf: string
}

const SelectIssuingAgency: React.FC<SelectIssuingAgencyProps> = ({
  setUf,
  uf,
}) => {
  const [ufOptions, setUfOptions] = useState<any[]>([])

  const mapUf = (array: any[]) => {
    if (!array) return []
    return array.map((obj) => ({ value: obj.idUF, label: obj.sigla }))
  }

  useEffect(() => {
    const getUf = async () => {
      try {
        const { data } = await apiAdmin.get(`/uf`)
        const dataMapped = mapUf(data)

        setUfOptions(dataMapped)
      } catch ({ response }) {}
    }

    getUf()
  }, [])

  return (
    <Select
      options={[{ label: 'CRM', value: 'CRM'}]}
      label="Órgão Emissor:"
      labelDefaultOption="Selecione:"
      variation="secondary"
      value={uf}
      setValue={setUf}
    />
  )
}

export default SelectIssuingAgency
