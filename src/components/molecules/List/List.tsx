import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';

export interface IList {
  items: (string | number)[];
}

const StyledList = styled.div`
  width: 100%;
  height: 100%;
`;

const List: React.FC<IList> = (props) => {
  return (
    <StyledList>
      {props.items.map((item) => (
        <ListItem content={item} />
      ))}
    </StyledList>
  );
};

export default List;
