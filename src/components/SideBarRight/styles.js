import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  width: 20vw;
  height: 100vh;
  background-color: ${colors.GRAY};
`;

export const Context = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 50px;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 40px 0px;
  align-items: center;
`;


export const Title = styled.span`
  font-size: 23px;
  color: ${colors.WHITE};
  margin-bottom: 5px;
  font-family: 'Montserrat-Medium';
`;

export const InfoText = styled.span`
  font-size: 18px;
  color: ${colors.WHITE};
  text-align: center;
`;
