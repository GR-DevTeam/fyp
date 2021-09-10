import React from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar/Sidebar';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

function App() {
  return (
    <Wrapper>
      <Sidebar />
      {/* Aca van para testear los componentes hasta que Dani termine el #9 */}
    </Wrapper>
  );
}

export default App;
