interface UseQueryParamsProps {
  specialist: string | null
  startTime: string | null
  endTime: string | null
  patient: string | null
  date: string | null
}

export default (): UseQueryParamsProps => {
  const localStorageValues = JSON.parse(
    window.localStorage.getItem('@Rita/clinic-filter') || '{}',
  )

  const specialist = localStorageValues?.specialist

  const startTime = localStorageValues?.startTime

  const endTime = localStorageValues?.endTime

  const patient = localStorageValues?.patient

  const date = localStorageValues?.date

  return { specialist, startTime, endTime, patient, date }
}
