import React, { useState } from 'react'
import 'antd/dist/antd.min.css'
import { AutoComplete } from 'antd'
import { Container } from './styles'
import { CompleteProps } from './types/index'
/** Components */
import InputText from '@/components/Form/InputText'
import apiPatient from '@/services/apiPatient'
import ItemSpecialty from './itemPatient'

const InputAutoCompleteSpecialist: React.FC<CompleteProps> = ({
  value,
  errors,
  hasErrors,
  setValue,
}) => {

  const ENDPOINT_SPECIALIST = `/paciente`

  const [options, setOptions] = useState<any[]>([])
  const [specialist, setSpecialist] = useState([])

  const getAllSpecialist = async () => {
    let result = await apiPatient.get(ENDPOINT_SPECIALIST)
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
          <ItemSpecialty patient={value.name} />
        ),
      }
    })

    setOptions(value ? result : [])
  }

  const onSelect = async (value: any) => {
    let result = await apiPatient.get(ENDPOINT_SPECIALIST)
     result?.data?.medicos.filter((item: any) => {
      if(item.nome === value){
        window.localStorage.setItem("@Rita/InputAutoCompletePatient/IdPatient", JSON.stringify(Number(item.idMedico)))
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
          label="Paciente:"
          onBlur={hasErrors}
          onFocus={() => setOptions([])}
          hasError={!!errors.specialist}
          msgError={errors.specialist} />
      </AutoComplete>
    </Container>
  )
}
export default InputAutoCompleteSpecialist
