import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import colors from '../../styles/colors';

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


export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;


export const Title = styled.span`
  font-size: 20px;
  text-align: center;
  margin: 20px 0px 60px;
`;

export const BodyCard = styled(Paper)`
  && {
    display: flex;
    padding: 40px;
    border-radius: 5px;
    width: 100%;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`;

export const ContextCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerForm = styled.div`
  display: flex;
  padding: 40px;
  width: 100%;
  flex-direction: column;
  max-height: 60vh;
  overflow-y: scroll;
`;

export const TitleCard = styled.span`
  font-size: 20px;
  font-family: 'Montserrat-SemiBold';
  margin-bottom: 40px;
`;

export const TextCard = styled.span`
  font-size: 15px;
  font-family: 'Montserrat-Medium';
  margin-bottom: 20px;
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`;

export const InfoText = styled.span`
  font-size: 18px;
  color: ${colors.WHITE};
  text-align: center;
  margin: 10px 40px;
`;

