import React from 'react'
import { Container } from './styles'
import {
  Checkbox as MaterialCheckbox,
  FormControlLabel,
} from '@material-ui/core'

interface CheckboxProps {
  checked: boolean;
  setValue: React.Dispach<React.SetStateAction<boolean>>;
  label: string | JSX.Element;
  hasError: boolean;
  messageError?: string;
  colorLight?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  setValue,
  label,
  hasError,
  messageError,
  colorLight,
  ...rest
}) => {
  return (
    <Container hasError={hasError} checked={checked} colorLight={colorLight}>
      <FormControlLabel
        control={
          <MaterialCheckbox
            checked={checked}
            onChange={() => setValue(!checked)}
            inputProps={{ 'aria-label': 'primary checkbox' }}
            color="primary"
            {...rest}
          />
        }
        label={label}
      />
      {messageError && <small>{messageError}</small>}
    </Container>
  )
}
