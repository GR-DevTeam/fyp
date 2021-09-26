import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { getButtonVariants } from '../../../theme/util/colorVariants';

export interface IButton {
  icon?: IconDefinition | null;
  variant?: 'primary' | 'secondary';
  isInverted?: boolean;
  onClick?: (ev: MouseEvent<HTMLButtonElement>) => any;
}

const StyledButton = styled.button<IButton>`
  padding: ${(props) => props.theme.spacing.xxs} ${(props) => props.theme.spacing.xl};
  font-size: ${(props) => props.theme.fontSizes.m};
  border-radius: ${(props) => props.theme.radius.rounded};
  transition: all ease 0.3s;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.shadows.withShadow};
  outline: none;
  ${(props) => getButtonVariants(props.variant, props.isInverted)}
  &:hover {
  }
`;

const Button: React.FC<IButton> = (props) => {
  return (
    <StyledButton {...props} onClick={props.onClick}>
      {props.children}
    </StyledButton>
  );
};

Button.defaultProps = {
  icon: null,
  isInverted: false,
};

export default Button;
