export default (name) => {
  if (typeof name !== 'string' || name.length < 38) return name
  return `${name.slice(0, 38)}...`
}
