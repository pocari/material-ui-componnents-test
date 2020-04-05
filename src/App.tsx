import React from 'react';
import { theme } from 'theme'
import {CssBaseline, MuiThemeProvider } from '@material-ui/core'
import AppRouter from 'components/app_router';

function App() {
  return (
    <MuiThemeProvider theme={theme} >
      <CssBaseline />
      <AppRouter />
      </MuiThemeProvider>
  );
}

export default App;
