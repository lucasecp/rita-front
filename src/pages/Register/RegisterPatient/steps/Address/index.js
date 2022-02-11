import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import { Select } from '@/components/Form/Select'
import React, { useEffect, useState } from 'react'

import { Container } from './styles'
import { UF } from './static'
import { validateCep } from '../shared/helpers/validator'
import { useRegisterPatient } from '../../hooks'
import ButtonLink from '@/components/Button/Link'
import ButtonPrimary from '@/components/Button/Primary'

export const Address = ({ isActive }) => {
  const { initialRegisterData, setAddress, previousStep, nextStep } =
    useRegisterPatient()

  const [cep, setCep] = useState('')
  const [uf, setUf] = useState('')
  const [city, setCity] = useState('')
  const [address, setAdress] = useState('')
  const [numberHome, setNumberHome] = useState('')
  const [district, setDistrict] = useState('')
  const [complement, setComplement] = useState('')
  const [errors, setErrors] = useState({})

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
    setAddress({ district, uf, city, address, numberHome, cep, complement })
  }, [address, cep, numberHome, city, complement, uf, district])

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
            onBlur={() => setErrors({ ...errors, ...validateCep(cep) })}
            onKeyUp={() => setErrors({ ...errors, ...validateCep(cep) })}
            msgError={errors.cep}
            hasError={errors.cep}
          />
          <Select
            label="UF:"
            labelDefaultOption="Selecione:"
            options={UF}
            setValue={setUf}
            value={uf}
            name="uf"
          />
          <InputText
            label="Cidade:"
            value={city}
            setValue={setCity}
            name="city"
            maxLength={100}
          />
          <section>
            <InputText
              label="Endereço:"
              value={address}
              setValue={setAdress}
              name="address"
              maxLength={100}
            />
            <InputText
              label="Número:"
              value={numberHome}
              setValue={setNumberHome}
              name="numberHome"
              maxLength="50"
            />
          </section>
          <InputMask
            label="Bairro:"
            value={district}
            setValue={setDistrict}
            name="district"
            maxLength={100}
          />
          <InputText
            label="Complemento:"
            value={complement}
            setValue={setComplement}
            name="complement"
            maxLength={100}
          />
        </section>
      </div>

      <footer>
        <ButtonLink onClick={previousStep}>Etapa Anterior</ButtonLink>
        <ButtonPrimary onClick={onNextStep}>Próxima Etapa</ButtonPrimary>
      </footer>
    </Container>
  )
}
