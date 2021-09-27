import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import Select from '@/components/Form/Select'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'

import { Container } from '../style'
import { UF } from './static'

const Address = ({ setButtonPass, setData, dataClientSabin, newData }) => {
  const [cep, setCep] = useState('')
  const [uf, setUf] = useState('')
  const [city, setCity] = useState('')
  const [address, setAdress] = useState('')
  const [numberHome, setNumberHome] = useState('')
  const [district, setDistrict] = useState('')
  const [complement, setComplement] = useState('')

  useEffect(() => {
    // if (newDataAddress) {
    //   setCep(newDataAddress.cep)
    //   setUf(newDataAddress.uf)
    //   setCity(newDataAddress.cidade)
    //   setAdress(newDataAddress.logradouro)
    //   setNumberHome(newDataAddress.numero)
    //   setDistrict(newDataAddress.bairro)
    //   setComplement(newDataAddress.complemento)
    //   return
    // }

    const addressFromSabinCard = dataClientSabin.endereco
    const newDataAddress = newData.endereco

    setCep(newDataAddress?.cep || addressFromSabinCard?.cep || '')
    setUf(newDataAddress?.uf || addressFromSabinCard?.uf || '')
    setCity(newDataAddress?.cidade || addressFromSabinCard?.cidade || '')
    setAdress(
      newDataAddress?.logradouro || addressFromSabinCard?.logradouro || ''
    )
    setNumberHome(newDataAddress?.numero || addressFromSabinCard?.numero || '')
    setDistrict(newDataAddress?.bairro || addressFromSabinCard?.bairro || '')
    setComplement(
      newDataAddress?.complemento || addressFromSabinCard?.complemento || ''
    )
  }, [])

  useEffect(() => {
    const dataObj = {
      bairro: district,
      uf,
      cidade: city,
      logradouro: address,
      numero: numberHome,
      cep,
      complemento: complement,
    }
    setButtonPass(true)
    setData((data) => {
      return { ...data, endereco: dataObj }
    })
    return () => {
      setButtonPass(false)
    }
  }, [address, cep, numberHome, city, complement, uf, district])
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
          />
        </Col>
        <Col md="6" className="mt-4 mt-md-0">
          <Select
            label="UF:"
            labelDefaultOption="selecione:"
            options={UF}
            setValue={setUf}
            value={uf}
            name="uf"
          />
        </Col>
        <Col md="6" className="mt-4">
          <InputText
            label="Cidade:"
            value={city}
            setValue={setCity}
            name="city"
          />
        </Col>
        <Col md="6" className="mt-4">
          <Row>
            <Col md="8">
              <InputText
                label="Endereço:"
                value={address}
                setValue={setAdress}
                name="address"
              />
            </Col>
            <Col md="4" className="mt-4 mt-md-0">
              <InputText
                label="Número:"
                value={numberHome}
                setValue={setNumberHome}
                type="number"
                name="numberHome"
              />
            </Col>
          </Row>
        </Col>
        <Col md="6" className="mt-4">
          <InputMask
            label="Bairro:"
            value={district}
            setValue={setDistrict}
            name="district"
          />
        </Col>
        <Col md="6" className="mt-4">
          <InputText
            label="Complemento:"
            value={complement}
            setValue={setComplement}
            name="complement"
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Address