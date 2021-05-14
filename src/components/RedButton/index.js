import React from 'react';

import { Container, Title } from './styles';

function RedButton({ children, selected = false, onClick, button }) {
  return (
    <Container selected={selected} onClick={onClick}>
      <Title>{children}</Title>
      {button}
    </Container>
  );
}

export default RedButton;