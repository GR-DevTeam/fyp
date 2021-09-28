import { faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

export interface IInputText {
  placeholder?: string;
  icon?: IconDefinition;
}

const Icon = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.colors.dark};
  background: ${(props) => props.theme.colors.light};
  flex: 0 0;
  padding: 1rem;
`;

const StyledInput = styled.input`
  font-size: 1rem;
  color: black;
  background: transparent;
  outline: none;
  border: none;
  padding: 0 1rem;
  &::-webkit-input-placeholder {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.colors.white};
  width: fit-content;
  border: 1px solid #0001;
  transition: all ease 0.3s;
  &:hover {
    box-shadow: 0.5rem 0.25rem 0.5rem #0002;
  }
`;

const InputText: React.FC<IInputText> = (props) => {
  return (
    <Wrapper>
      <StyledInput placeholder={props.placeholder} />
      <Icon icon={props.icon as IconDefinition} />
    </Wrapper>
  );
};

InputText.defaultProps = {
  placeholder: 'Search...',
  icon: faSearch,
};

export default InputText;
