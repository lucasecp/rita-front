export default function (value, separator) {
  if (!value && typeof value !== 'string') return

  const separatorOrDefault = separator || ' '

  return (
    value.split('T')[0].split('-').reverse().join('/') +
    separatorOrDefault +
    value.split('T')[1].slice(0, 5)
  )
}
