import React from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
export interface ILink {
  text: string;
  icon: IconDefinition;
}

const StyledLink = styled.button`
  color: white;
  cursor: pointer;
  border: none;
  background: none;
  display: flex;
  justify-content: top;
  align-items: center;
  font-size: 1.4rem;
  padding: 1rem;
  :hover {
    transition: all 0.3s ease;
    //color: {(props) => props.theme.colors.primary};
    color: #fe8f29;
    transform: translateX(10px);
  }
`;
const Text = styled.div`
  padding-left: 0.4rem;
`;

const SidebarButton: React.FC<ILink> = (props) => {
  return (
    <StyledLink>
      <FontAwesomeIcon icon={props.icon} />
      <Text>{props.text}</Text>
    </StyledLink>
  );
};

export default SidebarButton;
