import React from 'react';
import { Container } from './style';
import {Checkbox, FormControlLabel} from '@material-ui/core'
const CheckboxComponent = ({checked, setValue,label,id}) => {
  return (
    <Container>
       <FormControlLabel
        control={  <Checkbox
        checked={checked}
        onChange={() => setValue(!checked)}
        inputProps={{ 'aria-label': 'primary checkbox' }}
        color="primary"
      />}
        label={label}
      />
         {/* <input id={id} {...rest} type='checkbox' checked={checked} onChange={() => setValue(!checked)}/>
         <label htmlFor={id}>{label}</label> */}
    </Container>
  );
};

export default CheckboxComponent;