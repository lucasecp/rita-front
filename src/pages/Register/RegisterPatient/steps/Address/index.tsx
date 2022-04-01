import React, { ChangeEvent, useEffect, useState } from 'react'
import axios from 'axios'
import QueryString from 'qs'

import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import SelectUf from '@/components/smarts/SelectUf'
import SelectCity from '@/components/smarts/SelectCity'
import ButtonLink from '@/components/Button/Link'
import ButtonPrimary from '@/components/Button/Primary'

import { Container } from './styles'
import { useRegisterPatient } from '../../hooks'
import { validateCep } from '../shared/helpers/validator'
import clearSpecialCaracter from '@/helpers/clear/SpecialCaracteres'
import { addressFromApi } from './adapters/fromApi'
import { toast } from '@/styles/components/toastify'
import { Select, SelectOption } from '@/components/Form/Select'
import apiAdmin from '@/services/apiAdmin'

interface AddressProps {
  isActive: boolean
}

export const Address: React.FC<AddressProps> = ({ isActive }) => {
  const { initialRegisterData, setAddress, previousStep, nextStep } =
    useRegisterPatient()

  const [cep, setCep] = useState('')
  const [uf, setUf] = useState('')
  const [ufToApi, setUfToApi] = useState('')

  const [city, setCity] = useState('')
  const [citiesOptions, setCitiesOptions] = useState([] as SelectOption[])

  const [address, setAdress] = useState('')
  const [numberHome, setNumberHome] = useState('')
  const [district, setDistrict] = useState('')
  const [complement, setComplement] = useState('')

  const [errors, setErrors] = useState({} as { cep: string })

  const [addressLoaded, setAddressLoaded] = useState(false)

  useEffect(() => {
    setCep(initialRegisterData?.address?.cep || '')
    setUf(initialRegisterData?.address?.uf || '')
    setCity(initialRegisterData?.address?.city || '')
    setAdress(initialRegisterData?.address?.address || '')
    setNumberHome(initialRegisterData?.address?.numberHome || '')
    setDistrict(initialRegisterData?.address?.district || '')
    setComplement(initialRegisterData?.address?.complement || '')
  }, [initialRegisterData])

  useEffect(() => {
    setAddress({
      district,
      uf: ufToApi,
      city,
      address,
      numberHome,
      cep,
      complement,
    })
  }, [address, cep, numberHome, city, complement, uf, district])

  useEffect(() => {
    const loadCities = async () => {
      console.log(uf)
      if (typeof uf === 'number' && !addressLoaded) {
        try {
          const { data } = await apiAdmin.get(`/municipio?idUF=${uf}`)

          const citiesMapped = data.map((city: { descricao: string }) => ({
            label: city.descricao,
            value: city.descricao,
          }))

          setCitiesOptions(citiesMapped)
        } catch (error) {
          console.log(error)
        }
      }
    }

    loadCities()
  }, [uf])

  const onCepChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const cepValue = event.target.value

    setErrors({ ...errors, ...validateCep(cepValue) })

    setCep(cepValue)

    const cepCleared = clearSpecialCaracter(cepValue)

    if (cepCleared.length === 8) {
      try {
        const responseToken = await axios.post(
          '/oauth2/token',
          QueryString.stringify({
            grant_type: 'client_credentials',
            scope: 'customer_info_nv1',
            client_id: process.env.REACT_APP_CEP_ID,
            client_secret: process.env.REACT_APP_CEP_SECRET,
          }),
          {
            baseURL: process.env.REACT_APP_CEP_OAUTH2_HOST || '',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          },
        )

        const token = responseToken.data.access_token

        const { data } = await axios.get(`/resource/v1/cep/${cepCleared}`, {
          baseURL: process.env.REACT_APP_CEP_HOST,
          headers: {
            Authorization: `Bearer ${token}`,
            // 'Content-Type': 'application/json',
          },
        })

        if (data.error) {
          return toast.error('Error ao carregar endereço')
        }

        const addressMapped = addressFromApi(data)
        setAdress(`${addressMapped.type} ${addressMapped.address}`)
        setDistrict(addressMapped.district)
        setCity(addressMapped.city)
        setUf(addressMapped.uf)

        // disabled fields
        setAddressLoaded(true)
      } catch (error) {
        setAddressLoaded(false)
        console.log(error)
      }

      // API DA VIACEP
      // try {
      //   const { data } = await axios.get(
      //     `https://viacep.com.br/ws/${cepCleared}/json`,
      //   )
      //   if (data.erro) {
      //     console.log(data.erro)
      //     return toast.error('Error ao carregar endereço')
      //   }
      //   const addressMapped = addressFromApi(data)
      //   setAdress(addressMapped.address)
      //   setDistrict(addressMapped.district)
      //   setCity(addressMapped.city)
      //   setUf(addressMapped.uf)
      //   setAddressLoaded(true)
      // } catch (error) {
      //   setAddressLoaded(false)
      //   toast.error('Error ao carregar endereço')
      //   console.log(error)
      // }
    }
  }

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
            onChange={onCepChange}
            name="cep"
            onBlur={() => setErrors({ ...errors, ...validateCep(cep) })}
            onKeyUp={() => setErrors({ ...errors, ...validateCep(cep) })}
            msgError={errors.cep}
            hasError={!!errors.cep}
          />
          <SelectUf
            setUf={setUf}
            uf={uf}
            setUfToApi={setUfToApi}
            disabled={addressLoaded}
          />

          <Select
            options={citiesOptions}
            label="Cidade:"
            labelDefaultOption="Selecione:"
            value={city}
            setValue={setCity}
            // disabled={addressLoaded}
          />

          <InputText
            label="Endereço:"
            value={address}
            setValue={setAdress}
            name="address"
            maxLength={100}
            disabled={addressLoaded}
          />
          <InputText
            label="Número:"
            value={numberHome}
            setValue={setNumberHome}
            name="numberHome"
            maxLength={20}
          />
        </section>
        <div>
          <InputText
            label="Complemento:"
            value={complement}
            setValue={setComplement}
            name="complement"
            maxLength={50}
          />
          <InputText
            label="Bairro:"
            value={district}
            setValue={setDistrict}
            name="district"
            maxLength={100}
            disabled={addressLoaded}
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
