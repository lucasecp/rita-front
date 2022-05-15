import React, { useState } from 'react'
import 'antd/dist/antd.min.css'
import { AutoComplete } from 'antd'
import { Container } from './styles'
import { CompleteProps } from './types/index'
/** Components */
import InputText from '@/components/Form/InputText'
import apiAdmin from '@/services/apiAdmin'
import ItemSpecialty from './itemSpecialty'

const InputAutoCompleteSpecialist: React.FC<CompleteProps> = ({
  value,
  errors,
  hasErrors,
  setValue,
}) => {

  const ENDPOINT_SPECIALIST = `clinica/${59}/medico?limit=100000&skip=0&status=A&status=P`

  const [options, setOptions] = useState<any[]>([])
  const [specialist, setSpecialist] = useState([])

  const getAllSpecialist = async () => {
    let result = await apiAdmin.get(ENDPOINT_SPECIALIST)
    result.data = result?.data?.medicos.map((item: any) => {
      return {
        idSpecialist: item.idMedico,
        name: item.nome
      }
    })
    setSpecialist(result.data)
  }

  React.useEffect(() => {
    getAllSpecialist()
  }, [])

  const searchResult = (query: any) => {
    let result = specialist
      .filter(item => {
        if (String(item.name).toLowerCase().trim().includes(String(query).toLowerCase().trim())) {
          return item
        }
      })

    result = result.map((value: any) => {
      return {
        value: value.name,
        label: (
          <ItemSpecialty specialist={value.name} />
        ),
      }
    })

    setOptions(value ? result : [])
  }

  const onSelect = async (value: any) => {
    let result = await apiAdmin.get(ENDPOINT_SPECIALIST)
     result?.data?.medicos.filter((item: any) => {
      if(item.nome === value){
        window.localStorage.setItem("@Rita/InputAutoCompleteSpecialist/IdSpecialist", JSON.stringify(Number(item.idMedico)))
      }
    })
  }

  return (
    <Container>
      <AutoComplete
        dropdownClassName="certain-category-search-dropdown"
        options={options}
        onSearch={(value => searchResult(value))}
        onChange={(value) => setValue(value)}
        onSelect={(value) => onSelect(value)}
        notFoundContent="Nenhum resultado."
        allowClear
        maxLength={100}
        value={value}>
        <InputText
          variation="secondary"
          label="Especialista:"
          onBlur={hasErrors}
          onFocus={() => setOptions([])}
          hasError={!!errors.specialist}
          msgError={errors.specialist} />
      </AutoComplete>
    </Container>
  )
}
export default InputAutoCompleteSpecialist
