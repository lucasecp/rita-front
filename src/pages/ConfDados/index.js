import React from 'react'
import { Col, Form } from 'react-bootstrap'
import logoRitaVertical from '../../assets/logo/vertical-named-logo.svg'
import OutlineButton from '../../components/Button/Outline'
import ButtonPrimary from '../../components/Button/Primary'
import InputText from '../../components/Form/InputText'
import Footer from '../../components/Layout/DefaultLayout/Footer'
import { Container, Content } from './styles'
import React from 'react'
import { Button } from '@material-ui/core'

function ConfDados() {
  return (
    <Container>
      <aside>
        <img src={logoRitaVertical} />
      </aside>
      <main>
        <Content>
          <div xl={4} lg={6}>
            <h6>
              Para continuarmos, precisamos confirmar alguns dados. Reconhece
              esse celular?
            </h6>
            <Form xl={4} lg={6}>
              {['radio'].map((type) => (
                <div key={`default-${type}`}>
                  <Form.Check
                    type={'radio'}
                    id={`default-${type}`}
                    label={`radio : ${type}`}
                  />
                </div>
              ))}
            </Form>

            <InputText mask="(##)#####-####" placeholder="(00) 00000-0000" />
            <Col
              lg={6}
              className="d-flex justify-content-lg-end justify-content-center align-items-center mt-4 mt-lg-0"
            >
              <ButtonPrimary xl={4} lg={6} className="mx-3">
                Encaminhar
              </ButtonPrimary>
            </Col>
            <Col
              lg={6}
              className="d-flex justify-content-lg-end justify-content-center align-items-center mt-2 mt-lg-0"
            >
              <OutlineButton>Não reconheço esses dados</OutlineButton>
            </Col>
          </div>
          <Footer />
        </Content>
      </main>
    </Container>
  )
}

export default ConfDados
