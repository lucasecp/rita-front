import React from "react";

import { Container } from "./styles";

function Button({ children, type, ...rest }) {
  return (
    <Container type={type} {...rest}>
      {children}
    </Container>
  );
}

export default Button;
