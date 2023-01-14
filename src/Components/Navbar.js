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
        color="background"
      >
        <div className="gifLogoDiv">
          <img className="gifLogo" src="/gifWhite.svg" alt="gifLogo" />
        </div>
        <Typography color="primary" fontSize={'33px'}>
          Gif Expert
        </Typography>
      </AppBar>
    </Toolbar>
  );
};
