import styled from 'styled-components';
import { Button, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import colors from '../../styles/colors';

export const Container = styled.div``;

export const ButtonContainer = styled(Button)`
  && {
    color: ${colors.WHITE};
    background-color: ${colors.PRIMARY};
    font-size: 14px;
    padding: 10px 100px;
    border-radius: 10px;
    height: 48px;
    font-family: 'Montserrat';
  }
  &&:hover {
    background-color: ${colors.PRIMARY};
  }
`;

export const useStyles = makeStyles({
  button: {
    background: colors.PRIMARY,
  },
  label: {
    textTransform: 'capitalize',
    fontSize: 16,
  },
});

export const Loading = styled(CircularProgress)`
  && {
    color: white;
  }
`;
