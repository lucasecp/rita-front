export default () => {
  const optionsContainer = document.querySelectorAll('.optionListContainer')
  const multiSelectWidth = document.querySelectorAll('.multiselect-container')
  console.log(multiSelectWidth);
  Array.from(optionsContainer).forEach((el,i) => {el.style.width = `${multiSelectWidth[i].clientWidth}px`})
}