import React, { useState, useCallback, useEffect } from 'react';
import { SideBar, SideBarButton, Button } from '../../components';
import { useHistory } from "react-router-dom";
import { Img } from '../../assets';
import Switch from '../Experiment/SwitchButton';
import { DialogRotation, LineChart } from '../../components';
import ReactExport from 'react-export-excel';

import { 
  Container, 
  Body, 
  Title, 
  BodyCard, 
  TextCard, 
  ExperimentTitle,
} from './styles';
import api from '../../services/api';

const { ExcelFile } = ReactExport;
const { ExcelSheet, ExcelColumn } = ReactExport.ExcelFile;

const History = () => {
  const [selectedId, setSelectedId] = useState(-1);
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const [experiments, setExperiments] = useState([]);
  const history = useHistory();

  const getExperiements = useCallback(async () => {
    try {
      const response = await api.get('/control/index');
      setExperiments(response.data.data);
    } catch (error) {
      console.log(error)
    }
  }, []);

  useEffect(() => {
    getExperiements();
  }, [])

  return (
    <Container>
      <SideBar>
        <SideBarButton 
          icon={Img.SENSOR} 
          selected={3 === selectedId}
          onClick={() => setSelectedId(3)}
        >
          Sensores
        </SideBarButton>
        
        <SideBarButton 
          icon={Img.HISTORIC} 
          selected={4 === selectedId}
          onClick={() => history.push("/history")} 
        >
          Histórico de experimentos
        </SideBarButton>

        {experiments.map((item, index) => (
          <SideBarButton 
            key={String(item.host)}
            onClick={() => history.push("/history")} 
          >
            Experimento {index +1 }
          </SideBarButton>
        ))}
      </SideBar>
      <Body>
        <Title>Histórico de Experimentos</Title>
        <ExperimentTitle>experimento-12-05-2021</ExperimentTitle>
        {/* TODO: Redirect to previous page */}
        <Button style={{width: 20, marginBottom: 10, backgroundColor: '#C4C4C4', color: 'black'}} onClick={() => history.goBack()}>Voltar</Button>
        
        <LineChart title='Temperatura ºC'  valueMax={40} time={7}/>
        
        <LineChart title='Pressão' valueMax={20} time={7}/>

        <BodyCard>
          <TextCard>Duração transiente com temperatura baixa: 00:10:00</TextCard>
          <TextCard>Duração com temperatura máxima fria: 00:05:00</TextCard>

          <TextCard>Duração transiente com temperatura baixa: 00:10:00</TextCard>
          <TextCard>Duração com temperatura máxima quente: 00:05:00</TextCard>
          
          <TextCard>Duração da câmara despressurizada: 00:10:00</TextCard>
          <TextCard>Duração total: 00:05:00</TextCard>
        </BodyCard>
        
        {/* TODO: Export data */}
        <ExcelFile
          filename="teste"
          element={
            <Button 
              style={{width: 20, alignSelf: 'end', marginTop: 10, backgroundColor: '#4c7291'}}
            >
              Exportar
            </Button>
          }
        >
          <ExcelSheet data={[{
            pressao: 'pressao',
            temperatura: 'temperatura',
            datetime: '2021-04-01T10:10:100'
          }]} name="teste">
            <ExcelColumn label="Pressao" value="pressao" />
            <ExcelColumn label="Temperatura" value="temperatura" />
            <ExcelColumn label="Datetime" value="datetime" />
          </ExcelSheet>
        </ExcelFile>
      </Body>

      <DialogRotation open={open} setOpen={setOpen} />
    </Container>
  );
}

export default History;