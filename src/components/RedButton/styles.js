import styled, { css } from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 30px;
  flex-direction: row;
  text-align: center;
  
  cursor: pointer;
  background-color: ${colors.RED};

  ${props =>
    props.selected &&
    css`
      background-color: #8f1515;
    `}
`;

export const Title = styled.span`
  font-size: 15px;
  color: ${colors.WHITE};
  flex: 1
`;