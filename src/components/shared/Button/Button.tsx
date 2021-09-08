import React from 'react';
import styled from 'styled-components';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export interface IButton {
  icon?: IconDefinition | null;
  isPrimary: boolean;
  isInverted: boolean;
}

const StyledButton = styled.button<IButton>`
  padding: 1rem 3.5rem;
  font-size: 1rem;
  box-shadow: 0.5rem 0.25rem 0.5rem #0002;
  font-weight: bold;
  border: ${(props) =>
    props.isPrimary
      ? props.isInverted
        ? `2px solid ${props.theme.colors.primary}`
        : '1px solid #0001'
      : props.isInverted
      ? `1px solid ${props.theme.colors.light}`
      : `1px solid #0002`};
  border-radius: 5px;
  background-color: ${(props) =>
    props.isPrimary
      ? props.isInverted
        ? props.theme.colors.light
        : props.theme.colors.primary
      : props.isInverted
      ? props.theme.colors['grey-200']
      : props.theme.colors.light};
  color: ${(props) =>
    props.isPrimary
      ? props.isInverted
        ? props.theme.colors.primary
        : props.theme.colors.light
      : props.isInverted
      ? props.theme.colors.light
      : props.theme.colors.dark};
`;

const Button: React.FC<IButton> = ({ isPrimary, isInverted, children }) => {
  return (
    <StyledButton isPrimary={isPrimary} isInverted={isInverted}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  icon: null,
  isPrimary: false,
  isInverted: false,
};

export default Button;
