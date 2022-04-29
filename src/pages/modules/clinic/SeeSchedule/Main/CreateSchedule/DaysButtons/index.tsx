import MsgError from '@/components/MsgError'
import React, { useEffect } from 'react'
import { DaysI } from '../../../types'
import { daysWeek } from '../../../constants/days'
import { Container, Buttons } from './styles'

interface DaysButtonsI {
  setDays: React.Dispatch<React.SetStateAction<DaysI>>
  days: DaysI
  error: string
}

const arrayDays = [
  { name: daysWeek.SUNDAY, label: 'D' },
  { name: daysWeek.MONDAY, label: 'S' },
  { name: daysWeek.TUESDAY, label: 'T' },
  { name: daysWeek.WEDNESDAY, label: 'Q' },
  { name: daysWeek.THRUSDAY, label: 'Q' },
  { name: daysWeek.FRIDAY, label: 'S' },
  { name: daysWeek.SATURDAY, label: 'S' },
]

const DaysButtons: React.FC<DaysButtonsI> = ({ setDays, days, error }) => {
  useEffect(() => {
    setDays({
      [daysWeek.MONDAY]: false,
      [daysWeek.TUESDAY]: false,
      [daysWeek.WEDNESDAY]: false,
      [daysWeek.THRUSDAY]: false,
      [daysWeek.FRIDAY]: false,
      [daysWeek.SATURDAY]: false,
      [daysWeek.SUNDAY]: false,
    })
  }, [])

  const onChooseDay = (target: string) => {
    setDays((prevDays: DaysI) => ({
      ...prevDays,
      [target]: !days[target],
    }))
  }

  const isActive = (name: string) => {
    return days[name]
  }

  return (
    <Container>
      <label>Calendário</label>
      <div>
        {arrayDays.map((day, index) => (
          <Buttons
            key={index}
            onClick={() => onChooseDay(day.name)}
            active={isActive(day.name)}
          >
            {day.label}
          </Buttons>
        ))}
      </div>
      {error && <MsgError>{error}</MsgError>}
    </Container>
  )
}

export default DaysButtons
