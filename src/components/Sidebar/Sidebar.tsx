import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 90%;
  width: 15%;
  background-color: #0e0d0b;
  display: grid;
  align-items: center;
`;

const Navigation = styled.ul`
  height: 40%;
  width: 100%;
  margin-block: 0;
  padding-inline: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
`;

const NavItem = styled.li`
  width: 90%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Sidebar = () => {
  return (
    <Wrapper>
      <Navigation>
        <NavItem>{/* component */}</NavItem>
        <NavItem>{/* component */}</NavItem>
        <NavItem>{/* component */}</NavItem>
        <NavItem>{/* component */}</NavItem>
        <NavItem>{/* component */}</NavItem>
      </Navigation>
    </Wrapper>
  );
};

export default Sidebar;
