import React from 'react'
import { Container } from './styles'
import { Checkbox, FormControlLabel } from '@material-ui/core'

const CheckboxComponent = ({
  checked,
  setValue,
  label,
  hasError,
  msgError,
  colorLight,
  ...rest
}) => {
  return (
    <Container hasError={hasError} checked={checked} colorLight={colorLight}>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={() => setValue(!checked)}
            inputProps={{ 'aria-label': 'primary checkbox' }}
            color="primary"
            {...rest}
          />
        }
        label={label}
      />
      {msgError && <small>{msgError}</small>}
    </Container>
  )
}

export default CheckboxComponent
