import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import GlobalStyle from './theme/GlobalStyle';
import Navbar from './components/molecule/Navbar/Navbar';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className='App'>
        <Navbar/>
      </div>
    </ThemeProvider>
  );
}

export default App;
