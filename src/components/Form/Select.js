import React from 'react'
import MsgError from '../MsgError'
import { Container, Select } from './style'

const SelectComponent = ({
  options,
  label,
  setValue,
  value,
  labelDefaultOption,
  msgError,
  variation,
  hasError,
  ...rest
}) => {
  return (
    <Container>
      {label && <label>{label}</label>}
      <Select
        variation={variation}
        onChange={({ target }) => {
          setValue(target.value)
        }}
        value={value || ''}
        {...rest}
      >
        {labelDefaultOption && (
          <option value="" disabled>
            {labelDefaultOption}
          </option>
        )}
        {!!options?.length &&
          options?.map((option, index) => (
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
