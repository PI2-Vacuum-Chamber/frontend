import React, { useState, useCallback, useEffect }from 'react';

import { SideBar, SideBarButton, Button } from '../../components';
import { Img } from '../../assets';
import { useHistory } from "react-router-dom";
import sortBy from 'lodash/sortBy';
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
import api from '../../services/api';

function SensorPage() {
  const [selectedId, setSelectedId] = useState(-1);
  const [isPressure, setIsPressure] = useState(true);
  const [sensors, setSensors] = useState([]);
  const history = useHistory();

  const loadSensors = useCallback(async () => {
    try{
      const response = await api.get('/sensor/index');
      setSensors(sortBy(response.data.data, 'host'));
    }catch(err){
      console.log(err)
    }
  }, []);

  useEffect(() => {
    loadSensors();
  }, [])

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
          {sensors.map(item =>(
            <ContainerSensor key={item.host}>
              <TitleSensor>Sensor {item.host}</TitleSensor>
                <SensorIcon src={Img.SENSOR_RED}/>
              <DescriptionText>Status: ok</DescriptionText>
              <DescriptionText>
                {item._measurement === 'pressure' ? 'Pressão': 'Temperatura'}:{' '} 
                {item._value}{' '}
                {item._measurement === 'pressure' ? 'Pa': 'ºC'}
              </DescriptionText>
            </ContainerSensor>
          ))}
          
        </Content>
      </Body>
    </Container>
  );
}

export default SensorPage;