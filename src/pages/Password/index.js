import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import InputPassword from '@/components/Form/InputPassword'
import RegisterLayout from '@/components/Layout/RegisterLayout'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

import { Content, Button } from './style'

function Password() {
  return (
      <RegisterLayout>
        <Content >
          <h6>Preencha os campos abaixo para redefinir sua senha.</h6>
          <p>
            A senha deve conter letras, números e caracteres <br />
            especiais. Mínimo 6 dígitos.
          </p>
          <Row>
            <Col md={6}>
              <InputPassword

                label="Digite sua nova senha*:"
              />
            </Col>
            <Col className="mt-4 mt-md-0" md={6}>
              <InputPassword  label="Confirme sua nova senha*" />
            </Col>
          </Row>
          <Button>
            <OutlineButton>Voltar</OutlineButton>
            <ButtonPrimary>Confirmar</ButtonPrimary>
          </Button>
        </Content>
      </RegisterLayout>
  )
}
export default Password
