import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import GlobalStyle from './theme/GlobalStyle';
import Sidebar from './components/molecules/Sidebar/Sidebar';
import Dialog from './components/molecules/Dialog/Dialog';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className='App'>
        <Sidebar />
      </div>
    </ThemeProvider>
  );
}

export default App;
