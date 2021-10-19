
import React from 'react'
import styled, { keyframes } from 'styled-components';

export interface ISkeleton {
  height: 's' | 'm' | 'l'
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  `;

const SkeletonAnimation = keyframes`
  0% { transform: translateX(-100%) }
  100% {transform: translateX(220%) }
  `

const StyledBar = styled.div<ISkeleton>`
  position: relative;
  height: ${props => (props.height === 'l') ? (props.theme.fontSizes.m) : (props.height === 'm') ? (props.theme.fontSizes.s) : (props.theme.fontSizes.xs)};
  width: 80%;
  background-color: ${props => props.theme.colors['grey-500']};
  margin: ${props => props.theme.fontSizes.xs} 0;
  overflow: hidden;
  &::after{
    content: '';
    position: absolute;
    height: 100%;
    width: 50%;
    top: 0;
    left: 0;
    background: linear-gradient(to right, ${props => props.theme.colors['grey-500']}, ${props => props.theme.colors.light} ,${props => props.theme.colors['grey-500']});
    transform: skewX(25deg);
    opacity: 0.6;
    animation: ${SkeletonAnimation} 1.5s infinite linear;
  }
`;

const Skeleton: React.FC<ISkeleton> = (props) => {
  return (
    <Wrapper>
      <StyledBar {...props} />
      <StyledBar {...props} />
      <StyledBar {...props} />
    </Wrapper>
  )
}

export default Skeleton
