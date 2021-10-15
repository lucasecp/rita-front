export default function (value){
  if(!value && typeof value !== 'string') return
  console.log(new Date(value).toLocaleTimeString('pt-br'));
  return value.split('T')[0].split('-').reverse().join('/') + ' - ' + new Date(value).toLocaleTimeString('pt-br')
}