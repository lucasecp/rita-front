import React from 'react';
import { Form } from 'react-bootstrap';
import { Container } from './style';

const Select = ({options,label,setValue,labeDefaultOption, ...rest}) => {
  return (
    <Container>
    <label>{label}</label>
    <Form.Select {...rest} aria-label={label} onChange={({target}) => setValue(target.value)}>
      <option selected="true" disabled="disabled" >{labeDefaultOption}</option>
     {options.map((option,index) => (<option value={option} key={index} >{option}</option>) )}
  </Form.Select>
    </Container>
  );
};

export default Select;