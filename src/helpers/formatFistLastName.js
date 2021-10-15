export default function (value){
  if(!value) return ''
  const names = String(value).split(' ')
  const newName = names[0] + ' ' + names[names.length - 1]
  return newName.toLowerCase().replace(/\b(\w)/g, x => x.toUpperCase())
}