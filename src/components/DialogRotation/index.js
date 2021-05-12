import React, { useCallback } from 'react';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import { Button } from '../../components';
import { Container, Title, Row, ContainerField } from './styles';
import api from '../../services/api';

export default function FormDialog({open, setOpen}) {
  const handleRotate = useCallback(async() => {
    try{
      await api.post(`/control/rotate/`);
      setOpen(false);
    }catch(err){
      console.log(err)
    }
  }, [setOpen])

  return (
    <Dialog 
      open={open} 
      onClose={() => setOpen(false)} 
      aria-labelledby="form-dialog-title"
      PaperProps={{ style: { borderRadius: 14 } }}
    >
      <Container>
        <Title>Rotação (em graus)</Title>

        <Row>
          <ContainerField
            style={{marginRight: 30}}
          >
            <TextField
              placeholder='Eixo X'
              type='number'
              InputProps={{
                style: {
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                  fontSize: 16
                },
                disableUnderline: true
              }}
            />
          </ContainerField>

          <ContainerField>
            <TextField
              placeholder='Eixo Y'
              type='number'
              InputProps={{
                style: {
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                  fontSize: 16
                },
                disableUnderline: true
              }}
            />
          </ContainerField>
        </Row>

        <Button style={{width: 40}} onClick={handleRotate}>Rotacionar</Button>
      </Container>  
    </Dialog>
  );
}
