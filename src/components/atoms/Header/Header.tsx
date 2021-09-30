import React from 'react';
import styled from 'styled-components';
export interface IHeader {
  size: 's' | 'm' | 'l';
  isLight?: boolean;
}

const StyledHeader = styled.header<IHeader>`
  font-size: ${(props) =>
    props.size === 's'
      ? props.theme.fontSizes.m
      : props.size === 'm'
      ? props.theme.fontSizes.l
      : props.theme.fontSizes.xl};
  color: ${(props) =>
    props.isLight ? props.theme.colors.light : props.theme.colors.dark};
`;
const Header: React.FC<IHeader> = (props) => {
  return <StyledHeader {...props}>{props.children}</StyledHeader>;
};

export default Header;
