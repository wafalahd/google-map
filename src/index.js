import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Utilisez 'createTheme' au lieu de 'createMuiTheme'
import App from './App';

const theme = createTheme({ // Utilisez 'createTheme' au lieu de 'createMuiTheme'
  palette: {
    primary: {
      main: '#ff0000',
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
