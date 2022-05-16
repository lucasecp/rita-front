import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'

import { Container } from './styles'
import { toast } from '@/styles/components/toastify'

import clearSpecialCharacters from '@/helpers/clearSpecialCharacters'
import { addressFromApi } from './adapters/fromApi'
import { validateCep } from './helpers/validateCep'
import apiAdmin from '@/services/apiAdmin'
import { PHYSICAL_PERSON_REGISTER_DOCUMENTS } from '@/routes/constants/namedRoutes/routes'
import { usePhysicalPersonRegister } from '../../../shared/hooks'

interface FieldsAddressProps {
  saveAddress: number
}

interface AddressLoadedByCepState {
  address?: string
  district?: string
  city?: string
  uf?: string
}

export const FieldsAddress: React.FC<FieldsAddressProps> = ({
  saveAddress,
}) => {
  const { address } = usePhysicalPersonRegister()
  const history = useHistory()

  const [cep, setCep] = useState('')
  const [uf, setUf] = useState('')
  const [city, setCity] = useState('')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [complement, setComplement] = useState('')
  const [district, setDistrict] = useState('')

  const [errors, setErrors] = useState({} as { cep: string })

  const [addressLoadedByCep, setAddressLoadedByCep] = useState(
    {} as AddressLoadedByCepState,
  )

  useEffect(() => {
    setCep(address.get.cep)
    setUf(address.get.uf)
    setCity(address.get.city)
    setStreet(address.get.street)
    setNumber(address.get.number)
    setComplement(address.get.complement)
    setDistrict(address.get.district)
  }, [])

  useEffect(() => {
    const loadCep = async () => {
      const cepCleared = clearSpecialCharacters(cep)

      if (cepCleared.length === 8) {
        try {
          const { data } = await apiAdmin.get(`/cep/${cepCleared}`)

          if (data.error === '1') {
            toast.error('Cep não encontrado!')

            setStreet('')
            setDistrict('')
            setCity('')
            setUf('')
            return
          }

          const addressMapped = addressFromApi(data)

          const addressComplete = addressMapped.address
            ? `${addressMapped.type} ${addressMapped.address}`
            : ''

          setAddressLoadedByCep({ ...addressMapped, address: addressComplete })

          setStreet(addressComplete)
          setDistrict(addressMapped.district)
          setCity(addressMapped.city)
          setUf(addressMapped.uf)
        } catch (error) {
          toast.error('Error ao carregar endereço!')
        }
      }
    }

    loadCep()
  }, [cep])

  useEffect(() => {
    if (saveAddress) {
      const hasErrors = Object.values(errors).some((value) => value !== '')

      if (hasErrors) {
        return
      }

      address.set({
        cep,
        uf,
        city,
        street,
        number,
        complement,
        district,
      })

      history.push(PHYSICAL_PERSON_REGISTER_DOCUMENTS)
    }
  }, [saveAddress])

  return (
    <Container>
      <h1>Endereço</h1>
      <section>
        <InputMask
          label="CEP:"
          mask="99.999-999"
          value={cep}
          setValue={setCep}
          name="cep"
          onBlur={() => setErrors({ ...errors, cep: validateCep(cep) })}
          onKeyUp={() => setErrors({ ...errors, cep: validateCep(cep) })}
          msgError={errors.cep}
          hasError={!!errors.cep}
        />
        <InputText label="UF:" value={uf} disabled />
        <InputText label="Cidade:" value={city} disabled />
        <InputText
          label="Endereço:"
          value={street}
          setValue={setStreet}
          name="address"
          maxLength={100}
          disabled={
            !Object.values(addressLoadedByCep).some((value) => value) ||
            !!addressLoadedByCep.address
          }
          noSpecialCaracter
        />
        <InputText
          label="Número:"
          value={number}
          setValue={setNumber}
          name="number"
          maxLength={20}
          noSpecialCaracter
        />
      </section>
      <div>
        <InputText
          label="Complemento:"
          value={complement}
          setValue={setComplement}
          name="complement"
          maxLength={50}
          noSpecialCaracter
        />
        <InputText
          label="Bairro:"
          value={district}
          setValue={setDistrict}
          name="district"
          maxLength={100}
          disabled={
            !Object.values(addressLoadedByCep).some((value) => value) ||
            !!addressLoadedByCep.district
          }
          noSpecialCaracter
        />
      </div>
    </Container>
  )
}
