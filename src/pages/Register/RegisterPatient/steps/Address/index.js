import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import Select from '@/components/Form/Select'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Container, MsgError } from '../style'
import { UF } from './static'
const Address = ({ setBtn, setData }) => {
  const [cep, setCep] = useState('')
  const [uf, setUf] = useState('')
  const [city, setCity] = useState('')
  const [address, setAdress] = useState('')
  const [numberHome, setNumberHome] = useState('')
  const [district, setDistrict] = useState('')
  const [complement, setComplement] = useState('')
  const [errors, setErrors] = useState({})

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
        !hasErrors) {
        const dataObj = {
          district,
          uf,
          city,
          address,
          numberHome,
          cep,
          complement,
        }
        setBtn(true)
        setData({ cadastro: dataObj })
      }
      return () => {
        setBtn(false)
      }
    }, [errors])

  const validate = ({ target }) => {
    const value = target.value
    if (!value.trim()) {
      return setErrors({ ...errors, [target.name]: 'Campo Obrigatório.' })
    }
    else if(target.name === 'cep' && cep.length < 8){
      return setErrors({ ...errors, [target.name]: 'Cep Inválido.' })
    }
    return setErrors({ ...errors, [target.name]: '' })
  }
  return (
    <Container>
      <h1>Endereço</h1>
      <Row>
        <Col md="6">
          <InputMask
            label="CEP:"
            mask="#####-###"
            value={cep}
            setValue={setCep}
            name="cep"
            onBlur={validate}
            onKeyUp={validate}
            hasError={errors.cep}
          />
          {errors.cep && <MsgError>{errors.cep}</MsgError>}
        </Col>
        <Col md="6">
          <Select
            label="UF:"
            labeDefaultOption="selecione:"
            options={UF}
            setValue={setUf}
            value={uf}
            name="uf"
            onBlur={validate}
            onKeyUp={validate}
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
            onBlur={validate}
            onKeyUp={validate}
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
                onBlur={validate}
                onKeyUp={validate}
                hasError={errors.address}
              />
              {errors.address && <MsgError>{errors.address}</MsgError>}
            </Col>
            <Col md="4">
              <InputText
                label="Número:"
                value={numberHome}
                setValue={setNumberHome}
                type="number"
                name="numberHome"
                onBlur={validate}
                onKeyUp={validate}
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
            onBlur={validate}
            onKeyUp={validate}
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
            onBlur={validate}
            onKeyUp={validate}
            hasError={errors.complement}
          />
          {errors.complement && <MsgError>{errors.complement}</MsgError>}
        </Col>
      </Row>
    </Container>
  )
}

export default Address
