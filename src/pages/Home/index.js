import React, { useState } from 'react';
import { SideBar, SideBarButton, MeasurerCards, SideBarRight } from '../../components';
import { Img } from '../../assets';
import { useHistory } from "react-router-dom";

import { Container, Body, Title, BodyCard, TitleCard, TextCard, Icon, InfoText } from './styles';

const Home = () => {
  const [selectedId, setSelectedId] = useState(-1);
  const [isPressure, setIsPressure] = useState(true);

  const history = useHistory();

  return (
    <Container>
      <SideBar>
        <>
        {isPressure ? (
          <SideBarButton 
            icon={Img.MONOMETRO} 
            selected={1 === selectedId}
            onClick={() => setIsPressure(false)}
          >
          Despressurizar câmara
        </SideBarButton>
        ):(
        <>
          <SideBarButton 
            icon={Img.MONOMETRO} 
            selected={2 === selectedId}
            onClick={() => setIsPressure(true)}
          >
            Voltar câmara a pressão ambiente
          </SideBarButton>

          <SideBarButton 
            icon={Img.TEST} 
            selected={3 === selectedId}
            onClick={() => history.push("/experiment")} 
          >
            Teste de ciclagem térmica
          </SideBarButton>
        </>
        )}
          <SideBarButton 
            icon={Img.SENSOR} 
            selected={4 === selectedId}
            onClick={() => history.push("/sensors")} 
          >
            Sensores
          </SideBarButton>

          <SideBarButton 
            icon={Img.HISTORIC} 
            selected={5 === selectedId}
            onClick={() => history.push("/history")} 
          >
            Histórico de experimentos
          </SideBarButton>
        </>
      </SideBar>
      <Body>
        <Title>Painel de Monitoramento de Testes</Title>
        <MeasurerCards />

        <BodyCard>
          <TitleCard>Orientações</TitleCard>

          <TextCard>
            1. É possível, conforme sua necessidade, realizar teste de vácuo quente, vácuo frio, ciclagem térmica e simulação espacial.
          </TextCard>

          <TextCard>
            2. Os tipos de teste são determinados mediante inserção dos parâmetros no formulário disposto ao clicar em "Despressurizar câmara" e "Teste de ciclagem térmica".
          </TextCard>

          <TextCard>
            3. Ícones e valores localizados na direita, sinalizarão durante todo o processo o andamento do estado da câmara e seus experimentos.
          </TextCard>

          <TextCard>
            4. Também é possível visualizar as temperaturas e a pressão média envolvidas nos cartões acima.
          </TextCard>

        </BodyCard>
      </Body>

        {isPressure ? (
          <SideBarRight ln2={100} gn2={100}>
            <Icon src={Img.CLOSE} />
            <InfoText>Não pronto para simulação</InfoText>
          </SideBarRight>
        ):(
          <SideBarRight ln2={100} gn2={100}>
            <Icon src={Img.CHECK} />
            <InfoText>Pronto para simulação</InfoText>
          </SideBarRight>
        )}

    </Container>
  );
}

export default Home;