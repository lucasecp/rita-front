import React from 'react'
import { Box, TemplateBox } from '../style'
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import { Col, Row } from 'react-bootstrap'

const Boxes = () => {
  return (
    <TemplateBox transparent>
      <Row className="mt-3">
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
  )
}

export default Boxes
