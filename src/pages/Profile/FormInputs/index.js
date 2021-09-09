import React from 'react'
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import InputText from '@/components/Form/InputText'
import { Col, Row } from 'react-bootstrap'

const Profile = () => {
  return (
    <Row>
      <Col lg={6} className="mt-5 mb-4">
        <InputText placeholder="Text input" label="Label input" />
      </Col>
      <Col lg={6} className="mt-3 mt-lg-5 mb-4">
        <InputText placeholder="Text input" label="Label input" />
      </Col>
      <Col lg={6} className="mt-3 mt-lg-0 mb-4">
        <InputText placeholder="Text input" label="Label input" />
      </Col>
      <Col lg={6} className="mt-3 mt-lg-0">
        <InputText placeholder="Text input" label="Label input" />
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
  )
}

export default Profile
