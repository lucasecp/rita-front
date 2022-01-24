import { Select } from '@/components/Form/Select'
import React, { useEffect, useState } from 'react'
import apiPatient from '@/services/apiPatient'

interface SelectUfProps {
  setUf: (value: string) => void
  setUfToApi: (value: string) => void
  uf: string
  disabled: boolean
}

const SelectUf: React.FC<SelectUfProps> = ({
  setUf,
  setUfToApi,
  uf,
  disabled,
}) => {
  const [ufOptions, setUfOptions] = useState<any[]>([])

  const mapUf = (array: any[]) => {
    if (!array) return []
    return array.map((obj) => ({ value: obj.idUF, label: obj.sigla }))
  }

  useEffect(() => {
    const getUf = async () => {
      try {
        const { data } = await apiPatient.get(`/uf`)
        const dataMapped = mapUf(data)

        setUfOptions(dataMapped)
      } catch ({ response }) {}
    }

    getUf()
  }, [])

  useEffect(() => {
    const ufFromApi = ufOptions.find(
      (data) => data.label === uf || data.value === Number(uf),
    )

    if (!ufFromApi?.value) {
      return
    }
    setUfToApi(ufFromApi.label)

    setUf(ufFromApi.value)
  }, [uf])

  return (
    <Select
      options={ufOptions}
      label="UF:"
      labelDefaultOption="Selecione"
      value={uf}
      setValue={setUf}
      disabled={disabled}
    />
  )
}

export default SelectUf
