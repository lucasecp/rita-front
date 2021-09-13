import React from 'react';
import { Container,Select } from './style';

const SelectComponent = ({options,label,setValue,labeDefaultOption, ...rest}) => {
  return (
    <Container>
    <label>{label}</label>
    <Select {...rest} value='default'  onChange={({target}) => setValue(target.value)}>
      <option  value='default' >{labeDefaultOption}</option>
     {options.map((option,index) => (<option value={option} key={index} >{option}</option>) )}
  </Select>
    </Container>
  );
};

export default SelectComponent;