import React, { useEffect, useState } from 'react'

import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import ButtonLink from '@/components/Button/Link'
import ButtonPrimary from '@/components/Button/Primary'

import { Container } from './styles'
import { useRegisterPatient } from '../../hooks'
import { validateCep } from './helpers/validateCep'
import { toast } from '@/styles/components/toastify'

import clearSpecialCharacters from '@/helpers/clearSpecialCharacters'
import apiAdmin from '@/services/apiAdmin'
import { addressFromApi } from './adapters/fromApi'

interface AddressProps {
  isActive: boolean
}

export const Address: React.FC<AddressProps> = ({ isActive }) => {
  const { initialRegisterData, onGetAddress, previousStep, nextStep } =
    useRegisterPatient()

  const [cep, setCep] = useState('')
  const [uf, setUf] = useState('')

  const [city, setCity] = useState('')

  const [address, setAddress] = useState('')
  const [numberHome, setNumberHome] = useState('')
  const [district, setDistrict] = useState('')
  const [complement, setComplement] = useState('')

  const [errors, setErrors] = useState({} as { cep: string })

  const [addressLoaded, setAddressLoaded] = useState(false)

  useEffect(() => {
    setCep(initialRegisterData?.address?.cep || '')
    setUf(initialRegisterData?.address?.uf || '')
    setCity(initialRegisterData?.address?.city || '')
    setAddress(initialRegisterData?.address?.address || '')
    setNumberHome(initialRegisterData?.address?.numberHome || '')
    setDistrict(initialRegisterData?.address?.district || '')
    setComplement(initialRegisterData?.address?.complement || '')
  }, [initialRegisterData])

  useEffect(() => {
    onGetAddress({
      district,
      uf,
      city,
      address,
      numberHome,
      cep,
      complement,
    })
  }, [address, cep, numberHome, city, complement, uf, district])

  useEffect(() => {
    const loadCep = async () => {
      const cepCleared = clearSpecialCharacters(cep)

      if (cepCleared.length === 8) {
        try {
          const { data } = await apiAdmin.get(`/cep/${cepCleared}`)

          if (data.error === '1') {
            setAddressLoaded(false)
            toast.error('Cep não encontrado!')

            setAddress('')
            setDistrict('')
            setCity('')
            setUf('')
            return
          }

          const addressMapped = addressFromApi(data)

          const addressComplete = addressMapped.address
            ? `${addressMapped.type} ${addressMapped.address}`
            : ''

          setAddress(addressComplete)
          setDistrict(addressMapped.district)
          setCity(addressMapped.city)
          setUf(addressMapped.uf)

          setAddressLoaded(true)
        } catch (error) {
          toast.error('Error ao carregar endereço!')
        }
      }
    }

    loadCep()
  }, [cep])

  const onNextStep = () => {
    const hasErrors = Object.values(errors).some((value) => value !== '')

    if (!hasErrors) {
      nextStep()
    }
  }

  return (
    <Container active={isActive}>
      <div>
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
            value={address}
            setValue={setAddress}
            name="address"
            maxLength={100}
            disabled={!addressLoaded || !!address}
            noSpecialCaracter
          />
          <InputText
            label="Número:"
            value={numberHome}
            setValue={setNumberHome}
            name="numberHome"
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
            disabled={!addressLoaded || !!district}
            noSpecialCaracter
          />
        </div>
      </div>
      <footer>
        <ButtonLink onClick={previousStep}>Etapa Anterior</ButtonLink>
        <ButtonPrimary onClick={onNextStep}>Próxima Etapa</ButtonPrimary>
      </footer>
    </Container>
  )
}
