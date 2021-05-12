import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

export const Container = styled(Paper)`
  && {
    padding: 10px;
    border-radius: 5px;
    max-width: 15vw;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px 5px 10px;
  justify-content: space-between;
`;

export const Title = styled.span`
  font-size: 15px;
`;

export const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30px;
  margin-left: 20px;
  cursor: pointer;
`;

export const Circle = styled.div`
  display: flex;
  width: 6px;
  height: 6px;
  background-color: #C4C4C4;
  border-radius: 10px;
`;

export const IndicatorNumber = styled.span`
  font-size: 40px;
  margin: 0px 20px;
  font-family: 'Montserrat-SemiBold';
`;