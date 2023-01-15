import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar'
import { Typography, SxProps, Theme, Box } from '@mui/material';

const sxToolbar: SxProps<Theme> = (theme) => ({
  display: 'grid',
  gridTemplateColumns: '1fr auto auto',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    pl: 1,
    pr: 1,
  },
});

const sxTitle: SxProps<Theme> = (theme) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: theme.typography.caption.fontSize,
  },
});

const HeaderView: React.FC = () => {
  return (
    <>
        <AppBar>
          <Toolbar sx={sxToolbar}>
            <Typography sx={sxTitle} noWrap>React Till Now</Typography>
          </Toolbar>
        </AppBar>
    </>
  );
};

export default HeaderView;
