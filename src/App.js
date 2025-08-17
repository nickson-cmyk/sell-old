import './App.css';
import Appbar from './container/Appbar'
import * as React from 'react';
import theme from './Asset/index';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Appbar/>
        <WhatsAppButton />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
