import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import Text from '../Text/Text';
export interface ILabel {
  text: string;
  variant?: 'danger' | 'success' | 'warning' | 'primary';
  closeButton: boolean;
  icon?: IconDefinition;
}

const Container = styled.div<ILabel>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  margin: 3rem;
  width: 100px;
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
    <Container {...props}>
      <FontAwesomeIcon icon={props.icon as IconDefinition} />
      <Text size='s'>{props.text}</Text>
      <FontAwesomeIcon onClick={(ev) => alert('clickeo el cerrar')} icon={faTimes} />
    </Container>
  );
};

export default Label;
