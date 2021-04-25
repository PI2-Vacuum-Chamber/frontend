import React, { useState }from 'react';

import { SideBar, SideBarButton, Button } from '../../components';
import { Img } from '../../assets';
import { useHistory } from "react-router-dom";

import { 
  Container, 
  Body, 
  Title, 
  ContainerSensor, 
  Content, 
  TitleSensor, 
  SensorIcon,
  DescriptionText
} from './styles';

function SensorPage() {
  const [selectedId, setSelectedId] = useState(-1);
  const [isPressure, setIsPressure] = useState(true);
  const history = useHistory();

  return( 
    <Container>
      <SideBar>
          <SideBarButton 
            icon={Img.SENSOR} 
            selected={2 === selectedId}
            onClick={() => setIsPressure(true)}
          >
            Sensores
          </SideBarButton>

          <SideBarButton 
            icon={Img.HISTORIC} 
            selected={3 === selectedId}
            onClick={() => history.push("/experiment")} 
          >
            Histórico de experimentos
          </SideBarButton>
      </SideBar>
      
      <Body>
        <Title>Estado dos Sensores</Title>

        <Button style={{width: 20, marginBottom: 10, backgroundColor: '#C4C4C4', color: 'black'}} onClick={() => history.goBack()}>Voltar</Button>
        <Content>
          
          <ContainerSensor>
            <TitleSensor>Sensor 1</TitleSensor>
              <SensorIcon src={Img.SENSOR_RED}/>
            <DescriptionText>Status: ok</DescriptionText>
            <DescriptionText>Pressão: 10 Pa</DescriptionText>
          </ContainerSensor>
          
        </Content>
      </Body>
    </Container>
  );
}

export default SensorPage;