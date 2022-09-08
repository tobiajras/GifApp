import React from 'react';
import ReactDOM from 'react-dom';
import GifExpertApp from './Components/GifExpertApp';
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#F2CA52',
      dark: '#F2B749',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#A68D60',
      dark: '#594C34',
    },
    background: {
      main: '#0D0D0D',
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GifExpertApp />
  </ThemeProvider>,
  document.getElementById('root')
);
