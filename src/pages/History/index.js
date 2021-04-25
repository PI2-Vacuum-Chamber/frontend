import React, { useState } from 'react';
import { SideBar, SideBarButton, Button } from '../../components';
import { useHistory } from "react-router-dom";
import { Img } from '../../assets';
import Switch from '../Experiment/SwitchButton';
import { DialogRotation } from '../../components';
import ReactExport from 'react-export-excel';

import { 
  Container, 
  Body, 
  Title, 
  BodyCard, 
  TextCard, 
  ExperimentTitle,
} from './styles';

const { ExcelFile } = ReactExport;
const { ExcelSheet, ExcelColumn } = ReactExport.ExcelFile;

const History = () => {
  const [selectedId, setSelectedId] = useState(-1);
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const history = useHistory();

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
        
        {/* TODO: include list of experiments to choose */}
        <SideBarButton 
          icon={Img.HISTORIC} 
          selected={4 === selectedId}
          onClick={() => history.push("/history")} 
        >
          Histórico de experimentos
        </SideBarButton>
      </SideBar>
      <Body>
        <Title>Histórico de Experimentos</Title>
        <ExperimentTitle>experimento-25-02-2021</ExperimentTitle>

        {/* TODO: Redirect to previous page */}
        <Button style={{width: 20, marginBottom: 10, backgroundColor: '#C4C4C4', color: 'black'}} onClick={() => history.goBack()}>Voltar</Button>
        
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