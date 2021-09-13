import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import Select from '@/components/Form/Select'
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Container } from '../style'

const Adress = () => {
  const [cep, setCep] = useState('')
  const [uf, setUf] = useState('')
  const [city, setCity] = useState('')
  const [adress, setAdress] = useState('')
  const [numberHome, setNumberHome] = useState('')
  const [neighboor, setNeighboor] = useState('')
  const [complement, setComplement] = useState('')

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
          />
        </Col>
        <Col md="6">
          <Select
            label="UF:"
            labeDefaultOption="selecione:"
            options={['jnjn', 'sdsd']}
            setValue={setUf}
            value={uf}
          />
        </Col>
        <Col md="6" className="mt-4">
          <InputText label="Cidade:" value={city} setValue={setCity} />
        </Col>
        <Col md="6" className="mt-4">
          <Row>
            <Col md="8" >
              <InputText
                label="Endereço:"
                value={adress}
                setValue={setAdress}
              />
            </Col>
            <Col md="4">
              <InputText
                label="Número:"
                value={numberHome}
                setValue={setNumberHome}
                type='number'
              />
            </Col>
          </Row>
        </Col>
        <Col md="6" className="mt-4">
          <InputMask
            label="Bairro:"
            value={neighboor}
            setValue={setNeighboor}
          />
        </Col>
        <Col md="6" className="mt-4">
          <InputText
            label="Complemento:"
            value={complement}
            setValue={setComplement}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Adress
