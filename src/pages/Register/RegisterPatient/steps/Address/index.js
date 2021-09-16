import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import Select from '@/components/Form/Select'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Container, MsgError } from '../style'
import { UF } from './static'
import {
  validateAddress,
  validateCep,
  validateCity,
  validateComplement,
  validateDistrict,
  validateNumberHome,
  validateUf,
} from '../../helpers/validator'
const Address = ({ setBtn, setData, dataClientSabin }) => {
  const [cep, setCep] = useState('')
  const [uf, setUf] = useState('')
  const [city, setCity] = useState('')
  const [address, setAdress] = useState('')
  const [numberHome, setNumberHome] = useState('')
  const [district, setDistrict] = useState('')
  const [complement, setComplement] = useState('')
  const [errors, setErrors] = useState({})
  useEffect(() => {
    const { endereco } = dataClientSabin
    if (!endereco) return
    setCep(endereco.cep || '')
    setUf(endereco.uf || '')
    setCity(endereco.cidade || '')
    setAdress(endereco.logradouro || '')
    setNumberHome(endereco.numero || '')
    setDistrict(endereco.bairro || '')
    setComplement(endereco.complemento || '')
  }, [dataClientSabin])
  useEffect(() => {
    const hasErrors = Object.values(errors).filter((err) => err).length
    if (
      district &&
      uf &&
      city &&
      address &&
      numberHome &&
      cep &&
      complement &&
      !hasErrors
    ) {
      const dataObj = {
        bairro: district,
        uf,
        cidade: city,
        logradouro: address,
        numero: numberHome,
        cep,
        complement0: complement,
      }
      setBtn(true)
      setData(data => {return {...data, endereco: dataObj }})
    }
    return () => {
      setBtn(false)
    }
  }, [errors, district, uf, city, address, numberHome, cep, complement])
  return (
    <Container>
      <h1>Endereço</h1>
      <Row>
        <Col md="6">
          <InputMask
            label="CEP:"
            mask="99.999-999"
            value={cep}
            setValue={setCep}
            name="cep"
            onBlur={() => setErrors({ ...errors, ...validateCep(cep) })}
            onKeyUp={() => setErrors({ ...errors, ...validateCep(cep) })}
            hasError={errors.cep}
          />
          {errors.cep && <MsgError>{errors.cep}</MsgError>}
        </Col>
        <Col md="6" className="mt-4 mt-md-0">
          <Select
            label="UF:"
            labeDefaultOption="selecione:"
            options={UF}
            setValue={setUf}
            value={uf}
            name="uf"
            onChange={(e) => {
              setUf(e.target.value)
              setErrors({ ...errors, ...validateUf(e.target.value) })
            }}
            hasError={errors.uf}
          />
          {errors.uf && <MsgError>{errors.uf}</MsgError>}
        </Col>
        <Col md="6" className="mt-4">
          <InputText
            label="Cidade:"
            value={city}
            setValue={setCity}
            name="city"
            onBlur={() => setErrors({ ...errors, ...validateCity(city) })}
            onKeyUp={() => setErrors({ ...errors, ...validateCity(city) })}
            hasError={errors.city}
          />
          {errors.city && <MsgError>{errors.city}</MsgError>}
        </Col>
        <Col md="6" className="mt-4">
          <Row>
            <Col md="8">
              <InputText
                label="Endereço:"
                value={address}
                setValue={setAdress}
                name="address"
                onBlur={() =>
                  setErrors({ ...errors, ...validateAddress(address) })
                }
                onKeyUp={() =>
                  setErrors({ ...errors, ...validateAddress(address) })
                }
                hasError={errors.address}
              />
              {errors.address && <MsgError>{errors.address}</MsgError>}
            </Col>
            <Col md="4" className="mt-4 mt-md-0">
              <InputText
                label="Número:"
                value={numberHome}
                setValue={setNumberHome}
                type="number"
                name="numberHome"
                onBlur={() =>
                  setErrors({ ...errors, ...validateNumberHome(numberHome) })
                }
                onKeyUp={() =>
                  setErrors({ ...errors, ...validateNumberHome(numberHome) })
                }
                hasError={errors.numberHome}
              />
              {errors.numberHome && <MsgError>{errors.numberHome}</MsgError>}
            </Col>
          </Row>
        </Col>
        <Col md="6" className="mt-4">
          <InputMask
            label="Bairro:"
            value={district}
            setValue={setDistrict}
            name="district"
            onBlur={() =>
              setErrors({ ...errors, ...validateDistrict(district) })
            }
            onKeyUp={() =>
              setErrors({ ...errors, ...validateDistrict(district) })
            }
            hasError={errors.district}
          />
          {errors.district && <MsgError>{errors.district}</MsgError>}
        </Col>
        <Col md="6" className="mt-4">
          <InputText
            label="Complemento:"
            value={complement}
            setValue={setComplement}
            name="complement"
            onBlur={() =>
              setErrors({ ...errors, ...validateComplement(complement) })
            }
            onKeyUp={() =>
              setErrors({ ...errors, ...validateComplement(complement) })
            }
            hasError={errors.complement}
          />
          {errors.complement && <MsgError>{errors.complement}</MsgError>}
        </Col>
      </Row>
    </Container>
  )
}

export default Address
