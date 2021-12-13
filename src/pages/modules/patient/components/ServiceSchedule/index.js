import React from 'react'
import { Container } from './styles'

const ServiceSchedule = () => {
  return (
    <Container>
      <header>
        <h5>Agenda de atendimento</h5>
        <ul>
          <li>Segunda</li>
          <li>Terça</li>
          <li>Quarta</li>
          <li>Quinta</li>
          <li>Sexta</li>
        </ul>
      </header>
      <ul>
        <li>09:00 às 11:00</li>
        <li>09:00 às 11:00</li>
        <li>09:00 às 11:00</li>
        <li>09:00 às 11:00</li>
        <li>09:00 às 11:00</li>
      </ul>
      <ul>
        <li>13:00 às 17:00</li>
        <li>13:00 às 17:00</li>
        <li>13:00 às 17:00</li>
        <li>13:00 às 17:00</li>
        <li>13:00 às 17:00</li>
      </ul>
    </Container>
  )
}
export default ServiceSchedule
