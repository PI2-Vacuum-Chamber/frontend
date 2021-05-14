import React, { useState, useCallback, useRef } from 'react';
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
import StopWatch from './StopWatch';
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

import api from '../../services/api';

const Experiment = () => {
  const [selectedId, setSelectedId] = useState(-1);
  const [isProceed, setIsProceed] = useState(false);
  const [isTestProgress, setIsTestProgress] = useState(false);
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const [openNewTest, setOpenNewTest] = useState(false);
  const [openRotate, setOpenRotate] = useState(false);
  const [maxTemp, setMaxTemp] = useState('');
  const [mimTemp, setMinTemp] = useState('');
  const [durMax, setDurMax] = useState('');
  const [durMin, setDurMin] = useState('');
  const [cicleHot, setCicleHot] = useState('');
  const [cicleCold, setCicleCold] = useState('');
  const [ln2, setLn2] = useState(100);
  const [gn2, setGn2] = useState(100);
  const [testId, setTestId] = useState(null);
  const history = useHistory();
  const timer = useRef(null);
  const increment = useRef(null);

  const handleTestModal = useCallback(() => {
    setOpen(false);
    setOpenNewTest(true);
  }, []);

  const handleNewTest = useCallback(() => {
    setOpenNewTest(false);
    setIsTestProgress(false);
    setIsProceed(false);
  }, []);

  const handleTeste = useCallback(async() => {
    try{
      if(ln2 - (cicleCold * 25) < 0 || gn2 - (cicleHot * 25) < 0){
        alert('Nível do tanque é inválido para a quantidade de ciclos');
        return;
      }
      const response = await api.post('/control/start', {
        tempMax: Number(maxTemp),
        timeTempMax: Number(durMax),
        tempMin: Number(mimTemp),
        timeTempMin: Number(durMin),
        qtdeCiclesMax: Number(cicleHot),
        qtdeCiclesMin: Number(cicleCold),
      });
      setTestId(response.data.data)
      setIsTestProgress(true);
      setIsProceed(false);

      if(ln2 > 0) {
        const newLn2 = ln2 - (cicleCold * 25);
        setLn2(newLn2.toFixed(0));
      }
      
      if(gn2 > 0) {
        const newGn2 = gn2 - (cicleHot * 25);
        setGn2(newGn2.toFixed(0));
      }

      timer.current = setTimeout(() => {
        setOpen(true);
        clearInterval(increment.current);
      }, Number(durMax * 1000) + Number(durMin * 1000));

    }catch(err){
      console.log(err)
    }
  }, [durMax, durMin, cicleCold, cicleHot, maxTemp, mimTemp, ln2, gn2])

  const handleCancel = useCallback(async() => {
    try{
      await api.post(`/control/finish/${testId}`);
      setIsTestProgress(false);
      setIsProceed(false);
      clearTimeout(timer.current)
    }catch(err){
      console.log(err)
    }
  }, [testId])
  
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
              onClick={handleCancel} 
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
                1. É possível, conforme sua necessidade, realizar teste de vácuo quente, vácuo frio, ciclagem térmica e simulação espacial.
              </TextCard>

              <TextCard>
              2. Os tipos de teste são determinados mediante inserção dos parâmetros no formulário ao clicar no botão abaixo.
              </TextCard>

              <TextCard>
              3. A seguir, alguns parâmetros que definem o tipo do teste: 
              <br></br>Para o teste de Vácuo QUENTE, basta inserir "1" no campo de "ciclos quentes e "0" no de "ciclos frios".
              </TextCard>

              <TextCard>
              4. Para o teste de Vácuo FRIO, basta inserir "0" no campo de "ciclos quentes e "1" no de "ciclos frios".
              </TextCard>

              <TextCard>
              5. Para o teste de CICLAGEM TÉRMICA, basta inserir dados em todos os transientes (frios e quentes). O limite de ciclos quentes e frios é "4", para cada um.
              </TextCard>

              <TextCard>
              5. Para o teste de SIMULAÇÃO ESPACIAL, basta inserir dados em todos os campos, e em específico, que nos campos de "ciclos quentes" e "ciclos frios" seja inserido "1".
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
              onClick={handleTeste}>
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
          <SideBarRight ln2={ln2} gn2={gn2}>
            <Icon src={Img.PROGRESS} />
            <InfoText>Em andamento</InfoText>
            <Icon src={Img.CHRONOMETER} />
            <StopWatch increment={increment}/>

            <Icon src={Img.ALERT} />
            <InfoText>Economia de energia</InfoText>
          </SideBarRight>
        ):(
          <SideBarRight ln2={ln2} gn2={gn2}>
            <Icon src={Img.CHECK} />
            <InfoText>Pronto para simulação</InfoText>

            <Icon src={Img.ALERT} />
            <InfoText>Economia de energia</InfoText>
          </SideBarRight>
        )}

      <DialogAlert open={open} setOpen={setOpen} handleTestModal={handleTestModal} textModal='Teste finalizado com sucesso !'/>
      <DialogAlert open={openNewTest} setOpen={setOpenNewTest} handleTestModal={handleNewTest} textModal='Deseja realizar outro teste ?'/>
      <DialogRotation open={openRotate} setOpen={setOpenRotate} />

    </Container>
  );
}

export default Experiment;