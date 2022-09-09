import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <Toolbar>
      <AppBar
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 5,
          py: 2,
        }}
        color='background'
      >
        <Link className='link' to={'/'}>
          <Typography color='primary' fontSize={'30px'}>
            GifApp
          </Typography>
        </Link>
        <Typography color='primary' fontSize={'25px'}>
          Tobias Ajras
        </Typography>
      </AppBar>
    </Toolbar>
  );
};
