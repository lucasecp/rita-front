import { Select } from '@/components/Form/Select'
import React, { useEffect, useState } from 'react'
import apiAdmin from '@/services/apiAdmin'

interface SelectUfProps {
  setUf: (value: string) => void
  setUfToApi: (value: string) => void
  uf: string
  disabled?: boolean
  [x: string]: any
}

const SelectUf: React.FC<SelectUfProps> = ({
  setUf,
  setUfToApi,
  uf,
  disabled,
  ...rest
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

  useEffect(() => {
    const ufFromApi = ufOptions.find(
      (data) => data.label === uf || data.value === Number(uf),
    )

    if (!ufFromApi?.value) {
      return
    }
    setUfToApi(ufFromApi.label)

    setUf(ufFromApi.value)
  }, [uf, ufOptions])

  return (
    <Select
      options={ufOptions}
      label="UF:"
      labelDefaultOption="Selecione"
      value={uf}
      setValue={setUf}
      disabled={disabled}
      {...rest}
    />
  )
}

export default SelectUf
