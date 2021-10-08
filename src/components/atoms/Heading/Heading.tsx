import React from 'react';
import styled from 'styled-components';
export interface IHeading {
  size: 's' | 'm' | 'l';
  isLight?: boolean;
}

const StyledHeading = styled.h2<IHeading>`
  font-size: ${(props) =>
    props.size === 's'
      ? props.theme.fontSizes.m
      : props.size === 'm'
      ? props.theme.fontSizes.l
      : props.theme.fontSizes.xl};
  color: ${(props) =>
    props.isLight ? props.theme.colors.light : props.theme.colors.dark};
`;
const Heading: React.FC<IHeading> = (props) => {
  return <StyledHeading {...props}>{props.children}</StyledHeading>;
};

export default Heading;
