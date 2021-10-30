import React from 'react';
import styled from 'styled-components';

export interface IListItem {
  content: string | number;
}

const Wrapper = styled.div`
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes.m};
  display: flex;
  justify-content: center;
  padding: ${(props) => props.theme.measures.xxs};
  border-bottom: ${(props) => props.theme.colors['grey-500']} 1px solid;
  transition: all ease 0.2s;
  &:hover {
    background-color: ${(props) => props.theme.colors.light};
  }
`;

const ListItem: React.FC<IListItem> = (props) => {
  return <Wrapper>{props.content}</Wrapper>;
};

export default ListItem;
