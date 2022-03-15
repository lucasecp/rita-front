export default (field, columns) => {
  return columns.some((el) => el.name === field)
}
