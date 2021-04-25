import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import { Button } from '../../components';
import { Container, Title, Row, ContainerField } from './styles';

export default function FormDialog({open, setOpen}) {
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

        <Button style={{width: 40}} onClick={() => setOpen(false)}>Rotacionar</Button>
      </Container>  
    </Dialog>
  );
}
