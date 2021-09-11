import React from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
export interface ISidebarButton {
  text?: string;
  icon: IconDefinition;
}

const StyledSidebarButton = styled.button`
  color: white;
  cursor: pointer;
  border: none;
  background: none;
  display: flex;
  justify-content: top;
  align-items: center;
  font-size: 2rem;
  padding: 1rem 1rem;
  :hover {
    transition: all 0.3s ease;
    /* color: {(props) => props.theme.colors.primary}; */
    color: #fe8f29;
    transform: translateX(10px);
  }
`;
const Text = styled.div`
  padding-left: 0.4rem;
  padding-bottom: 0.5rem;
`;

const SidebarButton: React.FC<ISidebarButton> = (props) => {
  return (
    <StyledSidebarButton>
      <FontAwesomeIcon icon={props.icon} />
      <Text>{props.text}</Text>
    </StyledSidebarButton>
  );
};

export default SidebarButton;
