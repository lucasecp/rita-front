import React, { useEffect } from 'react'
import DefaultLayout from '../../components/Layout/DefaultLayout'
import { Card, BootstrapBox, ButtonGroup, Box } from './style'
import OutlineButton from '../../components/Button/Outline'
import ButtonPrimary from '../../components/Button/Primary'
import InputText from '../../components/Form/InputText'
import { Container, Col, Row } from 'react-bootstrap'
import ContainerBox from '../../components/Layout/Content/ContainerBox'

const Profile = () => {
  useEffect(() => {
    document.title = 'Perfil'
  }, [])

  return (
    <DefaultLayout>
      <BootstrapBox>
        <Container>
          <Row>
            <Col>
              <Card variation="light-blue">
                <h3>Exames</h3>
                <p>Você tem X exames aguardando resultado.</p>
                <OutlineButton variation='blue'>Ver</OutlineButton>
              </Card>
            </Col>
            <Col>
              <Card variation="dark-blue">
                <h3>Consultas</h3>
                <p>Você não tem consultas agendadas neste momento.</p>
                <OutlineButton variation='green'>Agendar</OutlineButton>
              </Card>
            </Col>
            <Col>
              <Card variation="red">
                <h3>Medicamentos</h3>
                <p>
                  Você tem 2 receitas prescritas neste mês. Gostaria de ver?
                </p>
                <OutlineButton variation='white'>Ver</OutlineButton>
              </Card>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={6}>
              <InputText placeHolder="Text input" label="Label input" />
            </Col>
            <Col md={6}>
              <InputText placeHolder="Text input" label="Label input" />
            </Col>
            <Col md={6}>
              <InputText placeHolder="Text input" label="Label input" />
            </Col>
            <Col md={6}>
              <InputText placeHolder="Text input" label="Label input" />
            </Col>
            <Col md={6} className='d-flex justify-content-end'>
            <ButtonPrimary>Label main button</ButtonPrimary>
            </Col>
            <Col md={6}>
            <OutlineButton>Label secondary button</OutlineButton>
            </Col>
          </Row>
          <ButtonGroup>

          </ButtonGroup>
        </Container>
      </BootstrapBox>

      <ContainerBox>
          <Col md={6}>
        <Box>
            <div></div>
            <div>
              <h2>Título qualquer</h2>
              <p>Alguma coisa importante aqui!</p>
              <ButtonPrimary>Label main button</ButtonPrimary>
            </div>
        </Box>
          </Col>
          <Col md={6}>
        <Box>
            <div></div>
            <div>
              <h2>Título qualquer</h2>
              <p>Alguma coisa importante aqui!</p>
              <OutlineButton>Label secondary button</OutlineButton>
            </div>
        </Box>
          </Col>
          <Col md={6}>
        <Box>
            <div></div>
            <div>
              <h2>Título qualquer</h2>
              <p>Alguma coisa importante aqui!</p>
              <OutlineButton>Label secondary button</OutlineButton>
            </div>
        </Box>
          </Col>
          <Col md={6}>
        <Box>
            <div></div>
            <div>
              <h2>Título qualquer</h2>
              <p>Alguma coisa importante aqui!</p>
              <ButtonPrimary>Label main button</ButtonPrimary>
            </div>
        </Box>
          </Col>
      </ContainerBox>
    </DefaultLayout>
  )
}

export default Profile
