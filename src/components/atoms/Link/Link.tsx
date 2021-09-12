import React from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
export interface ILink {
  text: string;
  icon?: IconDefinition;
  color: string;
}

const StyledLink = styled.button<ILink>`
  color: ${(props) => props.color};
  background: none;
  cursor: pointer;
  border: none;
  display: flex;
  justify-content: top;
  align-items: center;
  font-size: 1.4rem;
  padding: 1rem;
  :hover {
    transition: all 0.3s ease;
    color: ${(props) => props.theme.colors.primary};
    transform: translateX(10px);
  }
`;
const Text = styled.div`
  padding-left: 0.4rem;
`;

const SidebarButton: React.FC<ILink> = (props) => {
  return (
    <StyledLink {...props}>
      <FontAwesomeIcon icon={props.icon as IconDefinition} />
      <Text>{props.text}</Text>
    </StyledLink>
  );
};

export default SidebarButton;
