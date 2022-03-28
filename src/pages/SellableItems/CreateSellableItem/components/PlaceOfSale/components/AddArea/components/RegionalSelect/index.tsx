import React, { useEffect, useState } from 'react'

import { Select } from '@/components/Form/Select'
import { useLoading } from '@/hooks/useLoading'
import apiAdmin from '@/services/apiAdmin'
import { toast } from '@/styles/components/toastify'
import { PlaceOfSale } from '../../../..'
import { placeOfSaleToApi } from '../../../../../../adapters/toApi'
import { everyFirstLetterCapitalize } from '@/helpers/everyFirstLetterCapitalize'

interface RegionalSelectProps {
  idPlan: number
  onGetRegional: (regional: string | number) => void
  placeOfSale: PlaceOfSale[]
  clearRegional: number
}

export const RegionalSelect: React.FC<RegionalSelectProps> = ({
  idPlan,
  onGetRegional,
  placeOfSale,
  clearRegional,
}) => {
  const [regionalsOptions, setRegionalsOptions] = useState([])
  const [regional, setRegional] = useState<string | number>('')

  const { Loading } = useLoading()

  useEffect(() => {
    const loadRegionals = async () => {
      if (idPlan !== 0) {
        try {
          Loading.turnOn()

          const { data } = await apiAdmin.post(
            `/itens-vendaveis/regional?idPlano=${idPlan}`,
            placeOfSaleToApi(placeOfSale),
          )

          const regionalMapped = data?.map(
            (regionalFromApi: { nome: string; id: number }) => ({
              label: regionalFromApi.nome,
              value: regionalFromApi.id,
            }),
          )

          setRegionalsOptions(regionalMapped)
        } catch (error) {
          toast.error('Erro ao carregar regionais')
        } finally {
          Loading.turnOff()
        }
      }
    }

    loadRegionals()
  }, [idPlan, placeOfSale])

  useEffect(() => {
    onGetRegional(regional)
  }, [regional])

  useEffect(() => {
    if (clearRegional) {
      return setRegional('')
    }
  }, [clearRegional])
  return (
    <Select
      label="Regional:"
      labelDefaultOption="Selecione..."
      options={regionalsOptions}
      name="regional"
      setValue={setRegional}
      value={regional}
      disabled={idPlan === 0 || regionalsOptions.length === 0}
    />
  )
}
