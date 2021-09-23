import React from 'react'
import MsgError from '../MsgError'
import { Container, Select } from './style'

const SelectComponent = ({
  options,
  label,
  setValue,
  labelDefaultOption,
  msgError,
  ...rest
}) => {
  return (
    <Container>
      <label>{label}</label>
      <Select
        {...rest}
        onChange={({ target }) => {
          setValue(target.value)
        }}
        {...rest}
      >
        <option value="">{labelDefaultOption}</option>
        {options.map((option, index) => (
          <option value={option.value} key={index}>
            {option.label}
          </option>
        ))}
      </Select>
      {msgError && <MsgError>{msgError}</MsgError>}
    </Container>
  )
}

export default SelectComponent
