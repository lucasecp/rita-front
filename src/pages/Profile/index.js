import React, { useEffect } from 'react'
import DefaultLayout from '../../components/Layout/DefaultLayout'
import { Col, Row } from 'react-bootstrap'
import { Card, Box, ButtonGroup } from './style'
import Button from '../../components/Button/Outline'
import ButtonPrimary from '../../components/Button/Primary'
import InputText from '../../components/Form/InputText'

const Profile = () => {
  useEffect(() => {
    document.title = 'Perfil'
  }, [])

  return (
    <DefaultLayout>
      <Box>
        <Row>
          <Col>
            <Card variation="light-blue">
              <h3>Exames</h3>
              <p>Você tem X exames aguardando resultado.</p>
              <Button>Ver</Button>
            </Card>
          </Col>
          <Col>
            <Card variation="dark-blue">
              <h3>Consultas</h3>
              <p>Você não tem consultas agendadas neste momento.</p>
              <Button>Agendar</Button>
            </Card>
          </Col>
          <Col>
            <Card variation="red">
              <h3>Medicamentos</h3>
              <p>Você tem 2 receitas prescritas neste mês. Gostaria de ver?</p>
              <Button>Ver</Button>
            </Card>
          </Col>
        </Row>

        <Row className='mt-5'>
          <Col md={6}>
            <InputText placeHolder="Text input" label="Label input"/>
          </Col>
          <Col md={6}>
            <InputText placeHolder="Text input" label="Label input"/>
          </Col>
          <Col md={6}>
            <InputText placeHolder="Text input" label="Label input"/>
          </Col>
          <Col md={6}>
            <InputText placeHolder="Text input" label="Label input"/>
          </Col>
        </Row>
          <ButtonGroup>
            <ButtonPrimary>Label main button</ButtonPrimary>
            <Button>Label secondary button</Button>
          </ButtonGroup>
      </Box>
    </DefaultLayout>
  )
}

export default Profile
