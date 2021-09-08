import React from 'react'
import { Card } from '../style'
import OutlineButton from '@/components/Button/Outline'

import { Col, Row } from 'react-bootstrap'

import Background1 from '@/assets/img/element1.svg'
import Background2 from '@/assets/img/element2.svg'
import Background3 from '@/assets/img/element3.svg'

const Cards = () => {
  return (

        <Row>
          <Col md={6} xl={4}>
            <Card variation="light-blue">
              <img src={Background1} />
              <h3>Exames</h3>
              <p>Você tem X exames aguardando resultado.</p>
              <OutlineButton variation="blue">label</OutlineButton>
            </Card>
          </Col>
          <Col md={6} xl={4} className="mt-3 mt-md-0">
            <Card variation="dark-blue">
              <img src={Background2} />
              <h3>Consultas</h3>
              <p>Você não tem consultas agendadas neste momento.</p>
              <OutlineButton variation="green">label</OutlineButton>
            </Card>
          </Col>
          <Col xl={4} className="mt-3 mt-xl-0">
            <Card variation="red">
              <img src={Background3} />
              <h3>Medicamentos</h3>
              <p>Você tem 2 receitas prescritas neste mês. Gostaria de ver?</p>
              <OutlineButton variation="white">label</OutlineButton>
            </Card>
          </Col>
        </Row>
  )
}

export default Cards
