import React, { useState, useRef } from 'react'
import 'antd/dist/antd.css'
import { Input, AutoComplete } from 'antd'
import useSearch from './useSearch'
import { Container } from './styles'
import { CompleteProps } from './types/index';

const Complete:React.FC<CompleteProps> = ({ setValue }) => {
  const [inputValue, setInputValue] = useState('')
  const [options, setOptions] = useState([])
  const input = useRef(null)

  // useSearch(inputValue, setOptions)

  return (
    <Container>
      <label>Especialista, Especialidade ou Clínica:</label>
      <AutoComplete
        dropdownClassName="certain-category-search-dropdown"
        options={options}
        onSearch={(value) => setInputValue(value)}
        filterOption
        notFoundContent="Nenhum resultado."
        onSelect={(value, option) => setValue(option.value)}
        allowClear
      >
        <Input.Search
          size="large"
          placeholder="O que você procura?"
          ref={input}
        />
      </AutoComplete>
    </Container>
  )
}
export default Complete
