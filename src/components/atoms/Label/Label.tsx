import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import Text from '../Text/Text';
export interface ILabel {
  text: string;
  variant?: 'danger' | 'success' | 'warning' | 'info' | 'primary';
  icon?: IconDefinition;
  onClose: (ev: any) => any;
}

const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`;

const Container = styled.div<ILabel>`
  width: fit-content;
  color: ${(props) => props.theme.colors.light};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: ${(props) => props.theme.radius.rounded};
  padding: 0 1rem;
  background-color: ${(props) =>
    props.variant === 'danger'
      ? '#DC3545'
      : props.variant === 'success'
      ? '#28A745'
      : props.variant === 'warning'
      ? '#FFC107'
      : props.variant === 'info'
      ? '#17A2B8'
      : props.theme.colors.primary};
`;

const Label: React.FC<ILabel> = (props) => {
  console.log(props.onClose);
  return (
    <Container {...props}>
      <Icon icon={props.icon as IconDefinition} />
      <Text isLight={true} size="s">
        {props.text}
      </Text>
      {typeof props.onClose == undefined && (
        <FontAwesomeIcon onClick={props.onClose} icon={faTimes} />
      )}
    </Container>
  );
};

export default Label;
