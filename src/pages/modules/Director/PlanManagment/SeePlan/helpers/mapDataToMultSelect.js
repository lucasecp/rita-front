export default (value) => {
  if (!value?.length || !value) return []

  return value.map((val) => {
    return { id: val.id, name: val.nome }
  })
}
