export default function (value){
  console.log(value);
  if(!value && typeof value !== 'string') return
  return value.split('T')[0].reverse()
}