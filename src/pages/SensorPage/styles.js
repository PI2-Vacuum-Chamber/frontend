import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

export const Body = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px 5vw;
  background-color: #F2F2F2;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top : 30px;
`;

export const Title = styled.span`
  font-size: 20px;
  text-align: center;
  margin: 20px 0px 60px;
`;

export const ContainerSensor = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100px;
  margin: 0px 40px 50px 0px;
  align-items: center;
`
export const TitleSensor = styled.span`
  font-size: 18px;
  text-align: center;
  font-family: 'Montserrat-SemiBold';
`;

export const DescriptionText = styled.span`
  font-size: 16px;
  text-align: center;
  font-family: 'Montserrat-SemiBold';
  color: #F82F2F;
`;

export const SensorIcon = styled.img`
  width: 50px;
  margin: 15px;
`;