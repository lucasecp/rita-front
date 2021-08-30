import React from "react";

import { Container } from "./styles";

function OutlineButton({ children, type, variation, ...rest }) {
  return (
    <Container type={type} variation={variation} {...rest}>
      {children}
    </Container>
  );
}

export default OutlineButton;
