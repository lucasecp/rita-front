import React from 'react'
// import MsgError from '../../MsgError'

import { Container } from './styles'

export const Select = ({
  options,
  label,
  setValue,
  value = '',
  labelDefaultOption,
  msgError,
  variation,
  hasError,
  ...rest
}) => {
  return (
    <Container hasError={hasError} variation={variation}>
      {label && <label htmlFor={label}>{label}</label>}
      <select
        onChange={({ target }) => {
          setValue(target.value)
        }}
        value={value}
        id={label}
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
      </select>
      {msgError && <small>{msgError}</small>}
    </Container>
  )
}


