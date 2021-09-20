import React from 'react';
import styled from 'styled-components';
import Link, { ILink } from '../../atoms/Link/Link';

export interface ILinkContainer {
  data: Array<ILink>;
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.dark};
  display: grid;
  place-items: center;
  grid-area: sidebar;
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

const Sidebar: React.FC<ILinkContainer> = (props) => {
  return (
    <Wrapper>
      <Navigation>
        {props.data.map((item) => (
          <NavItem>
            <Link
              icon={item.icon}
              text={item.text}
              color={item.color}
              onHoverColor={item.onHoverColor}
            />
          </NavItem>
        ))}
      </Navigation>
    </Wrapper>
  );
};

export default Sidebar;
