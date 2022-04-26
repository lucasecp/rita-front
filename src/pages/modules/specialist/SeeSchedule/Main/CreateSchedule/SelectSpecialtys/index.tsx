import { Select } from '@/components/Form/Select'
import React, { useEffect, useState } from 'react'
import apiAdmin from '@/services/apiAdmin'

interface SelectIssuingAgencyProps {
  specialyts: string
  setSpeciltys: (value: string) => void
  setSelectedObj?: (value: string) => void
  error?: string
  variation?: string
  [x: string]: any
}

const SelectSpecialtys: React.FC<SelectIssuingAgencyProps> = ({
  specialyts,
  setSpeciltys,
  setSelectedObj,
  error,
  variation,
  ...rest
}) => {
  const [specialtysOptions, setSpecialtysOptions] = useState<any[]>([])

  const mapSpecialtys = (array: any[]) => {
    if (!array) return []

    return array.map((obj) => ({
      value: obj.id,
      label: obj.descricao,
    }))
  }

  useEffect(() => {
    const getSpecialtys = async () => {
      try {
        const { data } = await apiAdmin.get(`/orgao-emissor`)
        const dataMapped = mapSpecialtys(data)

        setSpecialtysOptions(dataMapped)
      } catch (error) {}
    }

    getSpecialtys()
  }, [])

  useEffect(() => {
    if (!setSelectedObj) {
      return
    }

    const issuingAgencyOpt = specialtysOptions.find(
      (data) => data.label === specialyts || data.value === Number(specialyts),
    )

    if (!issuingAgencyOpt?.value || !issuingAgencyOpt?.label) {
      return
    }

    setSpeciltys(issuingAgencyOpt.value)

    setSelectedObj(issuingAgencyOpt)
  }, [specialyts, specialtysOptions])

  return (
    <Select
      options={specialtysOptions}
      label="Especialidade:"
      labelDefaultOption="Selecione:"
      value={specialyts}
      setValue={setSpeciltys}
      hasError={!!error}
      msgError={error}
      name="specialyts"
      variation={variation}
      {...rest}
    />
  )
}

export default SelectSpecialtys
