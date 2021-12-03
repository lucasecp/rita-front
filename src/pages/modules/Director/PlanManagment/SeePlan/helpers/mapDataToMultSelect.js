export default (value) => {
  if(!value?.length || !value) return []

  value.map((val) => {
    return { id: val.id, name: val.nome }
  })
}
