export const scheduleFromApi = (schedules) => {
  
  return schedules.map((schedule) => ({
    monday: schedule?.agenda.segunda?.map((day) => ({
      start: day.inicio,
      end: day.fim,
    })),
    tuesday: schedule?.agenda.terca?.map((day) => ({
      start: day.inicio,
      end: day.fim,
    })),
    wednesday: schedule?.agenda.quarta?.map((day) => ({
      start: day.inicio,
      end: day.fim,
    })),
    thursday: schedule?.agenda.quinta?.map((day) => ({
      start: day.inicio,
      end: day.fim,
    })),
    friday: schedule?.agenda.sexta?.map((day) => ({
      start: day.inicio,
      end: day.fim,
    })),
    saturday: schedule?.agenda.sabado?.map((day) => ({
      start: day.inicio,
      end: day.fim,
    })),
    sunday: schedule?.agenda.domingo?.map((day) => ({
      start: day.inicio,
      end: day.fim,
    })),
  }))
}
