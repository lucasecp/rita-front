import React, { useEffect } from 'react'
import DefaultLayout from '../../components/Layout/DefaultLayout'
import { Card, Box, InputGroup } from './style'
import OutlineButton from '../../components/Button/Outline'
import ButtonPrimary from '../../components/Button/Primary'
import InputText from '../../components/Form/InputText'
import { Col } from 'react-bootstrap'
import ContainerBox from '../../components/Layout/Content/ContainerBox'


import Background1 from '../../assets/img/element1.svg'
import  Background2 from '../../assets/img/element2.svg'
import Background3 from '../../assets/img/element3.svg'


const Profile = () => {
  useEffect(() => {
    document.title = 'Perfil'
  }, [])

  return (
    <DefaultLayout>
      <ContainerBox wide>
        <Col>
          <Card variation="light-blue">
          <img src={Background1} />
            <h3>Exames</h3>
            <p>Você tem X exames aguardando resultado.</p>
            <OutlineButton variation="blue">label</OutlineButton>
          </Card>
        </Col>
        <Col>
          <Card variation="dark-blue">
          <img src={Background2} />
            <h3>Consultas</h3>
            <p>Você não tem consultas agendadas neste momento.</p>
            <OutlineButton variation="green">label</OutlineButton>
          </Card>
        </Col>
        <Col>
          <Card variation="red">
          <img src={Background3} />
            <h3>Medicamentos</h3>
            <p>Você tem 2 receitas prescritas neste mês. Gostaria de ver?</p>
            <OutlineButton variation="white">label</OutlineButton>
          </Card>
        </Col>

          <InputGroup>
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
          <Col md={6} className="d-flex justify-content-end">
            <ButtonPrimary>Label main button</ButtonPrimary>
          </Col>
          <Col md={6}>
            <OutlineButton>Label secondary button</OutlineButton>
          </Col>
          </InputGroup>

      </ContainerBox>

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
