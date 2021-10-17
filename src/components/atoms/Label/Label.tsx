import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import Text from '../Text/Text';
export interface ILabel {
  text: string;
  variant?: 'danger' | 'success' | 'warning' | 'primary';
  closeButton: boolean;
  icon?: IconDefinition;
}

const StyledLabel = styled.div<ILabel>`
  display: flex;
  border-radius: 15px;
  margin: 3rem;
  background-color: ${(props) =>
    props.variant === 'danger'
      ? '#FF0000'
      : props.variant === 'success'
      ? '#00FF00'
      : props.variant === 'warning'
      ? '#FFFF00'
      : props.theme.colors.primary};
`;

const Label: React.FC<ILabel> = (props) => {
  return (
    <div>
      <FontAwesomeIcon icon={props.icon as IconDefinition} />
      <Text size="l" />
    </div>
  );
};

export default Label;
