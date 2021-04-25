import React, { useState, useCallback } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Container, Header, Title, VerticalContainer, Circle, IndicatorNumber } from './styles';


function Card({ controls, options, title }) { 
  const [isVisible, setIsVisible] = useState(false);
  const [option, setOption] = useState(options[0].value);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = useCallback((event) => {
    setIsVisible(true);
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback((value) => {
    if(typeof value === 'string'){
      setOption(value);
    }
    setIsVisible(false);
  }, []);

  return (
    <Container elevation={5}>
      <Header>
        <Title>{title} ({option})</Title>

        <VerticalContainer onClick={handleClick} aria-controls={controls} aria-haspopup="true">
          <Circle />
          <Circle />
          <Circle />
        </VerticalContainer>

        <Menu
          id={controls}
          anchorEl={anchorEl}
          keepMounted
          open={isVisible}
          onClose={handleClose}
        >
          {options.map((item, index)=> <MenuItem style={{fontSize: 15}} key={index} onClick={()=> handleClose(item.value)}>{item.label}</MenuItem>)}
        </Menu>
      </Header>

      <IndicatorNumber>21.0</IndicatorNumber>
    </Container>
  );
}

export default Card;