import React from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
export interface ISidebarButton {
  text?: string;
  icon: IconDefinition;
}
const Wrapper = styled.div`
  cursor: pointer;
  padding: 1rem 1rem;
  :hover {
    transition: all 0.3s ease;
    color: ${(props) => props.theme.colors.primary};
    transform: translateX(10px);
  }
`;
const Icon = styled(FontAwesomeIcon)`
  background: none;
`;

const StyledSidebarButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  font-size: 2rem;
`;

const SidebarButton: React.FC<ISidebarButton> = (props) => {
  return (
    <Wrapper>
      <Icon icon={props.icon} />
      <StyledSidebarButton>{props.text}</StyledSidebarButton>
    </Wrapper>
  );
};

export default SidebarButton;
