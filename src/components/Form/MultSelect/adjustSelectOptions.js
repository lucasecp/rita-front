export const adjustSelectOptions = () => {
  const optionsContainer = document.querySelectorAll('.optionListContainer')
  const multiSelect = document.querySelectorAll('.multiselect-container')
  Array.from(optionsContainer).forEach((el,i) => {
    el.style.width = `${multiSelect[i].clientWidth}px`
  })
}
