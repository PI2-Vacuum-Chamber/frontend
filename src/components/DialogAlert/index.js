import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { Button } from '../../components';
import { Container, Title } from './styles';
import CloseIcon from '@material-ui/icons/Close';

export default function DialogAlert({open, setOpen, handleTestModal}) {
  return (
    <Dialog 
      open={open} 
      onClose={() => setOpen(false)} 
      aria-labelledby="form-dialog-title"
      PaperProps={{ style: { borderRadius: 14 } }}
    >
      <Container>
        <CloseIcon 
          style={{ fontSize: 32, backgroundColor: '#C4C4C4', borderRadius: 5, alignSelf: 'flex-end', cursor: 'pointer' }}
          onClick={handleTestModal}
        />
        <Title>Teste finalizado com sucesso !</Title>

        <Button 
          style={{width: 40, alignSelf: 'center'}}
          onClick={handleTestModal}
        >ok</Button>
      </Container>  
    </Dialog>
  );
}
