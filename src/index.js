import React from 'react';
import ReactDOM from 'react-dom';
import GifExpertApp from './Components/GifExpertApp';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NotFound404 } from './Components/NotFound404';
import { Navbar } from './Components/Navbar';

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
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<GifExpertApp />} />
        <Route path='*' element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);
