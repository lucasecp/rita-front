export default (nameField: string): void => {
  const element: HTMLElement | null = document.querySelector(
    `[name="${nameField}"]`,
  )
  const scrollHeightToTop = element?.offsetTop

  if (scrollHeightToTop !== undefined) scrollTo(0, scrollHeightToTop)
}
