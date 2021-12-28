export default (str) => {
  return String(str)
    .toLowerCase()
    .replace(/\b(\w)/g, (x) => x.toUpperCase())
}
