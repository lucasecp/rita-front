export const queryOrderString = (obj = []) => {
  if (!Object.keys(obj).length) return ''

  return `&orderBy=${obj.name}&order=${obj.value}`
}
