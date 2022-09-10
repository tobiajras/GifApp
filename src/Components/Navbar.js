import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

export const Navbar = () => {
  return (
    <Toolbar>
      <AppBar
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          px: 5,
          py: 2,
        }}
        color='background'
      >
        <Typography color='primary' fontSize={'35px'}>
          Gif App
        </Typography>
      </AppBar>
    </Toolbar>
  );
};
