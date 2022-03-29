import React, { useEffect, useState } from 'react'

import { Checkbox } from '@/components/Form/Checkbox'
import InputText from '@/components/Form/InputText'
import InputMask from '@/components/Form/InputMask'
import SelectUf from '@/components/smarts/SelectUf'
import SelectCity from '@/components/smarts/SelectCity'

import { DependentAddressType } from '../../types/index'

import { validateCep } from '@/helpers/validateFields/validateCep'
import { validateUf } from '@/helpers/validateFields/validateUf'
import { validateCity } from '@/helpers/validateFields/validateCity'
import { validateAddress } from '@/helpers/validateFields/validateAddress'
import { validateNumberHome } from '@/helpers/validateFields/validateNumberHome'
import { validateDistrict } from '@/helpers/validateFields/validateDistrict'

import { Container, InputsArea, FormAddress } from './styles'

interface ErrorsState {
  cep: string
  uf: string
  city: string
  addressDep: string
  number: string
  district: string
  complement: string
}

interface DependentAddressProps {
  onGetAnyFieldsHasChanged: React.Dispatch<React.SetStateAction<boolean>>
  setAddress: React.Dispatch<React.SetStateAction<DependentAddressType>>
  checkHasError: number
  onGetHasError: React.Dispatch<React.SetStateAction<boolean>>
}

export const DependentAddress: React.FC<DependentAddressProps> = ({
  onGetAnyFieldsHasChanged,
  setAddress,
  checkHasError,
  onGetHasError,
}) => {
  const [addressIsEqualHolder, setAddressIsEqualHolder] = useState(false)

  const [cep, setCep] = useState('')
  const [uf, setUf] = useState('')
  const [ufToApi, setUfToApi] = useState('')
  const [city, setCity] = useState('')
  const [addressDep, setAddressDep] = useState('')
  const [number, setNumber] = useState('')
  const [district, setDistrict] = useState('')
  const [complement, setComplement] = useState('')

  const [errors, setErrors] = useState({} as ErrorsState)

  const [changeTimes, setChangeTimes] = useState(0)
  const [changeTimesCheckbox, setChangeTimesCheckbox] = useState(0)

  useEffect(() => {
    if (changeTimesCheckbox > 0) {
      scrollTo(0, document.body.scrollHeight)
    }

    setChangeTimesCheckbox(changeTimesCheckbox + 1)

    if (addressIsEqualHolder) {
      setAddress({
        cep: '',
        uf: '',
        city: '',
        address: '',
        number: '',
        district: '',
        complement: '',
      })
      onGetHasError(false)
    }
  }, [addressIsEqualHolder])

  const verifyErrorsInFields = (canSetError = false) => {
    const errorsTemporary = {
      ...errors,
      cep: validateCep(cep),
      uf: validateUf(uf),
      city: validateCity(city),
      addressDep: validateAddress(addressDep),
      number: validateNumberHome(number),
      district: validateDistrict(district),
    }

    const hasErrors = Object.values(errorsTemporary).some((value) => value)

    if (canSetError) {
      setErrors(errorsTemporary)
    }

    if (!addressIsEqualHolder) {
      onGetHasError(hasErrors)
    }
  }

  useEffect(() => {
    if (changeTimes >= 3) {
      onGetAnyFieldsHasChanged(true)
    }

    setChangeTimes(changeTimes + 1)

    verifyErrorsInFields()

    setAddress({
      cep,
      uf,
      city,
      address: addressDep,
      number,
      district,
      complement,
    })
  }, [cep, uf, city, addressDep, number, district, complement])

  useEffect(() => {
    if (checkHasError) {
      verifyErrorsInFields(true)
    }
  }, [checkHasError])

  return (
    <Container>
      <h3>Endereço</h3>

      <InputsArea>
        <Checkbox
          checked={addressIsEqualHolder}
          label="Meu endereço é igual do meu titular"
          setValue={setAddressIsEqualHolder}
        />

        <FormAddress showFields={!addressIsEqualHolder}>
          <section>
            <InputMask
              label="CEP:"
              mask="99.999-999"
              value={cep}
              setValue={setCep}
              name="cep"
              hasError={!!errors.cep}
              msgError={errors.cep}
            />
            <SelectUf
              setUf={setUf}
              uf={uf}
              setUfToApi={setUfToApi}
              hasError={!!errors.uf}
              msgError={errors.uf}
            />
            <SelectCity
              setCity={setCity}
              uf={uf}
              city={city}
              hasError={!!errors.city}
              msgError={errors.city}
            />
          </section>
          <section>
            <InputText
              label="Endereço:"
              value={addressDep}
              setValue={setAddressDep}
              hasError={!!errors.addressDep}
              msgError={errors.addressDep}
            />
            <InputText
              label="Número:"
              value={number}
              setValue={setNumber}
              hasError={!!errors.number}
              msgError={errors.number}
              type="number"
            />
          </section>
          <section>
            <InputText
              label="Bairro:"
              value={district}
              setValue={setDistrict}
              hasError={!!errors.district}
              msgError={errors.district}
            />
            <InputText
              label="Complemento:"
              value={complement}
              setValue={setComplement}
            />
          </section>
        </FormAddress>
      </InputsArea>
    </Container>
  )
}
