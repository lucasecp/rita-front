import React from 'react'

import {
  Button,
  Card,
  Col,
  Container,
  FormControl,
  InputGroup,
  Nav,
  Row,
} from 'react-bootstrap'

function Teste() {
  return (
    <Container>
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Sobre</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Menu</Nav.Link>
        </Nav.Item>
        <Nav.Item></Nav.Item>
      </Nav>
      <Row className="justify-content-md-center m-4">
        <Col xs lg="2">
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src="https://png.pngtree.com/png-clipart/20190629/original/pngtree-solar-elements-in-orange-character-expressions-illustration-png-image_4070185.jpg"
            />
            <Card.Body>
              <Card.Title>Oi meninos</Card.Title>
              <Button variant="warning">Warning</Button>{' '}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <>
        <InputGroup className="mb-3"></InputGroup>
        <InputGroup
          style={{
            width: '15rem',
            height: '3rem',
          }}
        >
          <FormControl aria-label="" />
        </InputGroup>
      </>
    </Container>
  )
}

export default Teste
