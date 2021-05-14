import React from 'react';
import { Container, Context, Header, Title, InfoText } from './styles';

function SideBar({ children, ln2, gn2 }) {
  return (
    <Container>
      <Header>
        <Title>Nível dos tanques</Title>

        <InfoText>LN2: {String(ln2)}%</InfoText>
        <InfoText>GN2: {String(gn2)}%</InfoText>
      </Header>
      <Context>
        {children}
      </Context>
    </Container>
  );
}

export default SideBar;