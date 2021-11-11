import { columnsTable } from "../static"

export default (value) => {

  return columnsTable.reduce((acumulator,el) => {
    if(value.includes(el)){
       acumulator.push(el)
    }
    return acumulator
  },[])
}
