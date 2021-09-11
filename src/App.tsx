import React from 'react';

import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import GlobalStyle from './theme/GlobalTheme';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Sidebar />
      </div>
    </ThemeProvider>
  );
}

export default App;
