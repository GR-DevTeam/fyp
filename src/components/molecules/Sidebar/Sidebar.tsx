import React from 'react';
import styled from 'styled-components';
<<<<<<< HEAD
import Link, { ILink } from '../../atoms/Link/Link';

export interface ILinkContainer {
  items: ILink[];
}
=======
import { useAppSelector } from '../../../app/hooks';
import { selectMenu } from '../../../features/menu/menuSlice';
import Link from '../../atoms/Link/Link';
>>>>>>> origin/master

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

const Sidebar: React.FC = () => {
  const items = useAppSelector(selectMenu);
  return (
    <Wrapper>
      {items.map((item) => (
        <Link {...item} />
      ))}
    </Wrapper>
  );
};

export default Sidebar;
