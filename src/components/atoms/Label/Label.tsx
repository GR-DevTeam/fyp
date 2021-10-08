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
  border-radius: 15px;
`;

const Label: React.FC<ILabel> = (props) => {
  return (
    <div>
      <FontAwesomeIcon icon={props.icon as IconDefinition} />
      <Text>{props.text} </Text>
    </div>
  );
};

export default Label;
