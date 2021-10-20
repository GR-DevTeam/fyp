import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../app/hooks';
import { selectMenu } from '../../../features/menu/menuSlice';
import Link from '../../atoms/Link/Link';

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
