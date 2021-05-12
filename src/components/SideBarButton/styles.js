import styled, { css } from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 30px;
  flex-direction: row;
  align-items: center;
  cursor: pointer; 

  ${props =>
    props.selected &&
    css`
      background-color: #222E3B;
    `}
`;

export const Title = styled.span`
  font-size: 15px;
  color: ${colors.WHITE};
  flex: 1;
`;

export const Icon = styled.img`
  width: 35px;
  height: 35px;
  object-fit: contain;
  margin-right: 10px;
`;