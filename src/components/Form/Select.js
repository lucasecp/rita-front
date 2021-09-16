import React from 'react';
import { Container,Select } from './style';

const SelectComponent = ({options,label,setValue,labeDefaultOption, ...rest}) => {
  return (
    <Container>
    <label>{label}</label>
    <Select {...rest}  onChange={({target}) => {setValue(target.value)}} {...rest}>
      <option value='' >{labeDefaultOption}</option>
     {options.map((option,index) => (<option value={option.value} key={index} >{option.label}</option>) )}
  </Select>
    </Container>
  );
};

export default SelectComponent;