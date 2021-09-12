import React from 'react';
import styled from 'styled-components';

import Link from '../atoms/Link/Link';

import {
  faHome,
  faMap,
  faMapMarkerAlt,
  faPassport,
  faUserFriends,
} from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  height: 90%;
  width: 12.5%;
  background-color: ${(props) => props.theme.colors.dark};
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
  justify-content: left;
  align-items: center;
`;

const Sidebar = () => {
  return (
    <Wrapper>
      <Navigation>
        <NavItem>
          <Link icon={faHome} text={'Home'} />
        </NavItem>
        <NavItem>
          <Link icon={faMap} text={'Planning'} />
        </NavItem>
        <NavItem>
          <Link icon={faMapMarkerAlt} text={'Saved Places'} />
        </NavItem>
        <NavItem>
          <Link icon={faPassport} text={'Past Trips'} />
        </NavItem>
        <NavItem>
          <Link icon={faUserFriends} text={'About us'} />
        </NavItem>
      </Navigation>
    </Wrapper>
  );
};

export default Sidebar;
