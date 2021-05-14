import React from 'react';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

// import { Container } from './styles';

const SwitchButton = ({ ...rest }) => {
  const AntSwitch = withStyles((theme) => ({
    root: {
      width: 33,
      height: 20,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(12px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: '#56CCF2',
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 16,
      height: 16,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 18 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  }))(Switch);

  return (
    <AntSwitch {...rest} />
  );
}

export default SwitchButton;