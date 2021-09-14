import React from 'react';
import { Container } from './style';
import {Checkbox, FormControlLabel} from '@material-ui/core'
const CheckboxComponent = ({checked, setValue,label, hasError}) => {
  return (
    <Container hasError={hasError}>
       <FormControlLabel
        control={  <Checkbox
        checked={checked}
        onChange={() => setValue(!checked)}
        inputProps={{ 'aria-label': 'primary checkbox' }}
        color="primary"
      />}
        label={label}
      />
    </Container>
  );
};

export default CheckboxComponent;