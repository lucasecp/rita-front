export default (pages) => {
  const newArray = []
  for(let i= 1; i <= pages;i++){
   newArray.push({label: i,value: i})
  }
  return newArray
}
