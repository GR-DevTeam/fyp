import React from 'react'
import styled from 'styled-components';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { NavLink } from 'react-router-dom';

import theme from '../../../theme/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface IBreadcrumbItem {
  icon: IconDefinition,
  content?: string,
  to: string,
}

const topBorders = `inset 0px -7px 0px -6px ${theme.colors['grey-400']}, inset 0px 7px 0px -6px ${theme.colors['grey-400']}`;

const ArrowItem = styled(NavLink).attrs((props) => ({
    className: props.className
  }))`
  width: fit-content;
  height: ${props => props.theme.measures.m};
  background-color: ${props => (props.to === '/home') ? props.theme.colors.light : props.theme.colors['grey-600']};
  position: relative;
  margin-right: ${props => props.theme.spacing.xxs};
  padding: 0 ${props => props.theme.spacing.xs} ;
  font-size: ${props => props.theme.fontSizes.m};
  box-shadow: ${topBorders};
  text-decoration: none;
  line-height: 180%;
  transition: all .3s ease;
  color: ${props => (props.to === '/home') ? props.theme.colors.secondary : props.theme.colors['grey-200']};
  &::after, &::before{
    content: '';
    position: absolute;
    top: 0;
    background-color: ${props => (props.to === '/home') ? props.theme.colors.light : props.theme.colors['grey-600']};
    height: ${props => props.theme.spacing.m};
    transition: all .3s ease;
  }
  &::after{
    right: 0;
    transform: translateY(-1px) translateX(25%) rotateY(0) rotate(45deg);
    z-index: -1;
    border-radius: 3px;
    border: 1px solid ${props => props.theme.colors['grey-400']};
    width: ${props => props.theme.spacing.m};
  }
  &::before{
    transform: translateX(-125%);
    z-index: -2;
    box-shadow: ${topBorders};
    width: ${props => (props.to === '/home') ? 0 : props.theme.spacing.m };
  }
  &.active  {
    background-color: ${props => (props.to === '/home') ? props.theme.colors.light : props.theme.colors.secondary};
    color: ${props => (props.to === '/home') ? props.theme.colors.secondary : props.theme.colors.white};
    &::after, &::before {
      background-color: ${props => (props.to === '/home') ? props.theme.colors.light : props.theme.colors.secondary};
    }
  }
`;

const TextSpacer = styled.span`
  height: 100%;
  padding: ${props => props.theme.fontSizes.xxs};
`;

export const BreadcrumbItem: React.FC <IBreadcrumbItem> = (props) => {

  return (
    <ArrowItem to={props.to} className={(isActive) => (isActive) ? 'active' : ''}>
      <FontAwesomeIcon icon={props.icon as IconDefinition} />
      {(props.to !== "/home") ? <TextSpacer/> : null}
      {props.content}
    </ArrowItem>
  )
}
