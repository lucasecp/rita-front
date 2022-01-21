export default function (value, separator) {
  if (!value && typeof value !== 'string') return

  const separatorOrDefault = separator || ' '
  // console.log(new Date(value), new Date(value).toLocaleString('pt-br'))
  return (
    new Date(value).toLocaleDateString('pt-br') +
    separatorOrDefault +
    new Date(value).toLocaleTimeString('pt-br')
  )
}
