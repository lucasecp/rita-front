import React from 'react';
import { OverlayTrigger,Tooltip } from 'react-bootstrap';

const CustomTooltip = ({label,children}) => {
  return (
    <OverlayTrigger
      placement='right'
      overlay={
        <Tooltip >
         {label}
        </Tooltip>
      }
    >
      {children}
    </OverlayTrigger>
  );
};


export default CustomTooltip;