import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

export interface IRating {
  value: 1 | 2 | 3 | 4 | 5;
}

const Icon = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.colors.primary};
  background: transparent;
  flex: 0 0;
  padding: 1rem;
  transition: all ease 0.3s;
  &:hover {
    transform: scale(1.3);
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: transparent;
  width: fit-content;
  transition: all ease 0.3s;
`;
const Rating: React.FC<IRating> = (props) => {
  return (
    <Wrapper {...props}>
      <Icon icon={props.value >= 1 ? faStarSolid : faStar} />
      <Icon icon={props.value >= 2 ? faStarSolid : faStar} />
      <Icon icon={props.value >= 3 ? faStarSolid : faStar} />
      <Icon icon={props.value >= 4 ? faStarSolid : faStar} />
      <Icon icon={props.value >= 5 ? faStarSolid : faStar} />
    </Wrapper>
  );
};

export default Rating;
