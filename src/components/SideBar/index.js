import React from 'react';
import { Img } from '../../assets'
import { Container, Header, Logo, Title, Context } from './styles';

function SideBar({ children }) {
  return (
    <Container>
      <Header>
        <Logo src={Img.LOGO}/>
        <Title>Câmara de Vácuo</Title>
      </Header>

      <Context>
        {children}
      </Context>
    </Container>
  );
}

export default SideBar;