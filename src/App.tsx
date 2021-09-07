import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import InputText from './components/shared/InputText/InputText';

function App() {
  return (
    <div className='App'>
      <InputText icon={faSearch} />
      {/* Aca van para testear los componentes hasta que Dani termine el #9 */}
    </div>
  );
}

export default App;
