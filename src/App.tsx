import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import GlobalStyle from './theme/GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        {/* Aca van para testear los componentes hasta que Dani termine el #9 */}
      </div>
    </ThemeProvider>
  );
}

export default App;
