import { Alert, AlertTitle, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound404 = () => {
  return (
    <>
      <Alert severity='error'>
        <AlertTitle>Error 404</AlertTitle>
        Sorry, the page you're searching for doesn't exist
      </Alert>
      <Link className='link' to={'/'}>
        <Button sx={{ mt: 2 }} variant='contained'>
          Go Home
        </Button>
      </Link>
    </>
  );
};
