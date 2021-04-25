import React, { useState, useCallback } from 'react';
import { 
  SideBar, 
  SideBarButton, 
  MeasurerCards, 
  SideBarRight, 
  Button, 
  InputForm, 
  RedButton,
  DialogRotation
} from '../../components';
import { Img } from '../../assets';
import Switch from './SwitchButton';
import Progress from './Progress';
import { useHistory } from "react-router-dom";
import { DialogAlert } from '../../components'
import { 
  Container, 
  Body, 
  Title, 
  BodyCard, 
  TitleCard, 
  TextCard, 
  Icon, 
  InfoText, 
  ContextCard,
  ContainerForm,
} from './styles';


const Experiment = () => {
  const [selectedId, setSelectedId] = useState(-1);
  const [isProceed, setIsProceed] = useState(false);
  const [isTestProgress, setIsTestProgress] = useState(false);
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const [openRotate, setOpenRotate] = useState(false);
  const [maxTemp, setMaxTemp] = useState('');
  const [mimTemp, setMinTemp] = useState('');
  const [durMax, setDurMax] = useState('');
  const [durMin, setDurMin] = useState('');
  const [cicleHot, setCicleHot] = useState('');
  const [cicleCold, setCicleCold] = useState('');
  const history = useHistory();

  const handleTestModal = useCallback(() => {
    setOpen(false);
    setIsTestProgress(false);
    setIsProceed(false);
  }, []);
  
  return (
    <Container>
      <SideBar>
      <>
          <SideBarButton 
            icon={Img.MONOMETRO} 
            selected={1 === selectedId}
            onClick={() => setOpenRotate(true)}
          >
            Definir rotação
          </SideBarButton>

          <SideBarButton 
            icon={Img.FLASHLIGHT} 
            selected={2 === selectedId}
            onClick={() => setSelectedId(2)}
            button={
              <Switch
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
            }
          >
            Ligar a lâmpada solar
          </SideBarButton>

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
            
          {isTestProgress && (
            <RedButton
              selected={5 === selectedId}
              onClick={() => {
                setIsProceed(false);
                setIsTestProgress(false);
              }} 
            >
              Cancelar experimento 
            </RedButton>
          )}
        </>
      </SideBar>
      <Body>
        <Title>Teste de Ciclagem Térmica</Title>
        <MeasurerCards />
        
        {!isProceed && !isTestProgress && (
          <BodyCard>
            <ContextCard>
              <TitleCard>Orientações</TitleCard>

              <TextCard>
                1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </TextCard>

              <TextCard>
                2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </TextCard>
            </ContextCard>

            <Button 
              style={{width: 40, alignSelf: 'center'}} 
              onClick={() => {
                setIsProceed(true);
              }}>
                Prosseguir
              </Button>
          </BodyCard>
        )}

        {isProceed && !isTestProgress && (
          <ContainerForm>
            <TitleCard>Protocolo de teste</TitleCard>
    
            <InputForm
              label='Temperatura máxima (em ºC)'
              placeholder='Valor'
              value={maxTemp}
              onChange={(e) =>
                setMaxTemp(e.target.value.replace(/\D/,''))}
            />
            
            <InputForm
              label='Duração com temperatura máxima (em min):'
              placeholder='Duração'
              value={durMax}
              onChange={(e) =>
                setDurMax(e.target.value.replace(/\D/,''))}
            />

            <InputForm
              label='Temperatura mínima (em ºC)'
              placeholder='Valor'
              value={mimTemp}
              onChange={(e) =>
                setMinTemp(e.target.value.replace(/\D/,''))}
            />
            
            <InputForm
              label='Duração com temperatura mínima (em min):'
              placeholder='Duração'
              value={durMin}
              onChange={(e) =>
                setDurMin(e.target.value.replace(/\D/,''))}
            />

            <InputForm
              label='Quantidade de ciclos quentes (em unidades):'
              placeholder='Quantidade'
              value={cicleHot}
              onChange={(e) =>
                setCicleHot(e.target.value.replace(/\D/,''))}
            />

            <InputForm
              label='Quantidade de ciclos frios (em unidades):'
              placeholder='Quantidade'
              value={cicleCold}
              onChange={(e) =>
                setCicleCold(e.target.value.replace(/\D/,''))}
            />

            <Button 
              style={{alignSelf: 'center', marginTop: 20}} 
              onClick={() => {
                setIsTestProgress(true);
                setIsProceed(false);
                setOpen(true)
                // setTimeout(()=> setOpen(true), 5000);
              }}>
                Iniciar Teste
            </Button>
          </ContainerForm>
        )}

        {isTestProgress && (
          <BodyCard>
            <ContextCard>
              <TitleCard>Teste em andamento</TitleCard>
                <TextCard>
                  Aguarde enquanto o teste está sendo executado.
                </TextCard>
            {/* <Progress /> */}
            </ContextCard>
          </BodyCard>
        )}
        
      </Body>
        
        {isTestProgress ? (
          <SideBarRight>
            <Icon src={Img.PROGRESS} />
            <InfoText>Em andamento</InfoText>
            <Icon src={Img.CHRONOMETER} />
            <InfoText>00:00:00</InfoText>
          </SideBarRight>
        ):(
          <SideBarRight>
            <Icon src={Img.CHECK} />
            <InfoText>Pronto para simulação</InfoText>
          </SideBarRight>
        )}

      <DialogAlert open={open} setOpen={setOpen} handleTestModal={handleTestModal}/>
      <DialogRotation open={openRotate} setOpen={setOpenRotate} />

    </Container>
  );
}

export default Experiment;