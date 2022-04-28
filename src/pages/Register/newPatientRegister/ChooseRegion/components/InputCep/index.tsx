import React, { useEffect, useState } from 'react'

import clearSpecialCharacters from '@/helpers/clearSpecialCharacters'
import { toast } from '@/styles/components/toastify'
import InputMask from '@/components/Form/InputMask'

import { Container } from './styles'

import apiAdmin from '@/services/apiAdmin'
import { addressFromApi } from './adapters/fromApi'
import { RegionState } from '../..'

interface InputCepProps {
  onGetRegion: (region: RegionState) => void
}

const InputCep: React.FC<InputCepProps> = ({ onGetRegion }) => {
  const [cep, setCep] = useState('')

  useEffect(() => {
    const cepCleared = clearSpecialCharacters(cep)

    const loadCep = async () => {
      try {
        const { data } = await apiAdmin.get(`/cep/${cepCleared}`)

        if (data.error === '1') {
          toast.error('Cep não encontrado!')

          // onGetRegion({} as RegionState)

          return
        }

        const addressMapped = addressFromApi(data)

        onGetRegion({
          city: addressMapped.city,
          uf: addressMapped.uf,
        })
      } catch (error) {
        // onGetRegion({} as RegionState)

        toast.error('Error ao carregar endereço!')
      }
    }

    if (cepCleared.length === 8) {
      loadCep()
    }
  }, [cep])

  return (
    <Container>
      <InputMask
        label="CEP:"
        mask="99.999-999"
        value={cep}
        setValue={setCep}
        name="cep"
        placeholder="00.000-000"
        data-test="cep"
      />
    </Container>
  )
}
export default InputCep
