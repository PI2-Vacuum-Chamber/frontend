import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  width: 15vw;
  border-radius: 10px;
  transition: ease-in-out, width 0.5s;
  flex-direction: row;
  background-color: ${colors.WHITE};
  padding: 12px;
  margin-bottom: 10px;
`;

export const LabelError = styled.label`
  display: flex;
  color: red;
  font-size: 13px;
`;

export const Label = styled.span`
  font-size: 15px;
  margin: 15px 0px;
  font-family: 'Montserrat';
`;