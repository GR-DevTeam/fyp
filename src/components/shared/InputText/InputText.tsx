import { faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

export interface IInputText {
  placeholder?: string;
  icon: IconDefinition;
}

const defaultProps: IInputText = {
  placeholder: 'Search...',
  icon: faSearch,
};

const Icon = styled(FontAwesomeIcon)`
  color: #3a3a3a;
  background: #f0f0f0;
  flex: 0 0;
  padding: 1rem;
  border-radius: 0 5px 5px 0;
`;

const StyledInput = styled.input`
  font-size: 1rem;
  color: black;
  background: transparent;
  outline: none;
  border: none;
  padding: 0 1rem;
  font-weight: bold;
  &::-webkit-input-placeholder {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: transparent;
  width: fit-content;
  box-shadow: 0.5rem 0.25rem 0.5rem #0002;
  border-radius: 5px;
  border: 1px solid #0001;
`;

const InputText: React.FC<IInputText> = (props) => {
  return (
    <Wrapper>
      <StyledInput placeholder={props.placeholder} />
      <Icon icon={props.icon} />
    </Wrapper>
  );
};

InputText.defaultProps = defaultProps;

export default InputText;
