import React from 'react';
import { Container } from './style';

const Checkbox = ({checked, setValue,label,...rest}) => {
  return (
    <Container>
         <input {...rest} id={label} type='checkbox' checked={checked} onChange={() => setValue(!checked)}/>
         <label htmlFor={label}>{label}</label>
    </Container>
  );
};

Checkbox.propTypes = {};

export default Checkbox;