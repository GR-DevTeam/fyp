import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import InputText from './components/shared/InputText/InputText';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import GlobalStyle from './theme/GlobalTheme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className='App'>
        <InputText icon={faSearch} />
        {/* Aca van para testear los componentes hasta que Dani termine el #9 */}
      </div>
    </ThemeProvider>
  );
}

export default App;
