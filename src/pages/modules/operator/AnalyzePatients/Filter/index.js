import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import CustomRangePicker from '@/components/CustomRangePicker'
import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import SelectComponent from '@/components/Form/Select'
import clearFormat from '@/helpers/clear/SpecialCaracteres'
import React, { useState } from 'react'
import TablePatients from '../TablePatients'
import { Container, BtnGroup } from './styles'

const Filter = () => {
  const [dates, setDates] = useState([])
  const [cpf, setCpf] = useState('')
  const [name, setName] = useState('')
  const [validator, setValidator] = useState('')
  const [status, setStatus] = useState('')
  const [errors, setErrors] = useState({})
  const [orders, setOrders] = useState([])

  const typedData = () => {
    return dates.length || clearFormat(cpf) || name || validator || status
  }
  const validateFields = () =>{
    const newErrors = {}
    const newCpf = String(clearFormat(cpf)).trim()
    const newName = String(clearFormat(cpf)).trim()

    if(newCpf.length < 3 && newCpf){
      newErrors.cpf = 'Informe 3 dígitos ou mais'
    }
    if(newName.length < 3 && newName){
      newErrors.name = 'Informe 3 letras ou mais'
    }
    setErrors(newErrors)
    return newErrors
  }
  const clearFields = () => {
   setName('')
   setCpf('')
   setValidator('')
   setStatus('')
   setDates([])
   setErrors({})
   setOrders([])
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
     if(Object.keys(validateFields()).length) return

  }

  return (
    <>
    <Container>
      <form onSubmit={handleSubmit}>
        <div>
          <CustomRangePicker
            label="Período do Cadastro: "
            value={dates}
            setValue={setDates}
            inputReadOnly={true}
          />
          <InputMask
            variation="secondary"
            label="CPF:"
            mask="999.999.999-99"
            value={cpf}
            setValue={setCpf}
            hasError={errors.cpf}
            msgError={errors.cpf}
          />
          <InputText
            variation="secondary"
            label="Nome:"
            value={name}
            setValue={setName}
            hasError={errors.name}
            msgError={errors.name}
          />
          <SelectComponent
            variation="secondary"
            labelDefaultOption="Todos"
            label="Validador:"
            setValue={setValidator}
            value={validator}
          />
          <SelectComponent
            variation="secondary"
            labelDefaultOption="Todos"
            label="Status:"
            value={status}
            setValue={setStatus}
          />
        </div>
      { typedData() &&  <BtnGroup>
          <OutlineButton type='button' variation="red" small onClick={clearFields}>
            Limpar Filtro
          </OutlineButton>
          <ButtonPrimary type="submit" small>
            Filtrar Resultados
          </ButtonPrimary>
        </BtnGroup>}
      </form>
    </Container>
    <TablePatients orders={orders} setOrders={setOrders}/>
    </>
  )
}

export default Filter
