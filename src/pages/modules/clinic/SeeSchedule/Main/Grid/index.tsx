import React from 'react'
import { useScheduleSpecialist } from '../../hooks'
import { Container, Footer } from './styles'
import Cell from './Cell'
import { daysWeek } from '../../constants/days'
import Header from './Header'
import ButtonPrimary from '@/components/Button/Primary'
import { useHistory } from 'react-router'
import { CLINIC_SEE_ALL_SPECIALIST } from '@/routes/constants/namedRoutes/routes'

const Grid: React.FC<{ nameDoctor: string }> = ({ nameDoctor }) => {
  const { schedule } = useScheduleSpecialist()

  const history = useHistory()

  const scheduleOnSpecificDay = (name: string) =>
    schedule.filter((data) => data.day === name)

  const theMostScheduleDayAmount = schedule.reduce((ac, sched, i, array) => {
    const amountOnDay = array.filter((val) => sched.day === val.day).length

    if (ac > amountOnDay) {
      return ac
    }
    ac = amountOnDay
    return ac
  }, 0)

  const cellsEmptys = (arraySchedule) => {
    const list = []
    const resyCells = theMostScheduleDayAmount - arraySchedule.length

    if (arraySchedule.length === theMostScheduleDayAmount) {
      return list
    }

    for (let i = 0; i < resyCells; i++) {
      list.push(i)
    }
    return list
  }

  return (
    <>
      <Container>
        <Header />
        <section>
          <div>
            {scheduleOnSpecificDay(daysWeek.SUNDAY).map((sched, index) => (
              <Cell key={index} data={sched} nameDoctor={nameDoctor} />
            ))}
            {cellsEmptys(scheduleOnSpecificDay(daysWeek.SUNDAY)).map((val) => (
              <Cell empty key={val} />
            ))}
          </div>

          <div>
            {scheduleOnSpecificDay(daysWeek.MONDAY).map((sched, index) => (
              <Cell key={index} data={sched} nameDoctor={nameDoctor} />
            ))}
            {cellsEmptys(scheduleOnSpecificDay(daysWeek.MONDAY)).map((val) => (
              <Cell empty key={val} />
            ))}
          </div>

          <div>
            {scheduleOnSpecificDay(daysWeek.TUESDAY).map((sched, index) => (
              <Cell key={index} data={sched} nameDoctor={nameDoctor} />
            ))}
            {cellsEmptys(scheduleOnSpecificDay(daysWeek.TUESDAY)).map((val) => (
              <Cell empty key={val} />
            ))}
          </div>

          <div>
            {scheduleOnSpecificDay(daysWeek.WEDNESDAY).map((sched, index) => (
              <Cell key={index} data={sched} nameDoctor={nameDoctor} />
            ))}
            {cellsEmptys(scheduleOnSpecificDay(daysWeek.WEDNESDAY)).map(
              (val) => (
                <Cell empty key={val} />
              ),
            )}
          </div>

          <div>
            {scheduleOnSpecificDay(daysWeek.THRUSDAY).map((sched, index) => (
              <Cell key={index} data={sched} nameDoctor={nameDoctor} />
            ))}
            {cellsEmptys(scheduleOnSpecificDay(daysWeek.THRUSDAY)).map(
              (val) => (
                <Cell empty key={val} />
              ),
            )}
          </div>

          <div>
            {scheduleOnSpecificDay(daysWeek.FRIDAY).map((sched, index) => (
              <Cell key={index} data={sched} nameDoctor={nameDoctor} />
            ))}

            {cellsEmptys(scheduleOnSpecificDay(daysWeek.FRIDAY)).map((val) => (
              <Cell empty key={val} />
            ))}
          </div>

          <div>
            {scheduleOnSpecificDay(daysWeek.SATURDAY).map((sched, index) => (
              <Cell key={index} data={sched} nameDoctor={nameDoctor} />
            ))}
            {cellsEmptys(scheduleOnSpecificDay(daysWeek.SATURDAY)).map(
              (val) => (
                <Cell empty key={val} />
              ),
            )}
          </div>
        </section>
      </Container>
      <Footer>
        <ButtonPrimary onClick={() => history.push(CLINIC_SEE_ALL_SPECIALIST)}>
          Voltar
        </ButtonPrimary>
      </Footer>
    </>
  )
}

export default Grid
