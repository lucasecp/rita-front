import React, { useEffect, useState } from 'react'

import { Select } from '@/components/Form/Select'

import apiAdmin from '@/services/apiAdmin'
import { useLoading } from '@/hooks/useLoading'
import { PlaceOfSale } from '../../../..'
import { placeOfSaleToApi } from '../../../../../../adapters/toApi'
import { toast } from '@/styles/components/toastify'
import { everyFirstLetterCapitalize } from '@/helpers/everyFirstLetterCapitalize'

interface UfSelectProps {
  idPlan: number
  placeOfSale: PlaceOfSale[]
  regional: string | number
  onGetUf: (ufSelected: string) => void
  clearRegional: number
}

export const UfSelect: React.FC<UfSelectProps> = ({
  idPlan,
  placeOfSale,
  regional,
  onGetUf,
  clearRegional,
}) => {
  // const { showSimple } = useModal()
  const { Loading } = useLoading()

  const [ufsOptions, setUfsOptions] = useState([])
  const [uf, setUf] = useState('')

  useEffect(() => {
    if (idPlan) {
      const loadUfs = async () => {
        try {
          Loading.turnOn()

          const { data } = await apiAdmin.post(
            `/itens-vendaveis/uf?idPlano=${idPlan}&regional=${regional}`,
            placeOfSaleToApi(placeOfSale),
          )

          const UfsMapped = data?.map(
            (ufFromApi: { descricao: string; idUF: number }) => ({
              label: everyFirstLetterCapitalize(ufFromApi.descricao),
              value: ufFromApi.idUF,
            }),
          )

          setUfsOptions(UfsMapped)
        } catch (error) {
          toast.error('Erro ao carregar ufs')
        } finally {
          Loading.turnOff()
        }
      }
      loadUfs()
    }
  }, [idPlan, regional])

  useEffect(() => {
    setUf('')
  }, [clearRegional])

  useEffect(() => {
    onGetUf(uf)
  }, [uf])

  return (
    <Select
      label="UF:"
      labelDefaultOption="Selecione..."
      options={ufsOptions}
      name="uf"
      setValue={setUf}
      value={uf}
      disabled={idPlan === 0 || regional === 0}
    />
  )
}
