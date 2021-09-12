import React from 'react';
import styled, { css } from 'styled-components';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export interface IButton {
  icon?: IconDefinition | null;
  isPrimary: boolean;
  isInverted: boolean;
}

let primaryAndInverted = (props: any) => css`
  border: 2px solid ${props.theme.colors.primary};
  background-color: ${props.theme.colors.light};
  color: ${props.theme.colors.primary};
`;
let primaryAndNotInverted = (props: any) => css`
  border: 1px solid #0001;
  background-color: ${props.theme.colors.primary};
  color: ${props.theme.colors.light};
`;
let notPrimaryAndInverted = (props: any) => css`
  border: 1px solid ${props.theme.colors.light};
  background-color: ${props.theme.colors['grey-200']};
  color: ${props.theme.colors.light};
`;
let notPrimaryAndNotInverted = (props: any) => css`
  border: 1px solid #0002;
  background-color: ${props.theme.colors.light};
  color: ${props.theme.colors.dark};
`;

// TODO: Make an util for properties when different styles on same component
const StyledButton = styled.button<IButton>`
  padding: 1rem 3.5rem;
  font-size: 1rem;
  box-shadow: 0.5rem 0.25rem 0.5rem #0002;
  font-weight: bold;
  border-radius: 5px;
  transition: all ease 0.2s;
  ${(props) =>
    props.isPrimary
      ? props.isInverted
        ? primaryAndInverted(props)
        : primaryAndNotInverted(props)
      : props.isInverted
      ? notPrimaryAndInverted(props)
      : notPrimaryAndNotInverted(props)}
  &:hover {
    cursor: pointer;
    transform: translateY(0.05rem);
    background-color: ${(props) =>
      props.isPrimary
        ? props.isInverted
          ? props.theme.colors.primary
          : '#cd6c13'
        : props.isInverted
        ? props.theme.colors['grey-100']
        : props.theme.colors['grey-300']};
    color: ${(props) =>
      props.isPrimary
        ? props.isInverted
          ? props.theme.colors.light
          : props.theme.colors.light
        : props.isInverted
        ? props.theme.colors.light
        : props.theme.colors.light};
  }
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
