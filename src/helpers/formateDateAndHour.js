export default function (value,separator){
  if(!value && typeof value !== 'string') return
  return value.split('T')[0].split('-').reverse().join('/') + separator || '' + value.split('T')[1].slice(0,5)
}