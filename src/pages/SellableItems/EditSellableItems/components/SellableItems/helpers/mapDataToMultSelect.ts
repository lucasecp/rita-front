interface Value {
  id: number
  nome: string
}

interface returnValue {
  id: number
  name: string
}

export default (value: Value[]): returnValue[] => {
  if (!value?.length || !value) return []
  return value.map((val) => {
    return { id: val.id, name: val.nome }
  })
}
