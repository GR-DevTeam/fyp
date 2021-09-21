import React from 'react';
import styled from 'styled-components';
import Link, { ILink } from '../../atoms/Link/Link';

export interface ILinkContainer {
  items: Array<ILink>;
}

const Wrapper = styled.div`
  grid-area: sidebar;
  height: 100%;
  width: auto;
  background-color: ${(props) => props.theme.colors.dark};
  display: flex;
  flex-direction: column;
  justify-items: space-around;
  align-items: center;
`;

const Sidebar: React.FC<ILinkContainer> = (props) => {
  return (
    <Wrapper>
      {props.items.map((item) => (
        <Link
          icon={item.icon}
          text={item.text}
          color={item.color}
          onHoverColor={item.onHoverColor}
        />
      ))}
    </Wrapper>
  );
};

export default Sidebar;
