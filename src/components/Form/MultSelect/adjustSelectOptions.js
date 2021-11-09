export const adjustSelectOptions = (container) => {
  if (!container) return
    const idContainer = container.getAttribute('id')
    const optionContainer = document.querySelector(`#${idContainer} .optionListContainer`)
    optionContainer.style.width = `${container.clientWidth}px`
}
