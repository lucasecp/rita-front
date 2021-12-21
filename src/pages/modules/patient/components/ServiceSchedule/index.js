import React from 'react'
import { Container } from './styles'

const ServiceSchedule = ({ dataSchedule = [] }) => {
  const hasDayInSchedule = (day) => {
    return dataSchedule.some(
      (schedule) => schedule[day] && schedule[day].length
    )
  }

  return dataSchedule.length ? (
      <Container>
        <header>
          <h5>Agenda de atendimento</h5>
        </header>
        <div>
          {hasDayInSchedule('monday') && (
            <ul>
              <h6>Segunda</h6>
              {dataSchedule.map((schedule) =>
                schedule.monday.reduce((ac, day) => {
                  ac = `${day.start} às ${day.end}`
                  return <li>{ac}</li>
                }, '')
              )}
            </ul>
          )}
          {hasDayInSchedule('tuesday') && (
            <ul>
              <h6>Terça</h6>
              {dataSchedule.map((schedule) =>
                schedule.tuesday.reduce((ac, day) => {
                  ac = `${day.start} às ${day.end}`
                  return <li>{ac}</li>
                }, '')
              )}
            </ul>
          )}
          {hasDayInSchedule('wednesday') && (
            <ul>
              <h6>Quarta</h6>
              {dataSchedule.map((schedule) =>
                schedule.wednesday.reduce((ac, day) => {
                  ac = `${day.start} às ${day.end}`
                  return <li>{ac}</li>
                }, '')
              )}
            </ul>
          )}
          {hasDayInSchedule('thursday') && (
            <ul>
              <h6>Quinta</h6>
              {dataSchedule.map((schedule) =>
                schedule.thursday.reduce((ac, day) => {
                  ac = `${day.start} às ${day.end}`
                  return <li>{ac}</li>
                }, '')
              )}
            </ul>
          )}
          {hasDayInSchedule('friday') && (
            <ul>
              <h6>Sexta</h6>
              {dataSchedule.map((schedule) =>
                schedule.friday.reduce((ac, day) => {
                  ac = `${day.start} às ${day.end}`
                  return <li>{ac}</li>
                }, '')
              )}
            </ul>
          )}
          {hasDayInSchedule('saturday') && (
            <ul>
              <h6>Sábado</h6>
              {dataSchedule.map((schedule) =>
                schedule.saturday.reduce((ac, day) => {
                  ac = `${day.start} às ${day.end}`
                  return <li>{ac}</li>
                }, '')
              )}
            </ul>
          )}
          {hasDayInSchedule('sunday') && (
            <ul>
              <h6>Domingo</h6>
              {dataSchedule.map((schedule) =>
                schedule.sunday.reduce((ac, day) => {
                  ac = `${day.start} às ${day.end}`
                  return <li>{ac}</li>
                }, '')
              )}
            </ul>
          )}
        </div>
      </Container>
    ) : null
}
export default ServiceSchedule
