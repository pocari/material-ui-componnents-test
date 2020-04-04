import React from 'react';
import { theme } from 'theme'
import {CssBaseline, MuiThemeProvider } from '@material-ui/core'
import Sample from 'Sample';

function App() {
  return (
    <MuiThemeProvider theme={theme} >
      <CssBaseline />
      <Sample />
      </MuiThemeProvider>
  );
}

export default App;
