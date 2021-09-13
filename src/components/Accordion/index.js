import { Accordion } from '@material-ui/core';
import React from 'react';

const AccordionComponent = ({children,value,setValue,...rest}) => {
  return (
    <Accordion {...rest}>
      {children}
    </Accordion>
  );
};


export default AccordionComponent;