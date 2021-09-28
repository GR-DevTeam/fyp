import React from 'react';
import styled from 'styled-components';

export interface IText {
  size: 's' | 'm' | 'l';
  isLight?: boolean;
}

const StyledText = styled('p')<IText>`
  font-size: ${(props) =>
    props.size === 's'
      ? props.theme.fontSizes.s
      : props.size === 'm'
      ? props.theme.fontSizes.m
      : props.theme.fontSizes.l};
  color: ${(props) =>
    props.isLight ? props.theme.colors.light : props.theme.colors.dark};
`;

const Text: React.FC<IText> = (props) => {
  return <StyledText {...props}>{props.children}</StyledText>;
};

export default Text;
