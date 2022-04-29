import React, { useState } from 'react'
import 'antd/dist/antd.min.css'
import { Input, AutoComplete } from 'antd'
import useSearch from './useSearch'
import { Container } from './styles'
import { CompleteProps } from './types/index'

const Complete: React.FC<CompleteProps> = ({ setValue, value }) => {
  const [inputValue, setInputValue] = useState('')
  const [options, setOptions] = useState<any[]>([])

  useSearch(inputValue, setOptions)

  return (
    <Container>
      <label> Nome do especialista, Especialidade ou Clínica:</label>
      <AutoComplete
        dropdownClassName="certain-category-search-dropdown"
        options={options}
        onSearch={(value) => setInputValue(value)}
        notFoundContent="Nenhum resultado."
        onChange={(value) => setValue(value)}
        allowClear
        value={value}
      >
        <Input.Search size="large" placeholder="O que você procura?" />
      </AutoComplete>
    </Container>
  )
}
export default Complete
