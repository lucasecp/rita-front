import React from 'react';
import { Container } from './style';
import {Checkbox, FormControlLabel} from '@material-ui/core'
import MsgError from '@/components/MsgError';
const CheckboxComponent = ({checked, setValue,label, hasError,msgError,...rest}) => {
  return (
    <Container hasError={hasError}>
       <FormControlLabel
        control={  <Checkbox
        checked={checked}
        onChange={() => setValue(!checked)}
        inputProps={{ 'aria-label': 'primary checkbox' }}
        color="primary"
        {...rest}
      />}
        label={label}
      />
          {msgError && <MsgError>{msgError}</MsgError>}
    </Container>
  );
};

export default CheckboxComponent;