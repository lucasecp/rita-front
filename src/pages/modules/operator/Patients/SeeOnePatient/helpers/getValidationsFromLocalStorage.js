const getValidationsFromLocalStorage = (idPatient) => {
  const getValidations = localStorage.getItem(
    `@Rita/Validate/OnePatient/${idPatient}`
  )

  return JSON.parse(getValidations) || {}
}

export default getValidationsFromLocalStorage
