import React from 'react';
import styled from 'styled-components';

import SidebarButton from '../SidebarButton/SidebarButton';

import {
  faHome,
  faMap,
  faMapMarkerAlt,
  faUserFriends,
} from '@fortawesome/free-solid-svg-icons';

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
        <NavItem>
          <SidebarButton icon={faHome} text={'Home'} />
        </NavItem>
        <NavItem>
          <SidebarButton icon={faMap} text={'Planning'} />
        </NavItem>
        <NavItem>
          <SidebarButton icon={faMapMarkerAlt} text={'Saved Places'} />
        </NavItem>
        <NavItem>
          {/*  No encontre el icono Vector  */}
          {/* <SidebarButton icon={faVector} text={'Past Trips'} /> */}
        </NavItem>
        <NavItem>
          <SidebarButton icon={faUserFriends} text={'About us'} />
        </NavItem>
      </Navigation>
    </Wrapper>
  );
};

export default Sidebar;
