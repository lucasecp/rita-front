export const scrollOntoFieldError = (errors: {
  [x: string]: string | undefined
}): void => {
  let firstNameField

  for (const error in errors) {
    if (errors[error]) {
      firstNameField = error
      break
    }
  }

  const element: HTMLElement | null = document.querySelector(
    `[name="${firstNameField}"]`,
  )
  const scrollHeightToTop = element?.offsetTop

  if (scrollHeightToTop !== undefined) scrollTo(0, scrollHeightToTop - 24)
}
