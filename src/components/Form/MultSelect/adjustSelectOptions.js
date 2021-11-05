export default () => {
  const optionsContainer = document.querySelector('.optionListContainer')
  const multiSelectWidth = document.querySelector('.multiselect-container').clientWidth
  console.log(multiSelectWidth);
  optionsContainer.style.width = `${multiSelectWidth}px`
}