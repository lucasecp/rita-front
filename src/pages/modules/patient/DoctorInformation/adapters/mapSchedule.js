export const scheduleFromApi = (schedules) => {
  console.log(schedules)
  return [schedules]?.map((schedule) => ({
    monday: schedule?.segunda?.map((day) => ({
      start: day.inicio,
      end: day.fim,
    })),
    tuesday: schedule?.terca?.map((day) => ({
      start: day.inicio,
      end: day.fim,
    })),
    wednesday: schedule?.quarta?.map((day) => ({
      start: day.inicio,
      end: day.fim,
    })),
    thursday: schedule?.quinta?.map((day) => ({
      start: day.inicio,
      end: day.fim,
    })),
    friday: schedule?.sexta?.map((day) => ({
      start: day.inicio,
      end: day.fim,
    })),
    saturday: schedule?.sabado?.map((day) => ({
      start: day.inicio,
      end: day.fim,
    })),
    sunday: schedule?.domingo?.map((day) => ({
      start: day.inicio,
      end: day.fim,
    })),
  }))
}
