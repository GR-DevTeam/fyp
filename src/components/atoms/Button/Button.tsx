import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { getButtonVariants } from '../../../theme/util/colorVariants';

export interface IButton {
  icon?: IconDefinition | null;
  variant?: 'primary' | 'secondary';
  isInverted?: boolean;
  isRounded?: boolean;
  onClick?: (ev: MouseEvent<HTMLButtonElement>) => any;
}

const StyledButton = styled.button<IButton>`
  padding: ${(props) => props.theme.spacing.xxs} ${(props) => props.theme.spacing.xl};
  font-size: ${(props) => props.theme.fontSizes.m};
  border-radius: ${(props) =>
    props.isRounded ? props.theme.radius.rounded : props.theme.radius.squared};
  transition: all ease 0.3s;
  cursor: pointer;
  ${(props) => getButtonVariants(props.variant, props.isInverted)};
  &:hover {
    box-shadow: ${(props) => props.theme.shadows.withShadow};
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
