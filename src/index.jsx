import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { green, red } from '@mui/material/colors'
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    success: {
      main: green[700],
    },

    error: {
      main: red[700],
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
