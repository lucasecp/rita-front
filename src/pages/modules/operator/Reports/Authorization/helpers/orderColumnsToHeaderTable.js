import { columnsTable } from "../static/columns"
export default (value) => {
  const columnNameArray = value.map(el => el.name)

  return columnsTable.reduce((acumulator,el) => {
    if(columnNameArray.includes(el.name)){
       acumulator.push(el)
    }
    return acumulator
  },[])
}