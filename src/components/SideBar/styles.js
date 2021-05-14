import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  width: 20vw;
  height: 100vh;
  background-color: ${colors.SECONDARY};
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 20px;
  flex-direction: column;
`;

export const Logo = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 10px;
`;

export const Title = styled.span`
  font-size: 18px;
  color: ${colors.WHITE};
`;

export const Context = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 40px;
`;