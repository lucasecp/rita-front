import { Select } from '@/components/Form/Select'
import React, { useEffect, useState } from 'react'
import apiAdmin from '@/services/apiAdmin'

interface SelectUfProps {
  setUfProfissionaRegister: (value: string) => void
  ufProfissionaRegister: string
  disabled: boolean
  [x: string]: any
}

const SelectUf: React.FC<SelectUfProps> = ({
  setUfProfissionaRegister,
  ufProfissionaRegister,
  disabled,
  ...rest
}) => {
  const [ufOptions, setUfOptions] = useState<any[]>([])

  const mapUf = (array: any[]) => {
    if (!array) return []
    return array.map((obj) => ({ value: obj.sigla, label: obj.sigla }))
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
      (data) =>
        data.label === ufProfissionaRegister ||
        data.value === Number(ufProfissionaRegister),
    )

    if (!ufFromApi?.value) {
      return
    }

    setUfProfissionaRegister(ufFromApi.value)
  }, [ufProfissionaRegister, ufOptions])

  return (
    <Select
      options={ufOptions}
      label="UF de Órgão Emissor:"
      labelDefaultOption="Selecione"
      value={ufProfissionaRegister}
      setValue={setUfProfissionaRegister}
      disabled={disabled}
      name="ufProfissionaRegister"
      {...rest}
    />
  )
}

export default SelectUf
