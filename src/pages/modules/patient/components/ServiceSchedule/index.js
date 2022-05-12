import React, { useEffect, useState } from 'react'
import { Container } from './styles'

const ServiceSchedule = ({ dataSchedule = [{}] }) => {
  const [daysEmpty, setDaysEmpty] = useState([])
  const hasDayInSchedule = (day) => {
    return dataSchedule.some(
      (schedule) => schedule[day] && schedule[day].length,
    )
  }
  // const isEmpty = dataSchedule[0] && dataSchedule[0].filter((day) => !day)

  useEffect(() => {
    for (const i in dataSchedule[0]) {
      if (!dataSchedule[0][i]) {
        setDaysEmpty((days) => [...days, i])
      }
    }
  }, [dataSchedule])
  console.log(daysEmpty, dataSchedule)

  return daysEmpty.length  ? (
    <Container>
      <header>
        <h5>Agenda de atendimento</h5>
      </header>
      <div>
        {hasDayInSchedule('monday') && (
          <ul>
            <h6>Segunda</h6>
            {dataSchedule.map((schedule) =>
              /**
               * @description Esse bloco está comentado por conta que o reduce retorna apenas um registro
               * e existiu casos que o especialista pode ter mais de um horário no mesmo dia, então utilizando
               * o reduce não estava retornando todos os horários do dia.
               */
              // schedule.monday.reduce((ac, hour) => {
              //   ac = `${hour.start} às ${hour.end}`
              //   return <li>{ac}</li>
              // }, ''),
              schedule.monday.map((time) => {
                return <li key={time}>{`${time.start} às ${time.end}`}</li>
              }),
            )}
          </ul>
        )}
        {hasDayInSchedule('tuesday') && (
          <ul>
            <h6>Terça</h6>
            {dataSchedule.map((schedule) =>
              /**
               * @description Esse bloco está comentado por conta que o reduce retorna apenas um registro
               * e existiu casos que o especialista pode ter mais de um horário no mesmo dia, então utilizando
               * o reduce não estava retornando todos os horários do dia.
               */
              // schedule.tuesday.reduce((ac, hour) => {
              //   ac = `${hour.start} às ${hour.end}`
              //   return <li>{ac}</li>
              // }, ''),
              schedule.tuesday.map((time) => {
                return <li key={time}>{`${time.start} às ${time.end}`}</li>
              }),
            )}
          </ul>
        )}
        {hasDayInSchedule('wednesday') && (
          <ul>
            <h6>Quarta</h6>
            {dataSchedule.map((schedule) =>
              /**
               * @description Esse bloco está comentado por conta que o reduce retorna apenas um registro
               * e existiu casos que o especialista pode ter mais de um horário no mesmo dia, então utilizando
               * o reduce não estava retornando todos os horários do dia.
               */
              // schedule.wednesday.reduce((ac, hour) => {
              //   ac = `${hour.start} às ${hour.end}`
              //   return <li>{ac}</li>
              // }, ''),
              schedule.wednesday.map((time) => {
                return <li key={time}>{`${time.start} às ${time.end}`}</li>
              }),
            )}
          </ul>
        )}
        {hasDayInSchedule('thursday') && (
          <ul>
            <h6>Quinta</h6>
            {dataSchedule.map((schedule) =>
              /**
               * @description Esse bloco está comentado por conta que o reduce retorna apenas um registro
               * e existiu casos que o especialista pode ter mais de um horário no mesmo dia, então utilizando
               * o reduce não estava retornando todos os horários do dia.
               */
              // schedule.thursday.reduce((ac, hour) => {
              //   ac = `${hour.start} às ${hour.end}`
              //   return <li>{ac}</li>
              // }, ''),
              schedule.thursday.map((time) => {
                return <li key={time}>{`${time.start} às ${time.end}`}</li>
              }),
            )}
          </ul>
        )}
        {hasDayInSchedule('friday') && (
          <ul>
            <h6>Sexta</h6>
            {dataSchedule.map((schedule) =>
              /**
               * @description Esse bloco está comentado por conta que o reduce retorna apenas um registro
               * e existiu casos que o especialista pode ter mais de um horário no mesmo dia, então utilizando
               * o reduce não estava retornando todos os horários do dia.
               */
              // schedule.friday.reduce((ac, hour) => {
              //   ac = `${hour.start} às ${hour.end}`
              //   return <li>{ac}</li>
              // }, ''),
              schedule.friday.map((time) => {
                return <li key={time}>{`${time.start} às ${time.end}`}</li>
              }),
            )}
          </ul>
        )}
        {hasDayInSchedule('saturday') && (
          <ul>
            <h6>Sábado</h6>
            {dataSchedule.map((schedule) =>
              /**
               * @description Esse bloco está comentado por conta que o reduce retorna apenas um registro
               * e existiu casos que o especialista pode ter mais de um horário no mesmo dia, então utilizando
               * o reduce não estava retornando todos os horários do dia.
               */
              // schedule.saturday.reduce((ac, hour) => {
              //   ac = `${hour.start} às ${hour.end}`
              //   return <li>{ac}</li>
              // }, ''),
              schedule.saturday.map((time) => {
                return <li key={time}>{`${time.start} às ${time.end}`}</li>
              }),
            )}
          </ul>
        )}
        {hasDayInSchedule('sunday') && (
          <ul>
            <h6>Domingo</h6>
            {dataSchedule.map((schedule) =>
              /**
               * @description Esse bloco está comentado por conta que o reduce retorna apenas um registro
               * e existiu casos que o especialista pode ter mais de um horário no mesmo dia, então utilizando
               * o reduce não estava retornando todos os horários do dia.
               */
              // schedule.sunday.reduce((ac, hour) => {
              //   ac = `${hour.start} às ${hour.end}`
              //   return <li>{ac}</li>
              // }, ''),
              schedule.sunday.map((time) => {
                return <li key={time}>{`${time.start} às ${time.end}`}</li>
              }),
            )}
          </ul>
        )}
      </div>
    </Container>
  ) : null
}
export default ServiceSchedule
