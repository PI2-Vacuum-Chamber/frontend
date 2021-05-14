import React from 'react';
// import Button from './SearchButton';
import {  Container, LabelError, Label } from './styles';
import { TextField } from '@material-ui/core';


const InputForm = ({
  placeholder,
  name,
  hasError,
  type,
  style,
  label,
  ...rest
}) => {
  return (
    <>
      {label && <Label>{label}</Label>}
      <Container>
        <TextField
          placeholder={placeholder}
          name={name}
          type={type}
          {...rest}
          InputProps={{
            style: {
              backgroundColor: 'transparent',
              boxShadow: 'none',
              fontSize: 16
            },
            disableUnderline: true
          }}
        />
      </Container>
      {hasError && <LabelError>{hasError}</LabelError>}
    </>
  );
};

export default InputForm;
