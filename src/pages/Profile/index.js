import React, { useEffect } from 'react'
import DefaultLayout from '../../components/Layout/DefaultLayout'
import { Card, Box, TemplateBox } from './style'
import OutlineButton from '../../components/Button/Outline'
import ButtonPrimary from '../../components/Button/Primary'
import InputText from '../../components/Form/InputText'
import { Col, Row } from 'react-bootstrap'

import Background1 from '../../assets/img/element1.svg'
import Background2 from '../../assets/img/element2.svg'
import Background3 from '../../assets/img/element3.svg'

const Profile = () => {
  useEffect(() => {
    document.title = 'Perfil'
  }, [])

  return (
    <DefaultLayout>
      <TemplateBox>
        <Row>
          <Col xl={4} lg={6}>
            <Card variation="light-blue">
              <img src={Background1} />
              <h3>Exames</h3>
              <p>Você tem X exames aguardando resultado.</p>
              <OutlineButton variation="blue">label</OutlineButton>
            </Card>
          </Col>
          <Col xl={4} lg={6} className="mt-3 mt-lg-0">
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

        <Row>
          <Col lg={6} className="mt-5 mb-4">
            <InputText placeHolder="Text input" label="Label input" />
          </Col>
          <Col lg={6} className="mt-3 mt-lg-5 mb-4">
            <InputText placeHolder="Text input" label="Label input" />
          </Col>
          <Col lg={6} className="mt-3 mt-lg-0 mb-4">
            <InputText placeHolder="Text input" label="Label input" />
          </Col>
          <Col lg={6} className="mt-3 mt-lg-0">
            <InputText placeHolder="Text input" label="Label input" />
          </Col>
          <Col
            lg={6}
            className="d-flex justify-content-lg-end justify-content-center align-items-center mt-4 mt-lg-0"
          >
            <ButtonPrimary>Label main button</ButtonPrimary>
          </Col>
          <Col
            lg={6}
            className="d-flex justify-content-lg-start justify-content-center mt-3 mt-lg-0"
          >
            <OutlineButton>Label secondary button</OutlineButton>
          </Col>
        </Row>
      </TemplateBox>

      <TemplateBox transparent>
        <Row className='mt-3'>
          <Col xl={6}>
            <Box>
              <div></div>
              <div>
                <h2>Título qualquer</h2>
                <p>Alguma coisa importante aqui!</p>
              </div>
              <ButtonPrimary>Label main button</ButtonPrimary>
            </Box>
          </Col>
          <Col xl={6}>
            <Box>
              <div></div>
              <div>
              <h2>Título qualquer</h2>
              <p>Alguma coisa importante aqui!</p>
              </div>
              <OutlineButton>Label secondary </OutlineButton>
            </Box>
          </Col>
          <Col xl={6}>
            <Box>
              <div></div>
              <div>
                <h2>Título qualquer</h2>
                <p>Alguma coisa importante aqui!</p>
              </div>
              <OutlineButton>Label secondary </OutlineButton>
            </Box>
          </Col>
          <Col xl={6}>
            <Box>
              <div></div>
              <div>
                <h2>Título qualquer</h2>
                <p>Alguma coisa importante aqui!</p>
              </div>
              <ButtonPrimary>Label main button</ButtonPrimary>
            </Box>
          </Col>
        </Row>
      </TemplateBox>
    </DefaultLayout>
  )
}

export default Profile
